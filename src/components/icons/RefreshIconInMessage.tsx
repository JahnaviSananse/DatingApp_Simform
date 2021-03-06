import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

function SvgComponent(props: React.SVGProps<SVGSVGElement>) {
  return (
    <Svg width={16} height={16} viewBox="0 0 16 16" fill="none" {...props}>
      <Path
        d="M1.922 8.738A6.33 6.33 0 011.875 8c0-3.356 2.769-6.125 6.125-6.125 1.566 0 3.031.631 4.11 1.616l-.541.55c-.122.121-.169.3-.122.468a.49.49 0 00.356.32c.095.018 3.194 1.017 2.997.977.251.084.622-.184.553-.553l-.665-3.34a.47.47 0 00-.329-.357.468.468 0 00-.459.122l-.46.45A7.995 7.995 0 008 0C3.603 0 0 3.603 0 8v.019c0 .264.012.468.026.624a.469.469 0 00.375.418l.963.192a.47.47 0 00.558-.515zM15.601 6.938l-.966-.196a.47.47 0 00-.559.516c.034.273.049.54.049.742 0 3.356-2.769 6.125-6.125 6.125-1.566 0-3.031-.631-4.11-1.625l.541-.54c.122-.123.169-.3.122-.47a.49.49 0 00-.356-.318c-.095-.02-3.195-1.018-2.997-.978a.46.46 0 00-.422.131.467.467 0 00-.131.422l.665 3.31a.47.47 0 00.328.355.45.45 0 00.46-.121l.45-.45A8.027 8.027 0 008 16c4.397 0 8-3.603 8-8v-.028c0-.208-.008-.412-.025-.615a.469.469 0 00-.374-.419z"
        fill={props.color || '#0DB4B9'}
      />
    </Svg>
  );
}

const RefreshIcon2 = React.memo(SvgComponent);
export default RefreshIcon2;
