import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.836 13.055a.527.527 0 001.055 0c0-2.373-1.233-3.298-2.32-4.114-1.02-.764-1.9-1.423-1.9-3.27a.527.527 0 00-1.054 0c0 2.374 1.233 3.298 2.32 4.114 1.02.764 1.899 1.424 1.899 3.27zm1.055-7.383a.527.527 0 10-1.055 0c0 2.269.607 3.18 1.143 3.984.497.745.966 1.449.966 3.399a.527.527 0 001.055 0c0-2.27-.607-3.18-1.143-3.984-.497-.746-.966-1.45-.966-3.4zM3.527 14.637h16.946c.29 0 .527.236.527.527v3.164a.527.527 0 01-.527.527H3.527A.527.527 0 013 18.328v-3.164c0-.291.236-.527.527-.527zM17.836 17.8v-2.11h-7.418v2.11h7.418zm-8.473-2.11H4.055v2.11h5.308v-2.11zm9.528 2.11h1.054v-2.11h-1.054v2.11z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const SmokeIconPublicProfile = React.memo(SvgComponent);
export default SmokeIconPublicProfile;
