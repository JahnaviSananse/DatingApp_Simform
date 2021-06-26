import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
      <Path
        d="M16.597 4c-1.702 0-3.117 1.222-3.365 2.81H4.404L4 7.619l6.117 7.584v4.065a.746.746 0 01-.755.734H6.824V21h7.613v-.999H11.9a.746.746 0 01-.755-.735v-4.064l3.964-4.915c.461.22.968.333 1.489.333C18.473 10.62 20 9.135 20 7.31S18.473 4 16.597 4zm-.795 3.81L14.33 9.633a2.094 2.094 0 00-1.146-.342c-.637 0-1.23.286-1.67.806l-.01.013c-.241.285-.553.442-.877.442-.325 0-.636-.157-.877-.442l-.011-.013c-.44-.52-1.033-.806-1.67-.806-.409 0-.799.118-1.142.34L5.459 7.81h10.343zm-2.11 2.614L10.63 14.22l-3.064-3.798c.158-.087.33-.133.504-.133.324 0 .636.157.877.442l.01.013c.44.52 1.033.806 1.67.806.638 0 1.231-.286 1.67-.806l.012-.013c.24-.285.552-.442.877-.442.176 0 .348.047.507.135zm2.905-.802c-.288 0-.57-.05-.834-.147l1.498-1.857-.404-.807h-2.58c.235-1.035 1.186-1.812 2.32-1.812 1.31 0 2.376 1.037 2.376 2.311 0 1.275-1.066 2.312-2.376 2.312z"
        fill={props.color || '#04132E'}
      />
    </Svg>
  );
}

const AlcoholPublicProfile = React.memo(SvgComponent);
export default AlcoholPublicProfile;