import React from 'react';
import {View} from 'react-native';

import {IconChat, MyLikes as MyLikesType} from '../../store/generated/graphql';
import {MyLikes, MyMatches, Row} from '../';
import styles from './styles';

interface Props {
  load: boolean;
  onUpdate: () => void;
  myLikes: MyLikesType;
  myMatches: IconChat;
}

const ChatHeader: React.FunctionComponent<Props> = ({
  load,
  onUpdate,
  myLikes,
  myMatches,
}) => {
  return (
    <Row style={styles.listsRow}>
      <MyLikes load={load} myLikes={myLikes} />
      <View style={styles.separator} />
      <MyMatches load={load} onUpdate={onUpdate} myMatches={myMatches} />
    </Row>
  );
};
export default React.memo(ChatHeader);
