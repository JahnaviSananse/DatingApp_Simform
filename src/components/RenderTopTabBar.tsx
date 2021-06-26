import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {ifIphoneX} from 'react-native-iphone-x-helper';

import {COLORS, CONSTANT} from '../configs';
import {useBottomBarPoint} from '../hooks/useBottomBarPoint';
import SearchFfWdIcon from './icons/SearchFfwdIcon';
import {ChatIconTab, ProfileIconTab, Row} from '.';

const RenderTopTabBar: React.FunctionComponent = ({
  state,
  descriptors,
  navigation,
}) => {
  const isUnreadMessage = useBottomBarPoint();

  const focusedOptions = descriptors[state.routes[state.index].key].options;
  if (focusedOptions.tabBarVisible === false) {
    return null;
  }
  return (
    <SafeAreaView>
      <Row
        style={{
          backgroundColor: COLORS.sand,
          borderColor: COLORS.blazeBlue30,
          borderTopWidth: 1,
          justifyContent: 'space-between',
          paddingBottom: ifIphoneX(0, 10),
          paddingHorizontal: 40,
          paddingTop: 11,
        }}>
        {state.routes.map((route, index) => {
          const {options} = descriptors[route.key];
          const label =
            options.tabBarLabel !== undefined
              ? options.tabBarLabel
              : options.title !== undefined
              ? options.title
              : route.name;

          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              canPreventDefault: true,
              target: route.key,
              type: 'tabPress',
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            // eslint-disable-next-line react/jsx-key
            <TouchableOpacity
              key={`${index}`}
              accessibilityRole="button"
              accessibilityStates={isFocused ? ['selected'] : []}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              hitSlop={CONSTANT.HIT_SLOP_15}
              // eslint-disable-next-line react/jsx-no-bind
              onPress={onPress}>
              {label === 'ChatStackTab' && (
                <ProfileIconTab
                  color={isFocused ? COLORS.raspberry : COLORS.blazeBlue50}
                  redPoint={isUnreadMessage}
                  circleColor={isFocused ? COLORS.raspberry : '#f07ba8'}
                  style={{marginRight: -2}}
                />
              )}
              {label === 'MatchingStackTab' && (
                <SearchFfWdIcon
                  color={isFocused ? COLORS.raspberry : COLORS.blazeBlue50}
                />
              )}
              {label === 'SettingsStackTab' && (
                <ChatIconTab
                  color={isFocused ? COLORS.raspberry : COLORS.blazeBlue50}
                />
              )}
            </TouchableOpacity>
          );
        })}
      </Row>
    </SafeAreaView>
  );
};
export default React.memo(RenderTopTabBar);
