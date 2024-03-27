import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {type SvgProps} from 'react-native-svg';
interface ISvgProps extends SvgProps {
  xmlSpace?: string;
  size?: number;
  color?: string;
  heightSize?: number;
  widthSize?: number;
  xmlns?: string;
  xmlnsXlink?: string;
}
function Cart({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color = 'red',
  heightSize = 17,
  widthSize = 16,
  ...props
}: ISvgProps) {
  return (
    <Svg
      width={widthSize}
      height={heightSize}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M6.281 14.043c-.813 0-1.478.665-1.478 1.479 0 .812.665 1.478 1.478 1.478.814 0 1.479-.666 1.479-1.479 0-.813-.665-1.478-1.479-1.478zm0 2.218a.741.741 0 01-.739-.74c0-.406.333-.739.74-.739.406 0 .739.333.739.74 0 .406-.333.739-.74.739zM12.935 14.043c-.813 0-1.479.665-1.479 1.479 0 .812.666 1.478 1.479 1.478.813 0 1.478-.666 1.478-1.479 0-.813-.665-1.478-1.478-1.478zm0 2.218a.741.741 0 01-.74-.74c0-.406.333-.739.74-.739.406 0 .739.333.739.74 0 .406-.333.739-.74.739zM15.374 3.474c-.259-.333-.702-.517-1.146-.517H3.991l-.147-.961A1.509 1.509 0 002.365.739H0v.74h2.365c.37 0 .702.258.74.628l1.552 10.015c.147.702.776 1.22 1.478 1.22h7.909v-.74h-7.91c-.369 0-.664-.258-.738-.628l-.148-.887h8.204c.702 0 1.33-.517 1.479-1.293l.776-5.174a1.333 1.333 0 00-.333-1.146zm-.407 1.072l-.776 5.174c-.074.406-.37.665-.739.665H5.137L4.102 3.733h10.126c.222 0 .444.11.592.258.147.111.184.333.147.555z"
        fill="#000"
      />
    </Svg>
  );
}

export default Cart;
