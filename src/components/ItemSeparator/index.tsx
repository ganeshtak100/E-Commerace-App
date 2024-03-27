import {View} from 'react-native';
import React from 'react';
import {normalize} from '../../utils/responsiveSize';
type IProps = {
  height?: number;
  width?: number;
};
const ItemSeparator = ({height = 20, width = 0}: IProps) => {
  return (
    <View
      style={{
        height: normalize(height),
        width: normalize(width),
      }}
    />
  );
};

export default ItemSeparator;
