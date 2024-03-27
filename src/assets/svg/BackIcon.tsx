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
function BackIcon({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color = 'red',
  heightSize = 17,
  widthSize = 9,
  ...props
}: ISvgProps) {
  return (
    <Svg
      width={widthSize}
      height={heightSize}
      viewBox="0 0 9 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}>
      <Path
        d="M8.477 0a.36.36 0 01.254.614L.867 8.5l7.864 7.886a.36.36 0 01-.508.509L.106 8.755a.36.36 0 010-.509L8.223.106A.358.358 0 018.477 0z"
        fill="#000"
      />
    </Svg>
  );
}

export default BackIcon;
