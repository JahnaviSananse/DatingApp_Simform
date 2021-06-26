import React from 'react';
import FastImage from 'react-native-fast-image';
import Modal from 'react-native-modal';

import {COLORS} from '../../configs';
import dimensions from '../../utils/dimensions';
import BtnSuperLike from '../icons/BtnSuperLike';
import {Isidora, Row} from '../index';
import {BtnWrapper, PhotoBlock, PhotoWrapper, Wrapper} from './style';

interface Props {
  isVisible: boolean;
  title?: string;
  message?: string;
  positiveText?: string;
  negativeText?: string;
  onPressNegative?: () => void;
  onPressPositive?: () => void;
  uriPhoto?: string;
  isSuperLike?: boolean;
  myUriPhoto?: string;
}

const InfoPopUp: React.FunctionComponent<Props> = ({
  isVisible,
  title,
  message,
  positiveText,
  negativeText,
  onPressNegative,
  onPressPositive,
  uriPhoto,
  isSuperLike,
  myUriPhoto,
}) => {
  return (
    <Modal
      isVisible={isVisible}
      backdropOpacity={0.7}
      backdropColor="#000022"
      style={{
        justifyContent: 'flex-start',
        marginTop: dimensions.HEIGHT * 0.227,
      }}>
      <Wrapper>
        <PhotoBlock>
          {myUriPhoto && (
            <PhotoWrapper style={{marginRight: -15, zIndex: 1}}>
              <FastImage
                style={{
                  borderRadius: 50,
                  height: 96,
                  width: 96,
                }}
                source={{uri: myUriPhoto}}
              />
            </PhotoWrapper>
          )}
          <PhotoWrapper>
            <FastImage
              style={{
                borderRadius: 50,
                height: 96,
                width: 96,
              }}
              source={{uri: uriPhoto}}
            />
          </PhotoWrapper>
          {isSuperLike && (
            <BtnSuperLike
              style={{
                alignSelf: 'flex-end',
                borderRadius: 20,
                left: 90,
                position: 'absolute',
                top: -11,
              }}
              width={35}
              height={35}
              fill={COLORS.blazeLightBlue}
              color={COLORS.sand}
            />
          )}
        </PhotoBlock>
        <Isidora
          lineHeight={18}
          fontSize={18}
          fontWeight="900"
          textAlign="center"
          color={COLORS.blazeBlue}
          style={{marginBottom: 12}}>
          {title}
        </Isidora>
        <Isidora
          lineHeight={18}
          fontSize={15}
          fontWeight="600"
          textAlign="center"
          color={COLORS.blazeBlue}
          style={{marginBottom: 18}}>
          {message}
        </Isidora>
        <Row style={{justifyContent: 'space-between'}}>
          <BtnWrapper onPress={onPressNegative} color={COLORS.blazeLightBlue60}>
            <Isidora
              lineHeight={18}
              fontSize={18}
              fontWeight="900"
              textAlign="center"
              color={COLORS.sand}>
              {negativeText}
            </Isidora>
          </BtnWrapper>
          <BtnWrapper onPress={onPressPositive} color={COLORS.raspberry}>
            <Isidora
              lineHeight={18}
              fontSize={18}
              fontWeight="900"
              textAlign="center"
              color={COLORS.sand}>
              {positiveText}
            </Isidora>
          </BtnWrapper>
        </Row>
      </Wrapper>
    </Modal>
  );
};
export default React.memo(InfoPopUp);
