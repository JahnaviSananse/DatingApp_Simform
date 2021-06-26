import * as React from 'react';
import Svg, {ClipPath, Defs, G, Path} from 'react-native-svg';

function AttachmentIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={15} height={16} viewBox="0 0 15 16" fill="none" {...props}>
      <G clipPath="url(#prefix__clip0)">
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M13.032 8.468L7.98 13.509a3.484 3.484 0 01-4.764-.14 3.452 3.452 0 01-.14-4.746l6.54-6.516a2.107 2.107 0 012.893 0c.792.8.792 2.084 0 2.883l-5.64 5.612a.626.626 0 01-1.055-.24.62.62 0 01.14-.607l4.193-4.17a.816.816 0 000-1.156.823.823 0 00-1.161 0L4.792 8.615a2.227 2.227 0 000 3.168c.89.845 2.29.845 3.18 0l5.632-5.62a3.655 3.655 0 00-.09-5.09 3.688 3.688 0 00-5.109-.09L1.865 7.5a5.076 5.076 0 00.205 7.035 5.123 5.123 0 007.063.107l5.06-5.033a.816.816 0 00-.368-1.368.823.823 0 00-.793.212v.016z"
          fill="#303AB2"
        />
      </G>
      <Defs>
        <ClipPath id="prefix__clip0">
          <Path fill="#fff" transform="translate(.549)" d="M0 0h14.043v16H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
}

export default AttachmentIcon;
