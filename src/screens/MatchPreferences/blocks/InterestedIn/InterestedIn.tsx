import React, {useCallback, useState} from 'react';

import {Isidora} from '../../../../components';
import {CustomBtn} from '../../../../components/CustomComponents/CustomBtn';
import Row from '../../../../components/Row';
import {COLORS} from '../../../../configs';
import strings from '../../../../configs/styles/strings';
import {useIsNeedUpdateLookBook} from '../../../../hooks/useIsNeedUpdateLookBook';
import {useUserPreferenceUpdateMutation} from '../../../../store/generated/graphql';
import {BtnSex} from './styles';
import {Wrapper} from './styles';

interface Props {
  startSex: string | undefined | null;
  gendersList:
    | Array<{
        id: string;
        name: string;
      }>
    | undefined
    | null;
}

const InterestedIn: React.FunctionComponent<Props> = ({
  startSex,
  gendersList,
}) => {
  const [updateUserPreference] = useUserPreferenceUpdateMutation();
  const {isUpdateLookBook, setIsUpdateLook} = useIsNeedUpdateLookBook();
  const [sex, setSex] = useState(startSex);

  const updatePreferenceSex = useCallback(
    (id) => {
      updateUserPreference({
        variables: {
          input: {
            genderId: `${id}`,
          },
        },
      }).then(() => {
        if (!isUpdateLookBook) {
          setIsUpdateLook(true);
        }
      });
    },
    [isUpdateLookBook, setIsUpdateLook, updateUserPreference],
  );

  const changeSex = useCallback(
    (item) => {
      setSex(item.name);
      updatePreferenceSex(item.id);
    },
    [updatePreferenceSex],
  );

  const showGenderList = useCallback(
    () =>
      gendersList.map((el) => (
        <CustomBtn
          key={`${el.id}`}
          select={sex === el.name}
          onPress={changeSex}
          item={el}
          Btn={BtnSex}>
          <Isidora
            lineHeight={15}
            fontSize={16}
            fontWeight="600"
            color={sex === el.name ? COLORS.blazeCream : COLORS.blazeBlue}>
            {el.name}
          </Isidora>
        </CustomBtn>
      )),
    [changeSex, gendersList, sex],
  );

  return (
    <Wrapper>
      <Isidora
        lineHeight={24}
        fontSize={16}
        textAlign="left"
        fontWeight="900"
        color={COLORS.blazeBlue}>
        {strings.matchPreferenceSettings.interested.label}
      </Isidora>
      <Row style={{justifyContent: 'space-between', marginTop: 14}}>
        {showGenderList()}
      </Row>
    </Wrapper>
  );
};

export default React.memo(InterestedIn);
