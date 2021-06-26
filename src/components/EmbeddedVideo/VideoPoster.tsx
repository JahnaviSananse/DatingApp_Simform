import React from 'react';

import {FastImageComponent} from '../index';

type Props = {
  uri: string;
};

const VideoPoster: React.FunctionComponent<Props> = ({uri}) => {
  return (
    <FastImageComponent style={{height: '100%', width: '100%'}} uri={uri} />
  );
};
export default React.memo(VideoPoster);
