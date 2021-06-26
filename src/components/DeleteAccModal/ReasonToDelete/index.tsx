import React, {useCallback} from 'react';
import {FlatList} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Modal from 'react-native-modal';

import {COLORS} from '../../../configs';
import ArrowLeft from '../../icons/ArrowLeft';
import {ArrowRight, Isidora, Row} from '../../index';
import {BtnClose, InfoBlock, LineSwipe, ReasonItemBtn} from './styles';

interface PropsItem {
  item: {
    title: string;
    index: number;
  };
  onPress: (index: number) => void;
}

const ReasonItem: React.FunctionComponent<PropsItem> = ({item, onPress}) => {
  return (
    <ReasonItemBtn
      onPress={useCallback(() => onPress(item.index), [item.index, onPress])}>
      <Isidora
        lineHeight={24}
        fontSize={16}
        fontWeight="600"
        numberOfLines={1}
        color={COLORS.blazeBlue}
        style={{maxWidth: '95%'}}>
        {item.title}
      </Isidora>
      <ArrowRight color={COLORS.raspberry} />
    </ReasonItemBtn>
  );
};

interface Props {
  isShowBack: boolean;
  data: {
    title: string;
    message: string;
    content: {title: string; index: number}[];
  };
  setIndex: (index: number) => void;
  hideModal: () => void;
}

const ReasonToDelete: React.FunctionComponent<Props> = ({
  isShowBack,
  data,
  setIndex,
  hideModal,
}) => {
  const keyHandler = useCallback((item) => item.id, []);

  const renderReasons = useCallback(
    ({item}) => <ReasonItem onPress={setIndex} item={item} />,
    [setIndex],
  );

  return (
    <Modal
      isVisible
      propagateSwipe
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection="down"
      onSwipeComplete={hideModal}
      backdropColor={COLORS.backdrop}
      backdropOpacity={1}
      style={{
        backgroundColor: COLORS.sand,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-start',
        margin: 0,
        marginHorizontal: 14,
        marginTop: '120%',
        paddingTop: 20,
      }}>
      <Row style={{justifyContent: 'center'}}>
        <LineSwipe hitSlop={{bottom: 20, left: 0, right: 0, top: 20}} />
      </Row>
      {isShowBack && (
        <BtnClose onPress={toBackList}>
          <ArrowLeft color={COLORS.raspberry} />
        </BtnClose>
      )}

      <Isidora
        lineHeight={20}
        fontSize={18}
        fontWeight="900"
        color={COLORS.blazeBlue}>
        {data.title}
      </Isidora>
      <InfoBlock>
        <Isidora
          lineHeight={20}
          fontSize={14}
          textAlign="left"
          fontWeight="600"
          style={{marginBottom: 5}}
          color={COLORS.blazeBlue}>
          {data.message}
        </Isidora>
      </InfoBlock>
      <FlatList
        data={data.content}
        showsVerticalScrollIndicator={false}
        keyExtractor={keyHandler}
        renderItem={renderReasons}
        contentContainerStyle={{paddingBottom: ifIphoneX(20, 5)}}
      />
    </Modal>
  );
};
export default React.memo(ReasonToDelete);
