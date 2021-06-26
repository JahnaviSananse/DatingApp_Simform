import AsyncStorage from '@react-native-community/async-storage';
import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  Appearance,
  Keyboard,
  ScrollView,
  StatusBar,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import ImagePicker from 'react-native-image-picker';
import Loader from 'react-native-modal-loader';

import {HeaderLeftButton, Isidora} from '../../../components';
import AttachmentIcon from '../../../components/icons/AttachmentIcon';
import ListImages from '../../../components/ListImages';
import WarningModalPopUp from '../../../components/WarningModalPopUp';
import {COLORS, STRINGS} from '../../../configs';
import constants from '../../../configs/constants';
import NavigationKey from '../../../navigation/NavigationKey';
import {NavigationParams} from '../../../navigation/NavigationParams';
import {
  useCreateUserQueryMutation,
  useMeQuery,
} from '../../../store/generated/graphql';
import dimensions, {getWidthWithScaleFactor} from '../../../utils/dimensions';
import {
  SendImageBlockReport,
  createFormDataBlockReport,
} from '../../../utils/request';
import {getEmailValidationError} from '../../../utils/validate';
import BtnSend from './BtnSend';

interface ImageItem {
  name: string;
  source: string;
}
type ScreenRouteProp = RouteProp<NavigationParams, 'ContactUsMail'>;

const SendMailSettings: React.FunctionComponent = () => {
  const {
    params: {header, reasonId},
  } = useRoute<ScreenRouteProp>();
  const {goBack, navigate} = useNavigation();
  const [message, setMessage] = useState('');
  const [email, setEmail] = useState('');
  const [attachments, setAttachments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const photoCount = useRef(1);
  const {data} = useMeQuery();

  const [sentUserQueryMutation, res] = useCreateUserQueryMutation();

  const alert = useCallback(() => {
    if (message.trim()) {
      setIsShowModal(true);
    } else {
      goBack();
    }
  }, [message, goBack]);

  useEffect(() => {
    if (res && res.data) {
      navigate(NavigationKey.Settings);
    }
  }, [navigate, res]);

  useEffect(() => {
    if (data?.me?.email) {
      setEmail(data.me.email);
    }
  }, [data]);

  const uploadImages = useCallback(async () => {
    const blobIds = [];
    try {
      const token = await AsyncStorage.getItem('token');
      for (const image of attachments) {
        const formData = createFormDataBlockReport(image);
        const request = await SendImageBlockReport(formData, token);
        blobIds.push(`${request.data.data.blob_id}`);
      }
      return blobIds;
    } catch (error) {
      return [];
    }
  }, [attachments]);

  const sendReport = useCallback(async () => {
    if (message.trim() && !getEmailValidationError(email)) {
      setIsLoading(true);
      const blobIds = await uploadImages();
      if (blobIds.length === attachments.length) {
        sentUserQueryMutation({
          variables: {
            input: {
              attributiveId: reasonId,
              blobIds,
              email,
              message,
            },
          },
        });
      } else {
        setErrorMessage('Something went wrong, please try again');
      }
      setIsLoading(false);
    } else {
      setErrorMessage('Please enter your message and email correctly');
    }
  }, [
    attachments.length,
    email,
    message,
    reasonId,
    sentUserQueryMutation,
    uploadImages,
  ]);

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
            setAttachments((prev: Array<ImageItem>) => [
              ...prev,
              {name, source},
            ]);
          } else {
            setErrorMessage('Wrong image format');
          }
        }
      },
    );
  }, []);

  const keyExtractor = useCallback((item) => item.name, []);

  const renderImages = useCallback(
    ({item}) => <ListImages item={item} setAttachment={setAttachments} />,
    [],
  );

  const onPressPositive = useCallback(() => setIsShowModal(false), []);
  const onPressNegative = useCallback(() => {
    setIsShowModal(false);
    goBack();
  }, [goBack]);

  const onPressPositiveError = useCallback(() => setErrorMessage(''), []);

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      {isShowModal && (
        <WarningModalPopUp
          title={STRINGS.settings.sendMail.titleModal}
          message={STRINGS.settings.sendMail.messageModal}
          hideCloseButton
          positiveText={STRINGS.settings.sendMail.positiveModal}
          negativeText={STRINGS.settings.sendMail.negativeModal}
          onPressPositive={onPressPositive}
          onPressNegative={onPressNegative}
        />
      )}
      {errorMessage.length > 0 && (
        <WarningModalPopUp
          title={STRINGS.settings.sendMail.titleModalError}
          message={errorMessage}
          hideCloseButton
          positiveText={STRINGS.settings.sendMail.positiveModalError}
          negativeText=""
          oneBtn
          onPressPositive={onPressPositiveError}
        />
      )}
      <View
        style={{
          backgroundColor: COLORS.sand,
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingBottom: 9,
          paddingTop: 55,
        }}>
        <View style={{marginRight: 10}}>
          <HeaderLeftButton isCross color={COLORS.blazeBlue} onPress={alert} />
        </View>
        <Isidora fontSize={24} fontWeight="900" lineHeight={24}>
          {header}
        </Isidora>
        <BtnSend onPress={sendReport} isActive={!!message.trim() && !!email} />
      </View>
      <Loader loading={isLoading} size="large" color={COLORS.raspberry} />
      <ScrollView style={{backgroundColor: COLORS.sand, flex: 1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              backgroundColor: COLORS.sand,
              flex: 1,
              paddingHorizontal: getWidthWithScaleFactor(24),
              paddingTop: 16,
            }}>
            <TextInput
              style={{
                backgroundColor: COLORS.white,
                borderBottomLeftRadius: 14,
                borderColor: COLORS.blazeDarker,
                borderTopRightRadius: 14,
                borderWidth: 0.5,
                color: COLORS.blazeBlue,
                fontFamily: message.length
                  ? 'IsidoraSansAlt-SemiBold'
                  : 'IsidoraSansAlt-Light',
                fontSize: 16,
                height: dimensions.HEIGHT * 0.256,
                lineHeight: message.length ? 20 : 0,
                paddingBottom: 15,
                paddingHorizontal: 5,
                paddingTop: 15,
              }}
              selectionColor={COLORS.textInputCursor}
              value={message}
              multiline
              onChangeText={setMessage}
              placeholder={STRINGS.settings.sendMail.message}
              placeholderTextColor={COLORS.blazeBlue}
              keyboardAppearance={Appearance.getColorScheme() || 'default'}
            />

            <TouchableOpacity
              onPress={uploadBtnHandler}
              disabled={attachments.length > 2}
              style={{
                alignItems: 'center',
                backgroundColor: COLORS.white,
                borderBottomLeftRadius: 14,
                borderColor: COLORS.blazeDarker,
                borderTopRightRadius: 14,
                borderWidth: 0.5,
                flexDirection: 'row',
                height: 48,
                marginTop: 34,
                paddingHorizontal: 20,
              }}>
              <AttachmentIcon style={{marginRight: 10}} />
              <Isidora fontWeight="600" fontSize={16}>
                {STRINGS.settings.sendMail.attach}
              </Isidora>
            </TouchableOpacity>
            <Isidora
              textAlign="left"
              fontSize={16}
              fontWeight="500"
              style={{marginTop: 6}}>
              {STRINGS.settings.sendMail.fileType}
            </Isidora>
            <Isidora
              textAlign="left"
              fontSize={16}
              fontWeight="600"
              style={{marginTop: 24}}>
              {STRINGS.settings.sendMail.title}
            </Isidora>
            <TextInput
              style={{
                backgroundColor: COLORS.white,
                borderBottomLeftRadius: 14,
                borderColor: COLORS.blazeDarker,
                borderTopRightRadius: 14,
                borderWidth: 0.5,
                color: COLORS.blazeBlue,
                fontFamily: 'IsidoraSansAlt-SemiBold',
                fontSize: 16,
                height: 48,
                marginTop: 6,
                paddingHorizontal: 10,
              }}
              selectionColor={COLORS.textInputCursor}
              keyboardAppearance={Appearance.getColorScheme() || 'default'}
              value={email}
              onChangeText={setEmail}
              placeholder={STRINGS.settings.sendMail.email}
              placeholderTextColor={COLORS.blazeBlue50}
              keyboardType="email-address"
              autoCorrect={false}
            />
            <Isidora
              textAlign="left"
              fontSize={14}
              fontWeight="600"
              color={COLORS.raspberry}
              style={{height: 20}}>
              {getEmailValidationError(email)}
            </Isidora>
            <FlatList
              data={attachments}
              renderItem={renderImages}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </>
  );
};
export default React.memo(SendMailSettings);
