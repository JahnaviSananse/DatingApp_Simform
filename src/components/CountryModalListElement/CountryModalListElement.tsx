import React, {useCallback} from 'react';
import {TouchableOpacity, View} from 'react-native';
import {SvgUri} from 'react-native-svg';
import {getCountryCallingCode} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';

// CUSTOM MODULES
import {Row} from '../../components/index';
import {COLORS} from '../../configs';
import {
  getHeightWithScaleFactor,
  getWidthWithScaleFactor,
} from '../../utils/dimensions';
import Isidora from '../texts/Isidora';
import styles from './styles';

interface SectionListItem {
  label: string;
  value: string[];
}

interface RenderElementProps {
  item: SectionListItem | string;
  onSelect: (value: string) => void;
}

const SvgElement: React.FunctionComponent = ({item}) => (
  <SvgUri
    width={getWidthWithScaleFactor(22)}
    height={getHeightWithScaleFactor(16)}
    uri={`https://catamphetamine.gitlab.io/country-flag-icons/3x2/${item}.svg`}
  />
);

const RenderElement: React.FunctionComponent<RenderElementProps> = ({
  item,
  onSelect,
}) => {
  const {label, value} = item; // FROM SECTIONLIST - obj<value, label>, FROM FLATLIST - string label>
  const selectThisItem = useCallback(() => {
    onSelect(label ? label : item);
  }, [label, item, onSelect]);

  return (
    <TouchableOpacity onPress={selectThisItem}>
      <Row style={styles.flatListItem}>
        <View style={{justifyContent: 'center'}}>
          <Row style={{alignItems: 'center'}}>
            <SvgElement item={label ? label : item} />
            <Isidora
              color={COLORS.blazeBlue}
              fontWeight="600"
              fontSize={16}
              style={{marginLeft: getWidthWithScaleFactor(10)}}>
              {en[label ? label : item]}
            </Isidora>
          </Row>
        </View>
        <View style={{justifyContent: 'center'}}>
          <Isidora color={COLORS.blazeBlue} fontWeight="600" fontSize={16}>
            {value ? value : `+${getCountryCallingCode(item)}`}
          </Isidora>
        </View>
      </Row>
    </TouchableOpacity>
  );
};

export default React.memo(RenderElement);
