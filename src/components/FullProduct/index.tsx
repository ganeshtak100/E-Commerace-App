import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {respFontSize} from '../../utils/responsiveSize';
import {Fonts} from '../../utils/Fonts';
import {COLORS} from '../../utils/color';

const ProductCategory = ({categoryName = 'Categories'}: any) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <Text
        style={{
          fontSize: respFontSize(9),
          fontFamily: Fonts.PoppinsBold,
          lineHeight: 12,
          color: COLORS.black,
        }}>
        {categoryName}
      </Text>
      <TouchableOpacity>
        <Text
          style={{
            fontSize: respFontSize(9),
            fontFamily: Fonts.PoppinsBold,
            lineHeight: 12,
            color: '#00568D',
          }}>
          See All
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductCategory;
