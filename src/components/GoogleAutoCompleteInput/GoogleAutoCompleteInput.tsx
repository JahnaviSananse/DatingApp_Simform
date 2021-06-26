import React, {useCallback, useState} from 'react';
import {Keyboard, ScrollView, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GoogleAutoComplete} from 'react-native-google-autocomplete';

import {COLORS} from '../../configs';
import config from '../../configs/config';
import strings from '../../configs/styles/strings';
import {getHeightWithScaleFactor} from '../../utils/dimensions';
import FFTextInput from '../FFTextInput';
import {Isidora, Poppins} from '../index';
import styles from './styles';

interface Props {
  place: string;
  onChangePlace: (value: string) => void;
}

const GoogleAutoCompleteInput: React.FunctionComponent<Props> = ({
  place,
  onChangePlace,
}) => {
  const [stateLoc, setStateLoc] = useState(() => place);
  const [selectedValue, setSelectedValue] = useState(() => place);

  const setPlaceForSave = useCallback(
    (el) => {
      if (selectedValue || el.description === selectedValue) {
        onChangePlace(stateLoc);
        setSelectedValue('');
      } else {
        setSelectedValue(el.description);
        onChangePlace(el.description);
      }
    },
    [onChangePlace, selectedValue, stateLoc],
  );

  const onScrollBeginDrag = useCallback(() => {
    Keyboard.dismiss();
  }, []);

  return (
    <GoogleAutoComplete
      apiKey={config.GOOGLE_API_KEY}
      debounce={300}
      language="en-EN"
      queryTypes="(cities)">
      {({inputValue = place, handleTextChange, locationResults}) => {
        const setValue = (text: string) => {
          setSelectedValue('');
          handleTextChange(text);
          setStateLoc(text);
          onChangePlace(text);
        };
        return (
          <React.Fragment>
            <View>
              <FFTextInput
                value={stateLoc}
                clearVisible
                contextMenuHidden
                // eslint-disable-next-line react/jsx-no-bind
                onChangeText={setValue}
                placeholder={strings.editProfile.fields.birthPlace}
                keyboardType="ascii-capable"
                returnKeyType="done"
                wrapperStyle={{borderColor:COLORS.blazeBlue}}
              />
            </View>
            {locationResults.length > 0 ? (
              <ScrollView
                onScrollBeginDrag={onScrollBeginDrag}
                style={styles.resultList}>
                {locationResults.map((el, i) => {
                  return (
                    <TouchableOpacity
                      key={i}
                      style={[
                        styles.element,
                        {
                          backgroundColor:
                            selectedValue == el.description
                              ? COLORS.blazeBlue
                              : COLORS.blazeBlue20,
                        },
                      ]}
                      // eslint-disable-next-line react/jsx-no-bind
                      onPress={() => {
                        setPlaceForSave(el);
                      }}>
                      <Isidora
                        fontWeight="600"
                        color={
                          selectedValue === el.description
                            ? COLORS.white
                            : COLORS.blazeBlue
                        }>
                        {el.description}
                      </Isidora>
                    </TouchableOpacity>
                  );
                })}
              </ScrollView>
            ) : inputValue.length > 0 && locationResults.length === 0 ? (
              <Isidora
                lineHeight={24}
                fontSize={14}
                textAlign="center"
                fontWeight="600"
                style={{
                  marginBottom: getHeightWithScaleFactor(8),
                }}
                color={COLORS.raspberry}>
                {strings.apiGoogle.nothing}
              </Isidora>
            ) : null}
          </React.Fragment>
        );
      }}
    </GoogleAutoComplete>
  );
};
export default React.memo(GoogleAutoCompleteInput);
