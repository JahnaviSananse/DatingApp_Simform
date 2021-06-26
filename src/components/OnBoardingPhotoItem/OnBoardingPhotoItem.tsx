import React, {useCallback, useEffect, useState} from 'react';
import {Alert, Text, TouchableOpacity, View} from 'react-native';
import * as Progress from 'react-native-progress';

import AddNewPhotoIcon from '../../components/icons/AddNewPhotoIcon';
import DeletePhotoIcon from '../../components/icons/DeletePhotoIcon';
import {COLORS, CONSTANT, STRINGS} from '../../configs';
import {PhotoBlockProps} from '../../interfaces/OnBoarding';
import {
  getFontWithScaleFactor,
  getHeightWithScaleFactor,
} from '../../utils/dimensions';
import ErrorAlertIcon from '../icons/ErrorAlertIcon';
import {FastImageComponent, Poppins} from '../index';
import styles from './styles';

interface OnboardingPhotoItemProps {
  item: PhotoBlockProps;
  index: number;
  onDelete: (value: number, index: number) => void;
  onAddPhoto: (value: number) => void;
}

const OnboardingPhotoItem: React.FunctionComponent<OnboardingPhotoItemProps> = ({
  item,
  onDelete,
  onAddPhoto,
  index,
}) => {
  const [imgUri, setImgUri] = useState(item.uri);
  useEffect(() => {
    if (item.uri !== imgUri) {
      setImgUri(item.uri);
    }
  }, [imgUri, item]);
  const indexNum = index === 0 || index === 1 || index === 3 || index === 4;
  const deletePhoto = useCallback(() => {
    Alert.alert(
      STRINGS.onBoardingPhoto.alertTitleSure,
      STRINGS.onBoardingPhoto.text,
      [
        {
          onPress: () => null,
          style: 'cancel',
          text: 'Cancel',
        },
        {onPress: () => onDelete(item.id, index), text: 'Delete'},
      ],
      {
        cancelable: false,
      },
    );
  }, [onDelete, item, index]);

  const addPhoto = useCallback(() => {
    onAddPhoto(index);
  }, [onAddPhoto, index]);

  const showAlert = useCallback(() => {
    let message = '';
    if (index === 2 && item.primaryInvalids.length) {
      message = item.primaryInvalids[0];
    } else {
      message = item.invalids[0];
    }
    Alert.alert(
      STRINGS.onBoardingPhoto.alertTitle,
      message,
      [{onPress: () => onDelete(item.id, index), text: 'Delete'}],
      {
        cancelable: false,
      },
    );
  }, [index, item.primaryInvalids, item.invalids, item.id, onDelete]);

  const checkValidateStatus = useCallback(() => {
    if (index === 2) {
      if ((item.approved && item.primary) || item.apiID === null) return true;
      return false;
    } else {
      if (item.approved || item.apiID === null) return true;
      return false;
    }
  }, [item, index]);

  return (
    <View
      style={[
        styles.smallImg,
        {
          backgroundColor: indexNum ? COLORS.white : COLORS.catskillWhite,
        },
        !indexNum && {
          borderColor: checkValidateStatus() ? COLORS.white : COLORS.red,
          borderWidth: checkValidateStatus() ? 3 : 3,
        },
      ]}>
      {typeof item.uri === 'string' ||
      (item.uri && item.uri.uri.length > 0 && !item.spinner) ? (
        <>
          <FastImageComponent
            style={styles.avatarSmall}
            uri={
              typeof imgUri === 'string'
                ? {
                    uri: imgUri,
                  }
                : imgUri
            }
          />
          <Poppins
            lineHeight={13}
            fontSize={10}
            textAlign="left"
            fontWeight="600"
            color={COLORS.silverChalice}
            style={{
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              backgroundColor: COLORS.mercury,
              borderColor: COLORS.white,
              borderRadius: getHeightWithScaleFactor(8),
              borderWidth: getHeightWithScaleFactor(2),
              height: getHeightWithScaleFactor(16),
              justifyContent: 'center',
              left: getHeightWithScaleFactor(-8),
              overflow: 'hidden',
              position: 'absolute',
              textAlign: 'center',
              top: getHeightWithScaleFactor(-8),
              width: getHeightWithScaleFactor(16),
            }}>
            {index === 2 ? '1' : `${index - 3}`}
          </Poppins>
          {indexNum || checkValidateStatus() ? (
            <TouchableOpacity
              hitSlop={CONSTANT.HIT_SLOP_15}
              onPress={deletePhoto}
              style={styles.infoIcon}>
              <DeletePhotoIcon />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              hitSlop={CONSTANT.HIT_SLOP_15}
              style={styles.closeIcon}
              disabled={indexNum || checkValidateStatus()}
              onPress={showAlert}>
              <ErrorAlertIcon />
            </TouchableOpacity>
          )}
        </>
      ) : (
        <View
          style={{
            alignItems: 'center',
            flex: 1,
            height: '100%',
            justifyContent: 'center',
            width: '100%',
          }}>
          {!indexNum && (
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
              {index === 2 ? '1' : `${index - 3}`}
            </Text>
          )}
          <TouchableOpacity
            hitSlop={CONSTANT.HIT_SLOP_15}
            disabled={!item.canAdd}
            onPress={addPhoto}>
            {!item.spinner ? (
              <AddNewPhotoIcon />
            ) : (
              <Progress.Circle size={20} color="#83828D" indeterminate />
            )}
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default React.memo(OnboardingPhotoItem);
