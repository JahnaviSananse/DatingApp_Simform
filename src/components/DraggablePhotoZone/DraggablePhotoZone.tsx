import AsyncStorage from '@react-native-community/async-storage';
import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Keyboard, Text, View, ViewStyle} from 'react-native';
import {DraggableGrid} from 'react-native-draggable-grid';
import ImagePicker from 'react-native-image-picker';
import * as Progress from 'react-native-progress';

import {
  FastImageComponent,
  OnBoardingPhotoItem,
  Poppins,
} from '../../components/index';
import {COLORS, CONSTANT, STRINGS} from '../../configs';
import {ImageResponse, PhotoBlockProps} from '../../interfaces/OnBoarding';
import {
  useDeleteUserAccountImageMutation,
  useMyAccountImagesLazyQuery,
  useUpdateUserAccountImagesMutation,
} from '../../store/generated/graphql';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';
import {
  AuthForPhoto,
  CreateFormData,
  request,
  requestUpdatePhoto,
} from '../../utils/request';
import styles from './styles';

interface DraggableZoneProps {
  activeButtonStatus?: (status: boolean) => void;
  propStyles: ViewStyle;
  firstOpenProp?: boolean;
  scrollStatus?: (status: boolean) => void;
  dataPhoto?: [];
  force: boolean;
}

const DraggableZone: React.FunctionComponent<DraggableZoneProps> = ({
  activeButtonStatus,
  propStyles,
  scrollStatus,
  force,
}) => {
  const [dragPhotoArray, setDragPhotoArray] = useState(
    CONSTANT.IMAGES_DEFAULT_BLOCK.data,
  );
  const [countImages, setCountImages] = useState(0);
  const [deleteUserImage] = useDeleteUserAccountImageMutation();
  const [updateImages, res] = useUpdateUserAccountImagesMutation();
  const [firstOpen, setFirtsOpen] = useState(true);
  const [loading, setLoading] = useState(false);
  const [getImages, {data, error}] = useMyAccountImagesLazyQuery({
    fetchPolicy: 'network-only',
  });

  const scrollFlatList = useCallback(
    (status) => {
      if (scrollStatus) {
        scrollStatus(status === true ? status : false);
      }
    },
    [scrollStatus],
  );

  const FilteringFunction = useCallback(
    (newArrayWithUploadedPhotos: PhotoBlockProps[]) => {
      const countApproved = newArrayWithUploadedPhotos.filter(
        (item) => item.approved && item.uri !== null && item.apiID !== null,
      );
      const countNotApproved = newArrayWithUploadedPhotos.filter(
        (item) =>
          (item.uri && item.apiID && !item.approved) ||
          (item.primaryInvalids &&
            item.primaryInvalids.length &&
            item.primary === true) ||
          (item.errors && item.errors.length > 0) ||
          (item.invalids && item.invalids.length > 0),
      );
      if (
        countApproved.length > 2 &&
        countNotApproved.length === 0 &&
        activeButtonStatus
      ) {
        activeButtonStatus(true);
      } else if (activeButtonStatus) {
        activeButtonStatus(false);
      }
      Keyboard.dismiss();
    },
    [activeButtonStatus],
  );

  const getImagesFromApi = useCallback(
    (val) => {
      Keyboard.dismiss();
      if (val && val.length > 0) {
        const temporaryArray = dragPhotoArray;
        val.forEach((item) => {
          if (item.position === '1') {
            temporaryArray[2] = {
              ...temporaryArray[2],
              apiID: item.id ? item.id : undefined,
              approved: item.approved,
              disabledDrag: false,
              disabledReSorted: false,
              errors: item.errors,
              id: Number(item.id),
              invalids: item.invalids,
              primary: item.primary,
              primaryInvalids: item.primaryInvalids,
              uri: item.url ? item.url : '',
            };
          } else if (item.position !== '1') {
            temporaryArray[Number(item.position) + 3] = {
              ...temporaryArray[Number(item.position) + 3],
              apiID: item.id ? item.id : undefined,
              approved: item.approved,
              disabledDrag: false,
              disabledReSorted: false,
              errors: item.errors,
              id: Number(item.id),
              invalids: item.invalids,
              primary: item.primary,
              primaryInvalids: item.primaryInvalids,
              uri: item.url,
            };
          }
        });

        const match = temporaryArray.filter(
          (item) => item.apiID && item.apiID !== null,
        );

        if (match.length === 1) {
          temporaryArray[5].disabledDrag = true;
          temporaryArray[5].disabledReSorted = true;
          temporaryArray[5].canAdd = true;
        } else if (match.length > 1 && match.length !== 5) {
          temporaryArray[match.length + 4] = {
            ...temporaryArray[match.length + 4],
            canAdd: true,
            disabledDrag: true,
            disabledReSorted: true,
          };
        }
        setCountImages(match.length);
        setFirtsOpen(false);
        setDragPhotoArray(temporaryArray);
        FilteringFunction(temporaryArray);
      }
    },
    [FilteringFunction, dragPhotoArray],
  );

  useEffect(() => {
    if (!data) {
      getImages();
    }
  }, [data, getImages]);
  useEffect(() => {
    if (res && res.error) {
      alert(res.error.message);
    }
  }, [res]);

  useEffect(() => {
    if (firstOpen && data) {
      getImagesFromApi(data.myAccountImages);
    }
  }, [data, firstOpen, getImagesFromApi]);

  const getToken = useCallback(async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      return token;
    } else {
      const tokenRest = await AuthForPhoto();
      return tokenRest.data.data.jti;
    }
  }, []);

  const updateImageStatus = useCallback(
    (currentArray: PhotoBlockProps[], data: ImageResponse) => {
      Keyboard.dismiss();
      const newArrayWithUploadedPhotos: PhotoBlockProps[] = currentArray.map(
        (item, index) =>
          (index === 2 ? 1 : index - 3) === data.position && index !== 4
            ? {
                ...item,
                apiID: data.id,
                approved: data.approved,
                default: data.default,
                disabledDrag: false,
                disabledReSorted: false,
                errors: [...data.errors],
                invalids: [...data.invalids],
                primary: data.primary,
                primaryInvalids: [...data.primary_invalids],
              }
            : {...item},
      );
      setDragPhotoArray(newArrayWithUploadedPhotos);
      FilteringFunction(newArrayWithUploadedPhotos);
    },
    [setDragPhotoArray, FilteringFunction],
  );

  const postImages = useCallback(
    async (currentArray, data, id, indexId) => {
      if (activeButtonStatus) {
        activeButtonStatus(false);
      }
      setLoading(true);
      const addSpinnerToPhoto = dragPhotoArray.map((item, index) =>
        index === indexId ? {...item, spinner: true} : {...item},
      );
      setDragPhotoArray(addSpinnerToPhoto);
      const res = await request(CreateFormData(data, id), await getToken());
      if (res.data) {
        if (activeButtonStatus) {
          activeButtonStatus(true);
        }
        updateImageStatus(currentArray, res.data.data);
        setLoading(false);
      } else {
        const deleteSpinnerFromPhoto = dragPhotoArray.map((item, index) =>
          index === indexId ? {...item, spinner: false} : {...item},
        );
        setDragPhotoArray(deleteSpinnerFromPhoto);
        setLoading(false);
        alert('Error upload photo', res.error);
      }
      Keyboard.dismiss();
    },
    [dragPhotoArray, getToken, updateImageStatus, activeButtonStatus],
  );

  const updateImagesPositions = useCallback(
    (array) => {
      if (loading) {
        alert(STRINGS.onBoardingPhoto.waiting);
      } else {
        setLoading(true);
        Keyboard.dismiss();
        let updatePositionsOnApi = array.filter(
          (item) => item.apiID && item.uri,
        );
        updatePositionsOnApi = updatePositionsOnApi.map(
          (item: {apiID: number; primary: boolean}, index: number) => ({
            id: item.apiID ? item.apiID : null,
            position: `${index + 1}`,
          }),
        );
        updateImages({
          variables: {
            images: updatePositionsOnApi,
          },
        });
        setDragPhotoArray([...array]);
        if (scrollFlatList) {
          scrollFlatList(true);
        }
        setLoading(false);
      }
    },
    [scrollFlatList, updateImages, setDragPhotoArray, loading],
  );

  const updateImage = useCallback(
    async (currentArray, data, id, indexId) => {
      const temporaryArray = dragPhotoArray;
      const updateArrayPhotos = temporaryArray.map((item, index) =>
        index === indexId
          ? {
              ...item,
              spinner: true,
              uri: '',
            }
          : {...item},
      );
      setDragPhotoArray([...updateArrayPhotos]);

      setLoading(true);
      const res = await requestUpdatePhoto(
        CreateFormData(data, id),
        await getToken(),
        id,
      );
      if (res.data) {
        if (activeButtonStatus) {
          activeButtonStatus(true);
        }
        const temporaryArray = dragPhotoArray;
        const updateArrayPhotos = temporaryArray.map((item, index) =>
          index === indexId
            ? {
                ...item,
                apiID: res.data.data.id,
                approved: true,
                spinner: false,
                uri: res.data.data.middle_url,
              }
            : {...item},
        );
        setDragPhotoArray([...updateArrayPhotos]);
        setLoading(false);
      } else {
        setLoading(false);
        // console.log(res.error);
        alert('Error upload photo', res.error);
      }
      Keyboard.dismiss();
    },
    [activeButtonStatus, getToken, dragPhotoArray],
  );

  const addPhoto = useCallback(
    (id: number, update?: boolean, photoIndex?: number) => {
      Keyboard.dismiss();
      ImagePicker.showImagePicker(CONSTANT.IMG_PICKER_OPTIONS, (response) => {
        Keyboard.dismiss();
        if (!response.didCancel && !response.error) {
          const format = response.uri.split('.');
          if (
            format[format.length - 1] === 'png' ||
            format[format.length - 1] === 'jpg' ||
            format[format.length - 1] === 'jpeg'
          ) {
            let currentArray = dragPhotoArray.map((item, index) =>
              index === id ? {...item, uri: response} : {...item},
            );
            Keyboard.dismiss();
            currentArray = currentArray.map((item, index) =>
              (id === 2 && index === id + 3) ||
              (id === 5 && index === id + 1) ||
              (id === 6 && index === id + 1) ||
              (id === 7 && index === id + 1)
                ? {
                    ...item,
                    canAdd: true,
                    disabledDrag: true,
                    disabledReSorted: true,
                  }
                : {...item},
            );
            if (update) {
              updateImage(currentArray, response, id, photoIndex);
            } else {
              postImages(currentArray, response, id === 2 ? 1 : id - 3, id);
            }
            setCountImages(countImages + 1);
          } else {
            alert('Incorrect photo format');
          }
        }
      });
      Keyboard.dismiss();
    },
    [dragPhotoArray, countImages, postImages, updateImage],
  );

  const deletePhoto = useCallback(
    (id: number, indexNum: number) => {
      if (loading) {
        alert(STRINGS.onBoardingPhoto.waiting);
      } else {
        setLoading(true);
        const fullArray = dragPhotoArray.filter(
          (item) => item.apiID && Number(item.apiID) > 0,
        );
        if (fullArray.length > 3 || force) {
          const array = dragPhotoArray.map((item) =>
            item.id === id ? {...item, uri: null} : {...item},
          );
          const index = array.findIndex((item) => item.id === id);
          if (index > -1) {
            if (index === 2) {
              [array[2], array[5]] = [array[5], array[2]];
            }
            const itemForDelete = array[index === 2 ? 5 : index];
            deleteUserImage({
              variables: {force: force, imageId: `${itemForDelete.apiID}`},
            });
            array.splice(index === 2 ? 5 : index, 1);
            array.push({
              ...itemForDelete,
              apiID: null,
              approved: true,
              canAdd: false,
              disabledDrag: array[7].uri ? false : true,
              disabledReSorted: array[7].uri ? false : true,
              errors: [],
              invalids: [],
              primary: false,
              primaryInvalids: [],
            });
            setCountImages(countImages - 1);
            const fullBoxes = array.filter((item) => item.apiID !== null);
            if (fullBoxes && fullBoxes.length === 8) {
              array[array.length - 1].canAdd = true;
            }
            array[index].canAdd = true;
            setLoading(false);
          }
          updateImagesPositions([...array]);
          FilteringFunction([...array]);
        } else if (fullArray.length < 4 && !force) {
          Alert.alert(
            'Oh, Oh!',
            `You can't delete this image, because you should have min 3 photos. You can only change it to new photo`,
            [
              {
                onPress: () => null,
                style: 'cancel',
                text: 'Cancel',
              },
              {
                onPress: () => addPhoto(id, true, indexNum),
                text: 'OK',
              },
            ],
            {cancelable: false},
          );
        }
      }
    },
    [
      loading,
      dragPhotoArray,
      updateImagesPositions,
      FilteringFunction,
      deleteUserImage,
      force,
      countImages,
      addPhoto,
    ],
  );

  const renderCountPrimaryImage = useCallback(
    () => (
      <Text
        style={{
          alignContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          backgroundColor: COLORS.mercury,
          borderColor: COLORS.white,
          borderRadius: getHeightWithScaleFactor(8),
          borderWidth: getHeightWithScaleFactor(2),
          color: COLORS.silverChalice,
          fontSize: getFontWithScaleFactor(10),
          fontWeight: '600',
          height: getHeightWithScaleFactor(16),
          justifyContent: 'center',
          left: getHeightWithScaleFactor(-8),
          overflow: 'hidden',
          position: 'absolute',
          textAlign: 'center',
          top: getHeightWithScaleFactor(-8),
          width: getHeightWithScaleFactor(16),
        }}>
        1
      </Text>
    ),
    [],
  );

  const renderItem = useCallback(
    (item: PhotoBlockProps, index: number) => {
      return (
        <View
          style={[styles.item, {marginTop: index === 5 ? 2 : 0}]}
          key={item.key}>
          <OnBoardingPhotoItem
            onDelete={deletePhoto}
            onAddPhoto={addPhoto}
            item={item}
            index={index}
          />
        </View>
      );
    },
    [deletePhoto, addPhoto],
  );

  return (
    <View style={{paddingHorizontal: getWidthWithScaleFactor(4)}}>
      <DraggableGrid
        numColumns={3}
        renderItem={renderItem}
        data={dragPhotoArray}
        onDragStart={scrollFlatList}
        onDragRelease={updateImagesPositions}
      />
      <View style={[styles.bigImg, propStyles]}>
        {countImages > 0 ? (
          <>
            <FastImageComponent
              style={styles.bigImg}
              uri={dragPhotoArray[2].uri}
            />
            {dragPhotoArray[2].spinner && (
              <Progress.Circle size={20} color="#83828D" indeterminate />
            )}
            {renderCountPrimaryImage()}
          </>
        ) : (
          <>
            <Poppins
              lineHeight={36}
              fontSize={14}
              textAlign="center"
              fontWeight="300"
              color={COLORS.ebony}>
              {STRINGS.onBoardingPhoto.profilePhoto}
            </Poppins>
            {renderCountPrimaryImage()}
          </>
        )}
      </View>
    </View>
  );
};

export default React.memo(DraggableZone);
