import React from 'react';
import {Platform, View} from 'react-native';
import styled from 'styled-components';

import colors from '../configs/styles/colors';

const GRID_COLOR = colors.white;

const FFVideoGrid: React.FunctionComponent = () => {
  return (
    <View
      style={{
        alignSelf: 'center',
        backgroundColor: 'transparent',
        flex: Platform.OS === 'ios' ? 1 : 0.92,
        marginVertical: 10,
        width: '94%',
      }}>
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
        }}>
        <View
          style={{
            alignItems: 'center',
            flex: 0.34,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <GridWrapper />
          <View
            style={{
              borderColor: GRID_COLOR,
              borderEndWidth: 2,
              borderStartWidth: 2,
              flex: 0.32,
              height: '100%',
              justifyContent: 'center',
            }}
          />
          <GridWrapper />
        </View>

        <View
          style={{
            alignItems: 'center',
            flex: 0.32,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: GRID_COLOR,
              borderTopWidth: 2,
              flex: 0.34,
              height: '100%',
            }}
          />
          <View
            style={{
              borderColor: GRID_COLOR,
              borderWidth: 2,
              flex: 0.32,
              height: '100%',
              justifyContent: 'center',
            }}
          />
          <View
            style={{
              borderBottomWidth: 2,
              borderColor: GRID_COLOR,
              borderTopWidth: 2,
              flex: 0.34,
              height: '100%',
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            flex: 0.34,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <GridWrapper />
          <View
            style={{
              borderColor: GRID_COLOR,
              borderEndWidth: 2,
              borderStartWidth: 2,
              flex: 0.32,
              height: '100%',
              justifyContent: 'center',
            }}
          />
          <GridWrapper />
        </View>
      </View>
    </View>
  );
};

const GridWrapper = styled(View)`
  flex: 0.2;
`;

export default React.memo(FFVideoGrid);
