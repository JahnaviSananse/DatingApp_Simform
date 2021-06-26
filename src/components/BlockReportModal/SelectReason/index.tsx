import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator, FlatList} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';
import Modal from 'react-native-modal';

import {COLORS} from '../../../configs';
import strings from '../../../configs/styles/strings';
import {Survey} from '../../../store/generated/graphql';
import {Modal as TypeModal} from '../../../store/generated/graphql';
import ArrowLeft from '../../icons/ArrowLeft';
import Row from '../../Row';
import {ArrowRight, Isidora} from '../..';
import {CustomReason} from '../CustomComponents/CustomReason';
import {BtnClose, InfoBlock, LineSwipe} from './styles';

interface Props {
  isVisible: boolean;
  onSelectReason: (value: {reasonId: string; mandatory: boolean}) => void;
  data?: Survey;
  closeModal: () => void;
  type: 'unmatch' | 'report' | null;
  loading: boolean;
}
const SelectReasonModal: React.FunctionComponent<Props> = ({
  isVisible,
  onSelectReason,
  data,
  closeModal,
  type,
  loading,
}) => {
  const [content, setContent] = useState<TypeModal[]>([]);
  const [isSHowBack, setIsShowBack] = useState(false);
  const [title, setTitle] = useState('');

  useEffect(() => {
    if (data?.modals.length) {
      setContent(data.modals);
    } else if (!loading && data?.modals) {
      setIsShowBack(false);
      onSelectReason({
        mandatory: true,
        reasonId: '12',
      });
      setTitle('');
    }
  }, [data, loading, onSelectReason]);

  const selectReasonItem = useCallback(
    (item) => {
      if (item.attributives) {
        if (item.attributives.length === 1) {
          setIsShowBack(false);
          onSelectReason({
            mandatory: item.attributives[0].mandatory,
            reasonId: item.attributives[0].id,
          });
          setTitle('');
        } else {
          setContent(item.attributives);
          setIsShowBack(true);
          setTitle(item.title);
        }
      } else {
        setIsShowBack(false);
        onSelectReason({mandatory: item.mandatory, reasonId: item.id});
        setTitle('');
      }
    },
    [onSelectReason, setContent],
  );
  const toCloseModal = useCallback(() => {
    setContent(data?.modals ?? []);
    setIsShowBack(false);
    setTitle('');
    closeModal();
  }, [closeModal, data]);

  const toBackList = useCallback(() => {
    setIsShowBack(false);
    setTitle('');
    setContent(data?.modals ?? []);
  }, [data]);

  const keyHandler = useCallback((item) => item.id, []);

  const renderReasons = useCallback(
    ({item}) => (
      <CustomReason onPress={selectReasonItem} item={item}>
        <Isidora
          lineHeight={24}
          fontSize={16}
          fontWeight="600"
          color={COLORS.blazeBlue}
          style={{maxWidth: '95%', textAlign: 'left'}}>
          {item.title}
        </Isidora>
        <ArrowRight color={COLORS.raspberry} />
      </CustomReason>
    ),

    [selectReasonItem],
  );

  return (
    <Modal
      isVisible={isVisible}
      propagateSwipe
      animationIn="slideInUp"
      animationOut="slideOutDown"
      swipeDirection="down"
      onSwipeComplete={toCloseModal}
      style={{
        backgroundColor: COLORS.sand,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        justifyContent: 'flex-start',
        margin: 0,
        marginHorizontal: 14,
        marginTop: '61%',
        paddingTop: 20,
      }}>
      <Row style={{justifyContent: 'center'}}>
        <LineSwipe hitSlop={{bottom: 20, left: 0, right: 0, top: 20}} />
      </Row>
      {isSHowBack && (
        <BtnClose onPress={toBackList}>
          <ArrowLeft color={COLORS.raspberry} />
        </BtnClose>
      )}

      <Isidora
        lineHeight={20}
        fontSize={24}
        fontWeight="900"
        color={COLORS.blazeBlue}>
        {type === 'unmatch'
          ? strings.feedbackFlow.unmatch
          : strings.feedbackFlow.report}
      </Isidora>
      <InfoBlock>
        <Isidora
          lineHeight={24}
          fontSize={16}
          textAlign="left"
          fontWeight="900"
          style={{marginBottom: 5}}
          color={COLORS.blazeBlue}>
          {title
            ? title
            : type === 'unmatch'
            ? strings.feedbackFlow.unmatchTitle
            : strings.feedbackFlow.title}
        </Isidora>
        {!title && (
          <Isidora
            lineHeight={18}
            fontSize={16}
            textAlign="left"
            fontWeight="600"
            color={COLORS.blazeBlue}
            style={{marginBottom: 20, marginTop: 2}}>
            {type === 'unmatch'
              ? strings.feedbackFlow.unmatchLabel
              : strings.feedbackFlow.label}
          </Isidora>
        )}
      </InfoBlock>
      {loading ? (
        <ActivityIndicator
          color={COLORS.blazeBlue}
          style={{marginTop: '30%'}}
        />
      ) : (
        <FlatList
          data={content}
          showsVerticalScrollIndicator={false}
          keyExtractor={keyHandler}
          renderItem={renderReasons}
          contentContainerStyle={{paddingBottom: ifIphoneX(20, 5)}}
        />
      )}
    </Modal>
  );
};

export default React.memo(SelectReasonModal);
