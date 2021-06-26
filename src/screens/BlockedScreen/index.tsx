import React, {useCallback, useState} from 'react';

import {FfwdLogo} from '../../../assets/images';
import {FastImageComponent, Isidora, Row} from '../../components';
import AdminIcon from '../../components/icons/AdminIcon';
import NoInternetIcon from '../../components/icons/NoInternetIcon';
import {COLORS} from '../../configs';
import strings from '../../configs/styles/strings';
import dimensions from '../../utils/dimensions';
import {AuthContext} from '../../utils/login-context';
import {BtnWrapper, MessageBlock, Wrapper} from './styles';

const BlockedScreen: React.FunctionComponent = () => {
  const {signOut} = React.useContext(AuthContext);
  const [isShowMessage, setIsShowMessage] = useState(false);
  const LogOut = useCallback(() => {
    if (signOut) {
      signOut();
    }
  }, [signOut]);

  const showMessage = useCallback(() => {
    setIsShowMessage(true);
  }, []);

  return (
    <Wrapper>
      {!isShowMessage ? (
        <>
          <FastImageComponent
            resizeMode="contain"
            style={{
              height: 33,
              width: 100,
            }}
            uri={FfwdLogo}
          />
          <NoInternetIcon style={{marginTop: dimensions.HEIGHT * 0.13}} />
          <Isidora fontSize={24} lineHeight={30} style={{marginTop: 15}}>
            {strings.BlockedScreen.text}
          </Isidora>
          <Row
            style={{
              justifyContent: 'space-between',
              marginTop: 22,
              paddingHorizontal: 20,
              width: '100%',
            }}>
            <BtnWrapper onPress={showMessage} color={COLORS.blazeLightBlue85}>
              <Isidora color={COLORS.sand} fontSize={18} lineHeight={16}>
                {strings.BlockedScreen.why}
              </Isidora>
            </BtnWrapper>
            <BtnWrapper onPress={LogOut} color={COLORS.raspberry}>
              <Isidora color={COLORS.sand} fontSize={18} lineHeight={16}>
                {strings.BlockedScreen.LogOut}
              </Isidora>
            </BtnWrapper>
          </Row>
        </>
      ) : (
        <>
          <Row
            style={{
              alignItems: 'center',
              borderBottomWidth: 0.5,
              borderColor: COLORS.blazeBlue25,
              justifyContent: 'center',
              paddingBottom: 10,
              width: '100%',
            }}>
            <AdminIcon style={{marginRight: 8}} />
            <Isidora fontSize={20}>{strings.BlockedScreen.name}</Isidora>
          </Row>
          <MessageBlock>
            <Isidora
              textAlign="left"
              fontWeight="600"
              color={COLORS.sand}
              lineHeight={18}
              fontSize={18}>
              {strings.BlockedScreen.message}
            </Isidora>
          </MessageBlock>
          <BtnWrapper onPress={LogOut} isBottom color={COLORS.raspberry}>
            <Isidora color={COLORS.sand} fontSize={18} lineHeight={16}>
              {strings.BlockedScreen.LogOut}
            </Isidora>
          </BtnWrapper>
        </>
      )}
    </Wrapper>
  );
};
export default React.memo(BlockedScreen);
