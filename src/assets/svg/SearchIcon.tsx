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
function SearchIcon({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color = 'red',
  heightSize = 15,
  widthSize = 15,
  ...props
}: ISvgProps) {
  return (
    <Svg
      width={heightSize}
      height={widthSize}
      viewBox="0 0 15 15"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M1.875 1.875a6.403 6.403 0 008.551 9.509l2.973 2.972a.677.677 0 00.957-.957l-2.973-2.972a6.403 6.403 0 00-9.508-8.551zm.957.957a5.049 5.049 0 117.14 7.141 5.05 5.05 0 01-7.14-7.14z"
        fill="#00568D"
      />
    </Svg>
  );
}

export default SearchIcon;
