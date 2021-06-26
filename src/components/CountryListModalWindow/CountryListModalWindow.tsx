import React, {useCallback, useEffect, useState} from 'react';
import {
  Appearance,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  SectionList,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Modal from 'react-native-modal';
import {getCountries} from 'react-phone-number-input/input';
import en from 'react-phone-number-input/locale/en.json';

import {CountryModalListElement} from '../../components/index';
import {COLORS, STRINGS} from '../../configs';
import {
  filteredCountriesArray,
  filteredFlatCountriesArray,
} from '../../utils/OperationsWithData';
import CloseIcon from '../icons/CloseIcon';
import SearchIcon from '../icons/SearchIcon';
import Isidora from '../texts/Isidora';
import styles from './styles';

interface СountryObject {
  value: string;
  label: string;
}

interface CountriesArraySectionList {
  title: string;
  data: СountryObject[];
}

interface Props {
  visible: boolean;
  onSelect: () => void;
  onClose: () => void;
}

const ModalWindow: React.FunctionComponent<Props> = ({
  visible,
  onSelect,
  onClose,
}) => {
  // OPEN CLOSE MODAL
  const [visibleModal, setVisible] = useState(false);
  const [searchField, setSearchField] = useState('');

  // COUNTRY ARRAY STATE
  const [countriesArray, setCountriesArray] = useState([]);
  const [countriesArrayFlatList, setCountriesArrayFlatList] = useState(
    getCountries(),
  );

  const keyExtractor = useCallback((item) => item.label, []);

  const closeModal = useCallback(() => {
    setVisible(false);
    onClose();
  }, [onClose]);

  // MODAL COUNTRY LIST ITEM VIEW FUNCTIONS
  const renderSectionListItemSelect = useCallback(
    (item: string) => {
      onSelect(item);
      setVisible(false);
      onClose();
    },
    [onClose, onSelect],
  );

  const renderSectionListItem = useCallback<{item: string | SectionListItem}>(
    ({item}) => {
      return (
        <CountryModalListElement
          onSelect={renderSectionListItemSelect}
          item={item}
        />
      );
    },
    [renderSectionListItemSelect],
  );

  const renderModalListItem = useCallback(
    ({section}) => (
      <Isidora
        fontWeight="600"
        fontSize={16}
        textAlign="left"
        style={styles.header}>
        {section.title}
      </Isidora>
    ),
    [],
  );

  const countryArray = useCallback(() => {
    const COUNTRIES = getCountries();
    const DATA: CountriesArraySectionList[] = filteredCountriesArray(COUNTRIES);
    const FLATDATA = filteredFlatCountriesArray(COUNTRIES);
    setCountriesArrayFlatList(FLATDATA);
    setCountriesArray(DATA);
  }, []);

  useEffect(() => {
    !countriesArray.length && countryArray();
    setVisible(visible);
  }, [countriesArray, visible, countryArray]);

  return (
    <Modal
      backdropColor={COLORS.backdrop}
      backdropOpacity={1}
      backdropTransitionOutTiming={600}
      backdropTransitionInTiming={600}
      animationOutTiming={600}
      animationInTiming={600}
      isVisible={visibleModal}
      animationIn="slideInUp"
      onBackdropPress={closeModal}>
      <KeyboardAvoidingView
        keyboardVerticalOffset={Platform.OS === 'ios' ? -150 : 50}
        behavior="height">
        <View style={styles.modalWrapper}>
          <TouchableOpacity onPress={closeModal} style={{marginBottom: 15, alignSelf:'flex-start'}}>
            <CloseIcon color={COLORS.blazeBlue} />
          </TouchableOpacity>
          <View style={styles.inputWrapper}>
            <SearchIcon color={COLORS.blazeDarker} style={{marginRight: 10}} />
            <TextInput
              value={searchField}
              allowFontScaling={false}
              underlineColorAndroid="transparent"
              style={styles.inputSearch}
              selectionColor={COLORS.textInputCursor}
              placeholder={STRINGS.onBoardingPhone.placeholderModal}
              multiline={false}
              numberOfLines={1}
              onChangeText={setSearchField}
              placeholderTextColor={COLORS.bombay}
              keyboardAppearance={Appearance.getColorScheme() || 'default'}
            />
          </View>
          {!searchField.length ? (
            <SectionList
              sections={countriesArray}
              keyExtractor={keyExtractor}
              showsVerticalScrollIndicator={false}
              renderItem={renderSectionListItem}
              renderSectionHeader={renderModalListItem}
            />
          ) : (
            <FlatList
              data={countriesArrayFlatList.filter(
                (item) =>
                  en[item.label].includes(searchField) ||
                  item.value.includes(searchField),
              )}
              renderItem={renderSectionListItem}
              showsVerticalScrollIndicator={false}
              keyExtractor={keyExtractor}
            />
          )}
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default React.memo(ModalWindow);
