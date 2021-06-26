import {RouteProp, useNavigation, useRoute} from '@react-navigation/native';
import React, {useCallback, useState} from 'react';
import {FlatList, StatusBar, View} from 'react-native';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';
import {TabBar, TabView} from 'react-native-tab-view';

import {Isidora} from '../../components';
import EditProfileField from '../../components/EditProfile/EditProfileField';
import EditProfileHeader from '../../components/EditProfile/EditProfileHeader';
import EditProfileVideo from '../../components/EditProfile/EditProfileVideo';
import ErrorAlertIcon from '../../components/icons/ErrorAlertIcon';
import PhotoGalleryBlock from '../../components/UserGallery/PhotoGalleryBlock';
import {COLORS} from '../../configs';
import constants from '../../configs/constants';
import colors from '../../configs/styles/colors';
import useCheckVideos from '../../hooks/useCheckVideos';
import useProfileEditFields, {
  ProfileBlockType,
} from '../../hooks/useProfileEditFields';
import useUserPhotos from '../../hooks/useUserPhotos';
import {NavigationParams} from '../../navigation/NavigationParams';

type EditProfileProp = RouteProp<NavigationParams, 'ProfilePhoto'>;

type RenderItemType = {
  index: number;
  item: ProfileBlockType;
};

const EditProfileScreen: React.FunctionComponent = () => {
  const {goBack} = useNavigation();
  const {params} = useRoute<EditProfileProp>();
  const [index, setIndex] = useState(params?.openCover ? 1 : 0);
  const [routes] = useState([
    {key: 'teaser', title: 'Scene'},
    {key: 'cover', title: 'Cover'},
    {key: 'otherInfo', title: 'Other Info'},
  ]);
  const {firstName, blocksList} = useProfileEditFields();
  const {mainPhoto} = useUserPhotos();

  const {error, problemVideoIndexes} = useCheckVideos();

  // Scroll animation value
  // const scrollYAnimatedValue = new Animated.Value(0);
  // const onScroll = useCallback(
  //   Animated.event([{nativeEvent: {contentOffset: {y: scrollYAnimatedValue}}}]),
  //   [scrollYAnimatedValue],
  // );

  const onDonePress = useCallback(() => {
    goBack();
  }, [goBack]);

  const renderLabel = useCallback(
    ({route, focused}) => (
      <View
        style={{
          borderBottomWidth: focused ? 4 : 0,
          borderColor: COLORS.blazeBlue,
          marginLeft: route.title === 'Scene' ? -37 : 0,
          marginRight: route.title === 'Other Info' ? -8 : 0,
          paddingBottom: 5,
        }}>
        <Isidora
          lineHeight={24}
          fontSize={16}
          fontWeight="600"
          color={focused ? COLORS.blazeBlue : COLORS.blazeBlue50}>
          {route.title}
        </Isidora>
        {(((error || (!error && problemVideoIndexes.length > 0)) &&
          route.title === 'Scene') ||
          (mainPhoto.action.hasError && route.title === 'Cover')) && (
          <ErrorAlertIcon
            width={16}
            height={16}
            style={{position: 'absolute', right: -18, top: 0}}
          />
        )}
      </View>
    ),
    [error, mainPhoto.action.hasError, problemVideoIndexes.length],
  );

  const renderTabBar = useCallback(
    (props) => (
      <TabBar
        {...props}
        indicatorStyle={{backgroundColor: COLORS.sand}}
        style={{
          backgroundColor: COLORS.sand,
          marginBottom: 10,
          shadowOpacity: 0,
        }}
        renderLabel={renderLabel}
      />
    ),
    [renderLabel],
  );

  const renderScene = useCallback(
    ({route}) => {
      switch (route.key) {
        case 'cover':
          return (
            <PhotoGalleryBlock
              index={index}
              hidePopUp={params?.hideWarningModal ?? false}
            />
          );
        case 'otherInfo':
          return <OtherInfoTab blocksList={blocksList} />;
        case 'teaser':
          return <EditProfileVideo />;
      }
    },
    [blocksList, index, params],
  );

  return (
    <View
      style={{
        backgroundColor: colors.sand,
        flex: 1,
        paddingTop: getStatusBarHeight(),
      }}>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle="dark-content"
      />
      <EditProfileHeader
        username={firstName}
        // scrollY={scrollYAnimatedValue}
        onDonePress={onDonePress}
      />
      <TabView
        renderScene={renderScene}
        onIndexChange={setIndex}
        navigationState={{index, routes}}
        renderTabBar={renderTabBar}
      />
    </View>
  );
};

interface OtherInfoTabProps {
  blocksList: undefined | ProfileBlockType[];
}

const OtherInfoTab: React.FunctionComponent<OtherInfoTabProps> = ({
  blocksList,
}) => {
  const renderItem = useCallback(({item}: RenderItemType) => {
    return <EditProfileField block={item} />;
  }, []);

  const keyExtractor = useCallback(
    (item: ProfileBlockType) => `${item.title}`,
    [],
  );
  return (
    <FlatList
      // onScroll={onScroll}
      contentContainerStyle={{
        paddingBottom: 50,
        paddingHorizontal: constants.PROFILE.paddingHorizontal,
      }}
      data={blocksList}
      renderItem={renderItem}
      showsVerticalScrollIndicator={false}
      keyExtractor={keyExtractor}
    />
  );
};

export default React.memo(EditProfileScreen);
