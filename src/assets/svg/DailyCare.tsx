import * as React from 'react';
import Svg, {Path, Defs, Pattern, Use, Image} from 'react-native-svg';
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
function DailyCare({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  color = 'red',
  heightSize = 31,
  widthSize = 31,
  ...props
}: ISvgProps) {
  return (
    <Svg
      width={widthSize}
      height={heightSize}
      viewBox="0 0 31 31"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}>
      <Path fill="url(#pattern0)" d="M0 0H31V31H0z" />
      <Defs>
        <Pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}>
          <Use xlinkHref="#image0_178_7800" transform="scale(.005)" />
        </Pattern>
        <Image
          id="image0_178_7800"
          width={200}
          height={200}
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAYAAACtWK6eAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFHGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4gPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDUgNzkuMTYzNDk5LCAyMDE4LzA4LzEzLTE2OjQwOjIyICAgICAgICAiPiA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPiA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiIHhtcDpDcmVhdGVEYXRlPSIyMDIyLTExLTIzVDEzOjM1OjQ5KzA1OjMwIiB4bXA6TW9kaWZ5RGF0ZT0iMjAyMi0xMS0yM1QxMzozNjozMCswNTozMCIgeG1wOk1ldGFkYXRhRGF0ZT0iMjAyMi0xMS0yM1QxMzozNjozMCswNTozMCIgZGM6Zm9ybWF0PSJpbWFnZS9wbmciIHBob3Rvc2hvcDpDb2xvck1vZGU9IjMiIHBob3Rvc2hvcDpJQ0NQcm9maWxlPSJzUkdCIElFQzYxOTY2LTIuMSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDo4Mjc2OWRmYi0zOWZk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"
        />
      </Defs>
    </Svg>
  );
}

export default DailyCare;
