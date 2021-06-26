import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
// MODULES
import React, {useCallback, useContext, useEffect, useState} from 'react';
import {
  Alert,
  Appearance,
  Keyboard,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import Modal from 'react-native-modal';
import {formatPhoneNumberIntl} from 'react-phone-number-input';

import {
  Isidora,
  OnBoardingFooter,
  PageHeaderTitle,
} from '../../components/index';
// CUSTOM MODULES
import {COLORS, STRINGS} from '../../configs';
import colors from '../../configs/styles/colors';
import {NavigationParams} from '../../navigation/NavigationParams';
import {
  useUserSignByPhoneMutation,
  useUserSignInMutation,
} from '../../store/generated/graphql';
import {getHeightWithScaleFactor} from '../../utils/dimensions';
import {AuthContext} from '../../utils/login-context';
import styles from './styles';

interface Props {
  onSelect: (index: number) => void;
  index: number;
  symbol: string;
  isFocused: boolean;
}

type ScreenRouteProp = RouteProp<NavigationParams, 'PhoneCodeScreen'>;

const CodeFieldItem: React.FunctionComponent<Props> = ({
  onSelect,
  index,
  symbol,
  isFocused,
}) => {
  const onSelectFunction = useCallback(() => {
    onSelect(index);
  }, [index, onSelect]);

  const cellTopRadius = () => {
    if (index === 0) return 14;
    else return 0;
  };

  const cellBottomRadius = () => {
    if (index === 3) return 14;
    else return 0;
  };

  return (
    <>
      <TouchableOpacity
        onPress={onSelectFunction}
        key={index}
        style={{
          alignItems: 'center',
          backgroundColor: colors.white,
          borderBottomLeftRadius: cellTopRadius(),
          borderColor: COLORS.blazeDarker,
          borderTopRightRadius: cellBottomRadius(),
          borderWidth: 0.5,
          height: 48,
          justifyContent: 'center',
          width: 70,
        }}>
        <Isidora
          lineHeight={27}
          fontSize={18}
          color={colors.blazeBlue}
          key={index}>
          {symbol || (isFocused ? <Cursor /> : null)}
        </Isidora>
      </TouchableOpacity>
    </>
  );
};

const ReSendModal: React.FunctionComponent = ({visible, onClose, onSelect}) => {
  const selectSend = useCallback(() => {
    onSelect(true);
  }, [onSelect]);

  const selectEdit = useCallback(() => {
    onSelect(false);
  }, [onSelect]);

  const selectClose = useCallback(() => {
    onClose(false);
  }, [onClose]);

  return (
    <Modal
      isVisible={visible}
      onBackdropPress={selectClose}
      backdropOpacity={1}
      backdropColor={COLORS.backdrop}>
      <View style={styles.alertResendWrapper}>
        <TouchableOpacity
          onPress={selectSend}
          style={[
            styles.alertResend,
            {
              borderBottomWidth: 0.5,
              borderColor: COLORS.silverChalice,
              borderTopLeftRadius: getHeightWithScaleFactor(15),
              borderTopRightRadius: getHeightWithScaleFactor(15),
            },
          ]}>
          <Isidora fontSize={14} fontWeight="900" color={COLORS.blazeBlue}>
            {STRINGS.onBoardingCode.resend}
          </Isidora>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectEdit}
          style={[
            styles.alertResend,
            {
              borderBottomEndRadius: getHeightWithScaleFactor(15),
              borderBottomStartRadius: getHeightWithScaleFactor(15),
            },
          ]}>
          <Isidora fontSize={14} fontWeight="900" color={COLORS.blazeBlue}>
            {STRINGS.onBoardingCode.edit}
          </Isidora>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={selectClose}
          style={[
            styles.alertResend,
            {
              borderRadius: getHeightWithScaleFactor(15),
              marginTop: getHeightWithScaleFactor(10),
            },
          ]}>
          <Isidora fontSize={14} fontWeight="900" color={COLORS.blazeBlue}>
            {STRINGS.onBoardingCode.cancel}
          </Isidora>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

type TimerProps = {
  setShowTimer: (value: boolean) => void;
  isShowTimer: boolean;
};

const TimerString: React.FunctionComponent<TimerProps> = React.memo(
  ({setShowTimer, isShowTimer}) => {
    const [timer, setTime] = useState(15);

    useEffect(() => {
      if (isShowTimer) {
        setTimeout(() => {
          const countTime = timer - 1;
          setTime(countTime);
        }, 1000);
        if (timer === 0) {
          setShowTimer(false);
        }
      }
    }, [isShowTimer, setShowTimer, timer]);

    return (
      <Isidora
        lineHeight={18}
        fontSize={14}
        textAlign="left"
        fontWeight="600"
        color={COLORS.blazeBlue}
        style={styles.about}>
        {STRINGS.onBoardingCode.timer(timer)}
      </Isidora>
    );
  },
);

const OnboardingSMS: React.FunctionComponent = () => {
  const {signIn} = useContext(AuthContext);
  const {goBack} = useNavigation();

  const [activeButton, setActiveButton] = useState(false);
  const [value, setValue] = useState('');
  const CELL_COUNT = 4;
  const [userSignIn, resultSignIn] = useUserSignInMutation();
  const [isShowTimer, setShowTimer] = useState(true);
  const [isResend, setResend] = useState(false);
  const [setMobilePhone] = useUserSignByPhoneMutation();
  const ref = useBlurOnFulfill({cellCount: CELL_COUNT, value});

  // Navigation params
  const {params} = useRoute<ScreenRouteProp>();

  const resendCode = useCallback((status = true) => {
    setResend(status);
  }, []);

  const doSomeAction = useCallback(
    (status) => {
      resendCode(false);
      if (status) {
        setMobilePhone({
          variables: {
            input: {
              phone: params.phone,
            },
          },
        });
      } else {
        goBack();
      }
    },
    [goBack, params.phone, resendCode, setMobilePhone],
  );

  // Check the token and navigate next
  useEffect(() => {
    const token = resultSignIn?.data?.userSignIn?.access;
    const refreshToken = resultSignIn?.data?.userSignIn?.refresh;
    if (token && refreshToken && signIn) {
      signIn(token, refreshToken);
    }
  }, [resultSignIn, signIn]);

  useEffect(() => {
    if (resultSignIn.error) {
      Alert.alert('Invalid code', 'Please, try again');
    }
  }, [resultSignIn]);

  const SignInUser = useCallback(() => {
    userSignIn({
      variables: {
        input: {
          oneTimeCode: `${value}`,
          phone: `${params.phone}`,
        },
      },
    });
  }, [params.phone, userSignIn, value]);

  const checkCode = useCallback(() => {
    setActiveButton(value.length === 4);
    Keyboard.dismiss();
  }, [value.length]);

  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    setValue,
    value,
  });

  const checkValidCode = useCallback(
    (code) => {
      setValue(code);
      setActiveButton(code.length === 4);
    },
    [setValue, setActiveButton],
  );

  const renderItem = useCallback(
    ({index, symbol, isFocused}) => (
      <CodeFieldItem
        onSelect={getCellOnLayoutHandler}
        index={index}
        symbol={symbol}
        isFocused={isFocused}
      />
    ),
    [getCellOnLayoutHandler],
  );

  return (
    <TouchableWithoutFeedback
      style={{flex: 1}}
      onPress={checkCode}
      accessible={false}>
      <View style={styles.container}>
        <View style={{paddingHorizontal: 20}}>
          <PageHeaderTitle
            groupName="onBoardingCode"
            phone={formatPhoneNumberIntl(params.phone)}
          />
          <Isidora
            lineHeight={18}
            fontSize={14}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginBottom: 7, marginTop: 6}}>
            {STRINGS.onBoardingCode.subTitle}
            {params.phone}
          </Isidora>
          <CodeField
            autoFocus
            ref={ref}
            {...props}
            value={value}
            onChangeText={checkValidCode}
            cellCount={CELL_COUNT}
            rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            renderCell={renderItem}
            selectionColor={COLORS.textInputCursor}
            keyboardAppearance={Appearance.getColorScheme() || 'default'}
          />
          {isShowTimer ? (
            <TimerString
              isShowTimer={isShowTimer}
              setShowTimer={setShowTimer}
            />
          ) : (
            <TouchableOpacity onPress={resendCode}>
              <Isidora
                lineHeight={18}
                fontSize={14}
                textAlign="left"
                fontWeight="900"
                color={COLORS.blazeBlue}
                style={styles.about}>
                {STRINGS.onBoardingCode.about}
              </Isidora>
            </TouchableOpacity>
          )}
        </View>
        <ReSendModal
          visible={isResend}
          onClose={resendCode}
          onSelect={doSomeAction}
        />
        <OnBoardingFooter
          showButtonProgress={false}
          value={0}
          onPress={SignInUser}
          activeButton={activeButton}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default React.memo(OnboardingSMS);
