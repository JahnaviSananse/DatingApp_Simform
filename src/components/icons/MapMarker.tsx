import * as React from 'react';
import Svg, {G, Path} from 'react-native-svg';
import {COLORS} from "../../configs";

const MapMarker: React.FunctionComponent = () => (
  <Svg width={44} height={47} viewBox="0 0 44 47" fill="none">
    <G filter="url(#prefix__filter0_d)" fillRule="evenodd" clipRule="evenodd">
      <Path
        d="M24.11 37.098c-1.14.668-1.732 2.83-1.732 2.83s-.292.206-.38-.08c-.503-1.658-1.627-2.694-1.627-2.694C12.3 36.363 6 29.709 6 21.615 6 12.991 13.162 6 21.997 6 30.837 6 38 12.991 38 21.615c0 7.93-6.049 14.477-13.89 15.483z"
        fill={COLORS.raspberry}
      />
      <Path
        d="M25.363 16.124c0 1.833-1.506 3.318-3.363 3.318-1.858 0-3.363-1.485-3.363-3.318s1.505-3.318 3.363-3.318c1.857 0 3.363 1.485 3.363 3.318zM22.471 28.803h-.005l.005.19-.3 1.547h-.447l-.301-1.547.005-.19h-.005v-9.087h1.048v9.087z"
        fill="#fff"
      />
    </G>
  </Svg>
);

export default React.memo(MapMarker);
