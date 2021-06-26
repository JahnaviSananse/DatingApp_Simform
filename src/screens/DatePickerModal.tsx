import RNDateTimePicker, {Event} from '@react-native-community/datetimepicker';
import React, {useCallback, useState} from 'react';
import {View} from 'react-native';
import Modal from 'react-native-modal';

import {FFColorButton} from '../components';
import {COLORS} from '../configs';
import dimensions from '../utils/dimensions';

interface Props {
  date: Date;
  onNewDate: (newDate: Date) => void;
}

const DatePickerModal: React.FunctionComponent<Props> = ({date, onNewDate}) => {
  // Current changed date
  const [changedDate, setChangedDate] = useState(date);

  const onDateChange = useCallback((event: Event, date?: Date) => {
    if (date) {
      setChangedDate(date);
    }
  }, []);

  const onDataConfirm = useCallback(() => {
    onNewDate(changedDate);
  }, [changedDate, onNewDate]);

  return (
    <Modal
      isVisible
      backdropOpacity={0.7}
      backdropColor="#000022"
      style={{
        justifyContent: 'flex-start',
        marginTop: dimensions.HEIGHT * 0.23,
      }}>
      <View
        style={{
          alignItems: 'center',
          backgroundColor: COLORS.sand,
          borderBottomRightRadius: 16,
          borderTopLeftRadius: 16,
          minHeight: 250,
          paddingHorizontal: 14,
          paddingVertical: 17,
          width: '100%',
        }}>
        <View style={{flexDirection: 'row', width: '100%'}}>
          <RNDateTimePicker
            display="spinner"
            style={{flex: 1}}
            value={changedDate}
            locale="US"
            onChange={onDateChange}
            mode="date"
            maximumDate={new Date()}
            timeZoneOffsetInMinutes={-420}
            textColor={COLORS.blazeBlue}
          />
        </View>
        <FFColorButton
          title="Ok"
          buttonStyle={{
            color: COLORS.raspberry,
            width: dimensions.WIDTH * 0.27,
          }}
          onPress={onDataConfirm}
          fontStyle={{color: COLORS.sand, fontSize: 18, fontWeight: '900'}}
        />
      </View>
    </Modal>
  );
};

export default React.memo(DatePickerModal);
