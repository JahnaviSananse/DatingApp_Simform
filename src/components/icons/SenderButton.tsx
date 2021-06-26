import * as React from 'react';
import Svg, {Defs, G, Path, SvgProps} from 'react-native-svg';

interface Props extends SvgProps {
  colorFill?: string;
}

const Search: React.FunctionComponent<Props> = ({...props}) => (
  <Svg width={38} height={38} viewBox="0 0 38 38" fill="none" {...props}>
    <G>
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19 38c10.493 0 19-8.507 19-19S29.493 0 19 0 0 8.507 0 19s8.507 19 19 19z"
        fill={props.color || '#F08380'}
      />
      <Path
        d="M14.483 11.219a1.398 1.398 0 00-2.01 1.942l4.37 4.53a1.5 1.5 0 010 2.082l-4.37 4.53a1.398 1.398 0 002.01 1.942l6.255-6.47a1.5 1.5 0 000-2.085l-6.255-6.471z"
        fill={props.colorFill || '#04132E'}
        // stroke="#FFC0C0"
      />
      <Path
        d="M21.875 11.218a1.398 1.398 0 00-2.011 1.942l4.37 4.53a1.5 1.5 0 010 2.083l-4.37 4.53a1.398 1.398 0 002.01 1.942l6.255-6.47a1.5 1.5 0 000-2.086l-6.255-6.47z"
        fill={props.colorFill || '#04132E'}
        // stroke="#FFC0C0"
      />
    </G>
    <Defs />
  </Svg>
);

export default React.memo(Search);
