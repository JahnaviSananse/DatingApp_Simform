import {useNavigation} from '@react-navigation/native';
import React, {useCallback, useEffect, useState} from 'react';
import {
  Linking,
  ScrollView,
  SectionList,
  StatusBar,
  TouchableOpacity,
  View,
} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import DeleteAccModal from '../../components/DeleteAccModal';
import FFTextInput from '../../components/FFTextInput';
import {ArrowRight, Isidora, Row} from '../../components/index';
import WarningModalPopUp from '../../components/WarningModalPopUp';
import {COLORS, STRINGS} from '../../configs';
import strings from '../../configs/styles/strings';
import NavigationKey from '../../navigation/NavigationKey';
import {
  useDeleteAccountMutation,
  useMeQuery,
  useUserAccountUpdateMutation,
} from '../../store/generated/graphql';
import {getHeightWithScaleFactor} from '../../utils/dimensions';
import {AuthContext} from '../../utils/login-context';
import {getEmailValidationError} from '../../utils/validate';
import {CustomTouchableOpacity} from './CustomComponents/CustomTouchableOpacity';

export type GroupItem = {
  title?: string;
  type?: string;
  value?: string;
  additionalText?: string;
  to?: string;
  link?: string;
};

export const Groups: Array<{
  data: GroupItem[];
  title: string;
}> = [
  {
    data: [
      {
        additionalText: STRINGS.settings.additionalTextPush,
        title: STRINGS.settings.pushNotofication,
        to: NavigationKey.PushNotificationSettings,
        type: 'link',
      },
      {
        link: 'https://www.ffwd-dating.com/terms-of-use',
        title: STRINGS.settings.termsOfUse,
        type: 'browser',
      },
      {
        link: 'https://www.ffwd-dating.com/privacy-policy',
        title: STRINGS.settings.privacyPolicy,
        type: 'browser',
      },
      {
        link: 'https://www.ffwd-dating.com/privacy-policy/#cookie-policy',
        title: STRINGS.settings.cookiesPolicy,
        type: 'browser',
      },
    ],
    title: STRINGS.settings.privacy,
  },
  {
    data: [
      {
        link: 'https://ffwd-dating.com/faq',
        title: STRINGS.settings.faq,
        type: 'browser',
      },
      {
        title: STRINGS.settings.contact,
        to: NavigationKey.ContactUs,
        type: 'link',
      },
      {
        title: STRINGS.settings.scene,
        to: NavigationKey.VideoRecordIntro,
        type: 'link',
      },
    ],
    title: STRINGS.settings.helpSupport,
  },
];

const ProfileSettings: React.FunctionComponent = () => {
  const {navigate, goBack} = useNavigation();
  const {data} = useMeQuery();
  const [
    updateUserAccount,
    {error: updateEmailError},
  ] = useUserAccountUpdateMutation();

  const [
    deleteAccountMutation,
    {data: deleteData},
  ] = useDeleteAccountMutation();

  const [dataArray] = useState(Groups);

  const keyExtractor = useCallback((item) => `${item.title} + ${item.id}`, []);

  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState('');
  const [isVisibleWarningModal, setIsVisibleWarningModal] = useState(false);
  const [isVisibleDeleteModal, setIsVisibleDeleteModal] = useState(false);

  const {signOut} = React.useContext(AuthContext);

  useEffect(() => {
    if (data) {
      setEmail(data.me?.email);
      setPhone(data.me?.phone);
    }
  }, [data]);

  const logOut = useCallback(() => {
    if (signOut) {
      signOut();
    }
  }, [signOut]);
  useEffect(() => {
    if (deleteData) {
      logOut();
    }
  }, [deleteData, logOut]);

  const action = useCallback(
    (screen: string) => {
      if (screen) {
        if (screen === NavigationKey.VideoRecordIntro) {
          navigate(screen, {fromSettings: true});
        }
        navigate(screen);
      }
    },
    [navigate],
  );

  const updateEmail = useCallback(() => {
    if (!getEmailValidationError(email)) {
      updateUserAccount({
        variables: {
          input: {
            email,
          },
        },
      });
    }
  }, [email, updateUserAccount]);

  const onPressHandler = useCallback(
    (item) => {
      if (item.item.type === 'link') {
        action(item.item.to);
      }
      if (item.item.type === 'browser') {
        Linking.canOpenURL(item.item.link).then((supported) => {
          if (supported) {
            Linking.openURL(item.item.link);
          }
        });
      }
    },
    [action],
  );

  const renderSectionListItem = useCallback(
    (item) => {
      return (
        <CustomTouchableOpacity
          onPress={onPressHandler}
          style={{
            borderBottomColor: COLORS.blazeBlue20,
            borderBottomWidth:
              item.item.title === STRINGS.settings.cookiesPolicy ||
              item.item.title === STRINGS.settings.scene
                ? 0
                : 0.5,
            justifyContent: 'center',
            minHeight: 56,
          }}
          item={item}>
          <Row style={{alignItems: 'center', justifyContent: 'space-between'}}>
            <Isidora
              lineHeight={24}
              fontSize={16}
              textAlign="left"
              fontWeight="600"
              color={COLORS.blazeBlue}>
              {item.item.title}
            </Isidora>
            <ArrowRight color={COLORS.raspberry} />
          </Row>
          {item.item?.additionalText &&
            data &&
            !data?.me?.pushExpiringConversation &&
            !data?.me?.pushExpiringMessages &&
            !data?.me?.pushNewLike &&
            !data?.me?.pushNewMatch &&
            !data?.me?.pushNewMessage &&
            !data?.me?.pushNewSuperLike && (
              <Isidora
                lineHeight={14}
                fontSize={12}
                textAlign="left"
                fontWeight="600"
                color={COLORS.raspberry}
                style={{marginBottom: 19, marginTop: 2}}>
                {item.item?.additionalText}
              </Isidora>
            )}
        </CustomTouchableOpacity>
      );
    },
    [data, onPressHandler],
  );

  const renderHeaderListItem = useCallback((item) => {
    return (
      <Isidora
        lineHeight={18}
        fontSize={16}
        textAlign="left"
        fontWeight="900"
        color={COLORS.blazeBlue}
        style={{
          marginBottom: -1,
          marginTop:
            item.section.title === STRINGS.settings.helpSupport ? 15 : 0,
          textTransform: 'uppercase',
        }}>
        {item.section.title}
      </Isidora>
    );
  }, []);

  const onShowModal = useCallback(() => {
    setIsVisibleWarningModal(true);
  }, []);

  const onPressNegativeDelete = useCallback(
    () => setIsVisibleWarningModal(false),
    [],
  );
  const onPressPositiveDelete = useCallback(() => {
    setIsVisibleWarningModal(false);
    // setIsVisibleDeleteModal(true);
    deleteAccountMutation({
      variables: {
        input: {
          attributiveId: '1',
          blobIds: [],
          comment: 'delete',
        },
      },
    });
  }, [deleteAccountMutation]);
  return (
    <>
      {isVisibleWarningModal && (
        <WarningModalPopUp
          hideCloseButton
          message={strings.settings.deleteAccMessage}
          negativeText={strings.settings.deleAccCencel}
          positiveText={strings.settings.deleteAccount}
          title={strings.settings.deleteAccQuestion}
          onPressNegative={onPressNegativeDelete}
          onPressPositive={onPressPositiveDelete}
        />
      )}
      {isVisibleDeleteModal && (
        <DeleteAccModal closeModal={setIsVisibleDeleteModal} />
      )}

      <ScrollView
        style={{
          backgroundColor: COLORS.sand,
          flex: 1,
          paddingHorizontal: 24,
        }}
        contentContainerStyle={{paddingBottom: ifIphoneX(30, 15)}}>
        <StatusBar
          translucent
          backgroundColor="transparent"
          barStyle="dark-content"
        />

        {data?.me?.phone && (
          <>
            <Isidora
              lineHeight={18}
              fontSize={16}
              textAlign="left"
              fontWeight="900"
              color={COLORS.blazeBlue}
              style={{marginBottom: 7, marginTop: 16}}>
              {STRINGS.settings.phoneNumber}
            </Isidora>
            <FFTextInput
              placeholder={STRINGS.settings.addPhoneNumber}
              value={phone}
              editable={false}
            />
          </>
        )}

        <Isidora
          lineHeight={18}
          fontSize={16}
          textAlign="left"
          fontWeight="900"
          color={COLORS.blazeBlue}
          style={{marginBottom: 7, marginTop: 19, textTransform: 'uppercase'}}>
          {STRINGS.settings.email}
        </Isidora>
        <FFTextInput
          placeholder={STRINGS.settings.addEmail}
          value={email}
          keyboardType="email-address"
          returnKeyType="done"
          onChangeText={setEmail}
          onBlur={updateEmail}
        />
        <Isidora
          lineHeight={14}
          fontSize={12}
          textAlign="left"
          fontWeight="600"
          color={COLORS.raspberry}
          style={{marginBottom: 5, marginTop: 3, minHeight: 16}}>
          {updateEmailError
            ? 'Email has already been taken'
            : getEmailValidationError(email)}
        </Isidora>

        <SectionList
          style={{
            marginBottom: getHeightWithScaleFactor(30),
            marginTop: 12,
          }}
          scrollEnabled={false}
          sections={dataArray}
          keyExtractor={keyExtractor}
          showsVerticalScrollIndicator={false}
          renderItem={renderSectionListItem}
          renderSectionHeader={renderHeaderListItem}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: -23,
          }}>
          <TouchableOpacity
            onPress={onShowModal}
            style={{
              backgroundColor: COLORS.blazeLightBlue60,
              borderRadius: 30,
              paddingVertical: 15,
              width: '47%',
            }}>
            <Isidora
              lineHeight={18}
              fontSize={16}
              fontWeight="900"
              color={COLORS.sand}>
              {strings.settings.deleteAccount}
            </Isidora>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={logOut}
            style={{
              backgroundColor: COLORS.raspberry,
              borderRadius: 30,
              paddingVertical: 15,
              width: '47%',
            }}>
            <Isidora
              lineHeight={18}
              fontSize={16}
              fontWeight="900"
              color={COLORS.sand}>
              {strings.settings.logOut}
            </Isidora>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default React.memo(ProfileSettings);
