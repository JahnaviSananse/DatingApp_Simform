import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path, SvgProps} from 'react-native-svg';

function SvgComponent(props: SvgProps) {
  return (
    <Svg width={25} height={25} viewBox="0 0 25 25" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          d="M24.1 6.412a1.12 1.12 0 00-.325-.796L19.026.868a1.119 1.119 0 00-.795-.325 1.12 1.12 0 00-.795.325l-3.17 3.17-12.241 12.24a1.12 1.12 0 00-.325.796v4.749a1.12 1.12 0 001.12 1.12h4.749a1.121 1.121 0 00.851-.325l12.174-12.242 3.181-3.113a1.33 1.33 0 00.247-.37c.01-.09.01-.18 0-.269a.775.775 0 000-.156l.078-.056zM7.11 20.702H3.94v-3.169L15.062 6.412l3.17 3.17L7.11 20.701zm12.7-12.7l-3.17-3.17 1.591-1.579 3.159 3.159-1.58 1.59z"
          fill="#fff"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(.5 .143)" d="M0 0h24v24H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

const EditIcon = React.memo(SvgComponent);
export default EditIcon;
