import React, {useCallback} from 'react';
import {Image} from 'react-native';

import {COLORS} from '../../configs';
import CloseIcon from '../icons/CloseIcon';
import {Btn} from './styles';
import {Isidora, Poppins, Row} from '..';

interface ImageItem {
  name: string;
  source: string;
}

const ListImages: React.FunctionComponent = ({
  item,
  setAttachment,
}: {
  item: ImageItem;
  setAttachment: (value: Array<ImageItem>) => void;
}) => {
  return (
    <Row style={{alignItems: 'center', marginTop: 7}} key={item.name}>
      <Image
        source={item.source}
        style={{borderRadius: 15, height: 50, width: 50}}
      />
      <Isidora
        lineHeight={24}
        fontSize={16}
        fontWeight="600"
        textAlign="left"
        color={COLORS.blazeBlue}
        style={{flexGrow: 1, marginLeft: 20}}>
        {item.name}
      </Isidora>
      <Btn
        onPress={useCallback(() => {
          setAttachment((prev: Array<ImageItem>) =>
            prev.filter((el: ImageItem) => el.name !== item.name),
          );
        }, [item.name, setAttachment])}>
        <CloseIcon color={COLORS.blazeBlue} />
      </Btn>
    </Row>
  );
};
export default React.memo(ListImages);
