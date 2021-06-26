import React from 'react';
import {TouchableOpacity, View} from 'react-native';

import colors from '../../configs/styles/colors';
import BackArrowIcon from '../icons/BackArrowIcon';
import {Isidora, Row} from '..';

interface Props {
  title: string;
  description: string;
  onGoBack: () => void;
  ImageIcon: React.FunctionComponent | undefined;
}

const EPBlockHeader: React.FunctionComponent<Props> = ({
  title,
  description,
  onGoBack,
  ImageIcon,
}) => {
  const toCheck = ['status', 'edibles'];
  const lotOfText = toCheck.some((text) => description.includes(text));
  return (
    <View
      style={{
        alignItems: 'center',
        backgroundColor: colors.sand,
        paddingTop: 48,
      }}>
      <View style={{width: '100%'}}>
        <Row
          style={{
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            paddingHorizontal: 18,
          }}>
          <TouchableOpacity onPress={onGoBack} style={{marginBottom: -1}}>
            <BackArrowIcon color={colors.blazeBlue} strokeWidth={2.2} />
          </TouchableOpacity>
          <Row>
            <Isidora
              fontWeight="900"
              fontSize={26}
              lineHeight={28}
              color={colors.blazeBlue}
              style={{marginLeft: 10, marginRight: 10, paddingTop: 3}}>
              {title}
            </Isidora>
            {ImageIcon && (
              <View style={{justifyContent: 'center'}}>
                <ImageIcon />
              </View>
            )}
          </Row>
          <View style={{height: 24, width: 20}} />
        </Row>
        <Isidora
          fontSize={17}
          style={{
            minHeight: 108,
            // paddingHorizontal: 20,
            paddingLeft: lotOfText ? 60 : 20,
            paddingRight: lotOfText ? 60 : 20,
            paddingTop: 26,
          }}
          color={colors.blazeBlue}
          fontWeight="600">
          {description}
        </Isidora>
      </View>
    </View>
  );
};

export default React.memo(EPBlockHeader);
