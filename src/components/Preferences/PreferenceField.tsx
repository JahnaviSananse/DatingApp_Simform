import React, {useCallback} from 'react';
import {View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styled from 'styled-components/native';

import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import strings from '../../configs/styles/strings';
import useParamsNavigation from '../../hooks/useParamsNavigation';
import useUpdatePreferenceField from '../../hooks/useUpdatePreferenceField';
import NavigationKey from '../../navigation/NavigationKey';
import {EPDefaultScreenType} from '../../navigation/NavigationParamsTypes';
import {DefaultBlock, Value} from '../../store/generated/graphql';
import ArrowRight from '../icons/ArrowRight';
import {Isidora} from '../index';
import Row from '../Row';

interface Props {
  block: DefaultBlock;
}

const PreferenceField: React.FunctionComponent<Props> = ({block}) => {
  const {navigate} = useParamsNavigation();

  // Profile edit hook
  const {fieldName, selectedValue, updateValue} = useUpdatePreferenceField(
    block,
  );

  // Navigate to the block settings
  const onBlockSettings = useCallback(() => {
    switch (block.__typename) {
      case 'DefaultBlock':
        navigate<EPDefaultScreenType>(NavigationKey.EPDefault, {
          ImageIcon: constants.IMAGE_COMPONENT_MAP.get(
            `${block?.list[0]?.__typename}`,
          ),
          description: block.description,
          onUpdateValue: updateValue,
          selectedValue: selectedValue as Value | undefined,
          title: block.title,
          values: block.list,
        });
        break;
    }
  }, [block, navigate, selectedValue, updateValue]);

  // Default field value
  const defaultValue = strings.matchPreferenceSettings.openAll;

  return (
    <TouchableOpacity onPress={onBlockSettings}>
      <Wrapper>
        <Row
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 5,
          }}>
          <Isidora
            lineHeight={24}
            fontSize={16}
            textAlign="left"
            fontWeight="900"
            color={colors.blazeBlue}>
            {block.title}
          </Isidora>
          <ArrowRight color={COLORS.raspberry} strokeWidth={2.5} />
        </Row>
        <Isidora
          lineHeight={20}
          fontSize={14}
          textAlign="left"
          fontWeight="600"
          color={COLORS.blazeBlue}>
          {selectedValue?.name ?? defaultValue}
        </Isidora>
      </Wrapper>
    </TouchableOpacity>
  );
};

const Wrapper = styled(View)`
  border-bottom-width: 1px;
  border-color: ${() => COLORS.blazeBlue15};
  padding-top: 15px;
  padding-bottom: 15px;
`;

export default React.memo(PreferenceField);
