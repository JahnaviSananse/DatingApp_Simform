import AsyncStorage from '@react-native-community/async-storage';
import CameraRoll, {PhotoIdentifier} from '@react-native-community/cameraroll';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList} from 'react-native';
import {IMessage} from 'react-native-gifted-chat';
import RNHeicConverter from 'react-native-heic-converter';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';

import {COLORS, STRINGS} from '../../configs';
import {
  SendAttachMessage,
  createFormDataChatAttachment,
} from '../../utils/request';
import ImageItem from './ImageItem';
import {BtnHeader, BtnSend, CountWrapper, Line, Wrapper} from './styles';
import {Isidora, Row} from '..';

interface Props {
  closeAttach: (value: boolean) => void;
  chatId?: string;
  setIsLoading: (value: boolean) => void;
  showAttachmentMessage: (value: IMessage) => void;
  id: number;
}
interface FileData {
  type: 'image' | 'video';
  uri: string;
  name: string;
}

const GalleryModal: React.FunctionComponent<Props> = ({
  closeAttach,
  chatId,
  setIsLoading,
  showAttachmentMessage,
  id,
}) => {
  const [images, setImages] = useState<Array<PhotoIdentifier>>([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const token = useRef<string | null>(null);

  const getGallery = useCallback(async () => {
    try {
      const imagesList = await CameraRoll.getPhotos({
        assetType: 'All',
        first: 100,
      });
      setImages(imagesList.edges);
    } catch (e) {
      // console.log('got error', e);
    }
  }, []);

  useEffect(() => {
    getGallery();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const closeModal = useCallback(() => {
    setSelectedImages([]);
    closeAttach(false);
  }, [closeAttach]);

  const sendImage = useCallback(
    async (fileData: FileData) => {
      setIsLoading(true);
      try {
        if (!token.current) {
          token.current = await AsyncStorage.getItem('token');
        }

        const formData = createFormDataChatAttachment(
          fileData.name,
          fileData.uri,
          fileData.type,
        );
        // console.log(formData);
        const response = await SendAttachMessage(
          formData,
          token.current,
          chatId,
        );
        showAttachmentMessage({
          _id: `${new Date().getTime()}`,
          createdAt: new Date(),
          isLocal: true,
          isWarning: false,
          [fileData.type]: fileData.uri,
          text: '',
          user: {
            _id: `${id}`,
          },
        });

        setIsLoading(false);
      } catch (e) {
        showAttachmentMessage({
          _id: `${new Date().getTime()}`,
          createdAt: new Date(),
          isLocal: true,
          isWarning: false, // need true (BE issue)
          [fileData.type]: fileData.uri,
          text: '',
          user: {
            _id: `${id}`,
          },
        });
        setIsLoading(false);
      }
    },
    [chatId, id, setIsLoading, showAttachmentMessage],
  );
  const selectedListImages = useCallback(async () => {
    for (const el of selectedImages) {
      const data = images[el - 1];
      // console.log(data);
      if (
        data.node.type === 'image' &&
        data.node.image.filename.toLowerCase().endsWith('.mov')
      ) {
        try {
          const result = await RNHeicConverter.convert({
            path: data.node.image.uri,
            quality: 0.7,
          });
          if (result.success) {
            sendImage({
              name: data.node.type,
              type: data.node.type,
              uri: result.path,
            });
          }
        } catch (er) {
          // console.log(er);
        }
      } else {
        sendImage({
          name: data.node.type,
          type: data.node.type,
          uri: data.node.image.uri,
        });
      }
    }
    closeModal();
  }, [closeModal, images, selectedImages, sendImage]);

  const openCamera = useCallback(() => {
    ImagePicker.launchCamera(
      {maxHeight: 1080, maxWidth: 1920, noData: true},
      (response) => {
        if (!response.didCancel && !response.error && !response.customButton) {
          sendImage({
            name: 'photo',
            type: 'image',
            uri: response.uri,
          });
          closeModal();
        }
      },
    );
  }, [closeModal, sendImage]);

  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <Modal
      isVisible
      propagateSwipe
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection="down"
      onSwipeComplete={closeModal}
      style={{
        // backgroundColor: COLORS.white,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-start',
        margin: 0,
        marginTop: '50%',
      }}>
      <Wrapper>
        <Row style={{justifyContent: 'center'}}>
          <Line />
        </Row>
        <Row
          style={{
            borderBottomColor: COLORS.jumbo,
            borderBottomWidth: 1,
            justifyContent: 'space-between',
          }}>
          <BtnHeader onPress={closeModal}>
            <Isidora
              lineHeight={26}
              fontSize={16}
              textAlign="center"
              fontWeight="600"
              color={COLORS.blackPearl}>
              {STRINGS.chatRoom.attachModal.cancel}
            </Isidora>
          </BtnHeader>
          <Isidora
            lineHeight={26}
            fontSize={16}
            textAlign="center"
            fontWeight="600"
            color={COLORS.blackPearl}
            style={{padding: 12}}>
            {STRINGS.chatRoom.attachModal.recent}
          </Isidora>
          <BtnHeader>
            <Isidora
              lineHeight={26}
              fontSize={16}
              textAlign="center"
              fontWeight="600"
              color={COLORS.blackPearl}>
              {STRINGS.chatRoom.attachModal.albums}
            </Isidora>
          </BtnHeader>
        </Row>
        <Isidora
          lineHeight={26}
          fontSize={14}
          textAlign="left"
          fontWeight="400"
          color={COLORS.blackPearl}
          style={{padding: 10}}>
          {STRINGS.chatRoom.attachModal.label}
        </Isidora>

        <FlatList
          data={[{filename: 'camera', isCamera: true}, ...images]}
          showsVerticalScrollIndicator={false}
          numColumns={3}
          contentContainerStyle={{
            paddingBottom: 100,
          }}
          keyExtractor={useCallback(
            (item, index) => `${item.filename}${index}`,
            [],
          )}
          renderItem={useCallback(
            ({item, index}) => (
              <ImageItem
                index={index}
                item={item}
                selectedImages={selectedImages}
                setSelectedImages={setSelectedImages}
                onPressCamera={openCamera}
              />
            ),
            [openCamera, selectedImages],
          )}
        />
        <Row style={{justifyContent: 'center'}}>
          <BtnSend onPress={selectedListImages}>
            <Isidora
              fontSize={20}
              textAlign="center"
              fontWeight="600"
              color={COLORS.sand}>
              {STRINGS.chatRoom.attachModal.send}
            </Isidora>
            {selectedImages.length > 0 && (
              <CountWrapper>
                <Isidora
                  lineHeight={14}
                  fontSize={14}
                  fontWeight="600"
                  color={COLORS.raspberry}>
                  {selectedImages.length}
                </Isidora>
              </CountWrapper>
            )}
          </BtnSend>
        </Row>
      </Wrapper>
    </Modal>
  );
};

export default React.memo(GalleryModal);
