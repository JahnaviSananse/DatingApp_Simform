import AsyncStorage from '@react-native-community/async-storage';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Alert,
  Appearance,
  FlatList,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StatusBar,
  TouchableWithoutFeedback,
} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import Modal from 'react-native-modal';
import Loader from 'react-native-modal-loader';

import {COLORS} from '../../../configs';
import constants from '../../../configs/constants';
import strings from '../../../configs/styles/strings';
import {
  useCreateUserQueryMutation,
  useMeQuery,
  useUserUnlikeMutation,
} from '../../../store/generated/graphql';
import {
  SendImageBlockReport,
  createFormDataBlockReport,
} from '../../../utils/request';
import {getEmailValidationError} from '../../../utils/validate';
import AttachmentBlackIcon from '../../icons/AttachmentBlackIcon';
import CloseIcon from '../../icons/CloseIcon';
import {Isidora} from '../../index';
import ListImages from '../../ListImages';
import Row from '../../Row';
import {Btn, InputBlock, UploadBtn} from './styles';

interface Props {
  isVisible: boolean;
  selectedReason: {
    reasonId: string;
    mandatory: boolean;
  };
  closeModal: () => void;
  userId: string;
  type: 'unmatch' | 'report' | null;
  onSuccessesSend?: () => void;
}

interface ImageItem {
  name: string;
  source: string;
}

const TellUsMoreModal: React.FunctionComponent<Props> = ({
  isVisible,
  selectedReason,
  closeModal,
  userId,
  type,
  onSuccessesSend,
}) => {
  const {data} = useMeQuery();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [attachment, setAttachment] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const photoCount = useRef(1);

  const [sentUserQueryMutation, res] = useCreateUserQueryMutation();
  const [userUnlikeMutation, resUnmatch] = useUserUnlikeMutation();

  const [isInputEmailFocused, setIsInputEmailFocused] = useState(false);

  useEffect(() => {
    if (data?.me?.email) {
      setEmail(data.me.email);
    }
  }, [data]);

  const uploadImages = useCallback(async () => {
    const blobIds = [];
    try {
      const token = await AsyncStorage.getItem('token');
      for (const image of attachment) {
        const formData = createFormDataBlockReport(image);
        const request = await SendImageBlockReport(formData, token);
        blobIds.push(`${request.data.data.blob_id}`);
      }
      return blobIds;
    } catch (error) {
      return [];
    }
  }, [attachment]);

  const sendReport = useCallback(async () => {
    if (
      (message.trim() || !selectedReason.mandatory) &&
      !getEmailValidationError(email) &&
      email
    ) {
      setIsLoading(true);
      const blobIds = await uploadImages();
      if (blobIds.length === attachment.length) {
        if (type === 'report') {
          sentUserQueryMutation({
            variables: {
              input: {
                attributiveId: selectedReason.reasonId,
                blobIds,
                email,
                message,
                suspectedUserId: userId,
              },
            },
          });
        } else if (type === 'unmatch') {
          userUnlikeMutation({
            variables: {
              input: {
                attributiveId: selectedReason.reasonId,
                blobIds,
                comment: message,
                userAccountId: userId,
              },
            },
          });
        }
      }
      setIsLoading(false);
    } else if ((message.trim() || !selectedReason.mandatory) && !email) {
      Alert.alert(strings.feedbackFlow.enterEmail);
    } else if (
      !message.trim() &&
      selectedReason.mandatory &&
      email &&
      !getEmailValidationError(email)
    ) {
      Alert.alert(strings.feedbackFlow.enterMessageAndEmail);
    } else if (!message.trim() && selectedReason.mandatory && !email) {
      Alert.alert(strings.feedbackFlow.enterMessageAndEmail);
    } else {
      Alert.alert(strings.feedbackFlow.wrong);
    }
  }, [
    attachment.length,
    email,
    message,
    selectedReason.mandatory,
    selectedReason.reasonId,
    sentUserQueryMutation,
    type,
    uploadImages,
    userId,
    userUnlikeMutation,
  ]);

  useEffect(() => {
    if (
      (type === 'report' && res && res.data) ||
      (type === 'unmatch' && resUnmatch && resUnmatch.data)
    ) {
      closeModal();
      if (onSuccessesSend) {
        onSuccessesSend();
      }
    } else if (
      (type === 'report' && res && res.error) ||
      (type === 'unmatch' && resUnmatch && resUnmatch.error)
    ) {
      Alert.alert(strings.feedbackFlow.wrong);
    }
  }, [closeModal, onSuccessesSend, res, resUnmatch, type]);

  const uploadBtnHandler = useCallback(() => {
    Keyboard.dismiss();
    ImagePicker.showImagePicker(
      constants.IMG_PICKER_OPTIONS_GENERAL,
      (response) => {
        if (!response.didCancel && !response.error && !response.customButton) {
          const format = response.uri.split('.');
          if (
            (format[format.length - 1] === 'png' ||
              format[format.length - 1] === 'jpg' ||
              format[format.length - 1] === 'jpeg') &&
            response.fileSize < 5000000
          ) {
            const source = {uri: response.uri};
            const name = `IMG ${photoCount.current}.${
              format[format.length - 1]
            }`;
            photoCount.current += 1;
            setAttachment((prev: Array<ImageItem>) => [
              ...prev,
              {name, source},
            ]);
          } else {
            Alert.alert(
              strings.feedbackFlow.photoError,
              strings.feedbackFlow.wrongFormat,
            );
          }
        }
      },
    );
  }, []);

  const rendeItemImage = useCallback(
    ({item}) => <ListImages item={item} setAttachment={setAttachment} />,
    [],
  );

  const keyExtractor = useCallback((item) => item.name, []);
  return (
    <TouchableWithoutFeedback style={{flex: 1}} onPress={Keyboard.dismiss}>
      <Modal
        isVisible={isVisible}
        propagateSwipe
        animationIn="slideInUp"
        animationOut="slideOutDown"
        style={{
          backgroundColor: COLORS.sand,
          justifyContent: 'flex-start',
          margin: 0,
          paddingHorizontal: 20,
          paddingTop: 54,
        }}>
        <StatusBar backgroundColor={COLORS.sand} barStyle="dark-content" />
        <Loader loading={isLoading} size="large" color={COLORS.raspberry} />
        <ScrollView showsVerticalScrollIndicator={false}>
          <Row
            style={{
              alignItems: 'center',
              backgroundColor: COLORS.sand,
              justifyContent: 'space-between',
              zIndex: 1,
            }}>
            <Btn onPress={closeModal}>
              <CloseIcon color={COLORS.blazeBlue} />
            </Btn>
            <Btn onPress={sendReport}>
              <Isidora
                lineHeight={24}
                fontSize={18}
                fontWeight="900"
                color={COLORS.raspberry}>
                {strings.feedbackFlow.send}
              </Isidora>
            </Btn>
          </Row>
          <KeyboardAvoidingView
            behavior="position"
            keyboardVerticalOffset={30}
            enabled={isInputEmailFocused}>
            <Row style={{marginBottom: 12, marginTop: 18}}>
              <Isidora
                lineHeight={20}
                fontSize={16}
                fontWeight="900"
                color={COLORS.blazeBlue}>
                {!selectedReason.mandatory
                  ? strings.feedbackFlow.tellMoreOptional
                  : strings.feedbackFlow.tellMore}
              </Isidora>
              {!selectedReason.mandatory && (
                <Isidora
                  lineHeight={20}
                  fontSize={16}
                  fontWeight="400"
                  color={COLORS.blazeBlue50}>
                  {strings.feedbackFlow.optional}
                </Isidora>
              )}
            </Row>
            <Isidora
              lineHeight={18}
              fontSize={14}
              textAlign="left"
              fontWeight="600"
              color={COLORS.blazeBlue}>
              {!selectedReason.mandatory
                ? strings.feedbackFlow.sendLabelOptional
                : strings.feedbackFlow.sendLabel}
            </Isidora>
            <InputBlock
              message
              multiline
              placeholderTextColor={COLORS.blazeBlue50}
              placeholder={strings.feedbackFlow.placeholderMessage}
              onChangeText={setMessage}
              keyboardAppearance={Appearance.getColorScheme() || 'default'}
            />
            <UploadBtn onPress={uploadBtnHandler}>
              <AttachmentBlackIcon />
              <Isidora
                lineHeight={20}
                fontSize={14}
                fontWeight="600"
                color={COLORS.blazeBlue}
                style={{marginLeft: 10}}>
                {strings.feedbackFlow.attach}
              </Isidora>
            </UploadBtn>
            <Isidora
              lineHeight={22}
              fontSize={14}
              textAlign="left"
              fontWeight="300"
              color={COLORS.blazeBlue}>
              {strings.feedbackFlow.fileType}
            </Isidora>
            <Isidora
              lineHeight={20}
              fontSize={16}
              textAlign="left"
              fontWeight="600"
              color={COLORS.blazeBlue}
              style={{marginTop: 14}}>
              {strings.feedbackFlow.emailLabel}
            </Isidora>
            <InputBlock
              placeholderTextColor={COLORS.blazeBlue50}
              placeholder={strings.feedbackFlow.placeholderEmail}
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
              autoCorrect={false}
              keyboardAppearance={Appearance.getColorScheme() || 'default'}
              onFocus={useCallback(() => setIsInputEmailFocused(true), [])}
              onBlur={useCallback(() => setIsInputEmailFocused(false), [])}
            />
            <Isidora
              lineHeight={18}
              fontSize={14}
              textAlign="left"
              fontWeight="400"
              color={COLORS.raspberry}
              style={{marginBottom: 10, marginTop: -10}}>
              {getEmailValidationError(email)}
            </Isidora>
          </KeyboardAvoidingView>
          <FlatList
            data={attachment}
            keyExtractor={keyExtractor}
            renderItem={rendeItemImage}
            contentContainerStyle={{paddingBottom: 20}}
            showsVerticalScrollIndicator={false}
          />
        </ScrollView>
      </Modal>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(TellUsMoreModal);
