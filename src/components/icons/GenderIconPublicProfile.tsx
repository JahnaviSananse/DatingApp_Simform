import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={25} viewBox="0 0 24 25" fill="none" {...props}>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.266 4.157L15.27 8.24c1.218 1.56 1.45 3.669.704 5.464-.717 1.805-2.343 3.126-4.3 3.348v3.823h2.112c.337 0 .606.279.606.626 0 .348-.27.626-.606.626h-2.111v2.247c0 .348-.27.626-.607.626a.614.614 0 01-.606-.626v-2.247h-2.11a.614.614 0 01-.607-.626c0-.348.27-.626.606-.626h2.111v-3.8a5.195 5.195 0 01-1.938-.641 5.23 5.23 0 01-1.241-.94c-1.608-1.644-1.953-4.106-1.04-6.122.835-1.89 2.686-3.21 4.825-3.21.361 0 .714.037 1.055.108.817.157 1.604.51 2.29 1.061l3.98-4.067-2.714.015a.612.612 0 01-.62-.633.628.628 0 01.626-.64L19.884 2a.612.612 0 01.619.633l-.022 4.274a.628.628 0 01-.626.64.603.603 0 01-.43-.177.631.631 0 01-.174-.44l.015-2.773zm-4.422 9.03a4.233 4.233 0 01-.9 1.374 4.093 4.093 0 01-3.78 1.159c-1.81-.424-3.16-2.094-3.16-4.09 0-.638.138-1.243.385-1.784.198-.42.467-.812.807-1.16a4.056 4.056 0 013.793-1.142c1.802.43 3.144 2.096 3.144 4.086 0 .55-.102 1.076-.289 1.557z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const GenderIconPublicProfile = React.memo(SvgComponent);
export default GenderIconPublicProfile;
