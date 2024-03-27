import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Icons} from '../../assets/svg';
import {Fonts} from '../../utils/Fonts';
import {normalize, respFontSize} from '../../utils/responsiveSize';
import {COLORS} from '../../utils/color';

const Header = ({title = 'Pharmacy'}: any) => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
      <TouchableOpacity
        style={{flexDirection: 'row', alignItems: 'center', gap: 8}}>
        <Icons.BackIcon />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: Fonts.PoppinsBold,
            fontSize: respFontSize(14),
            color: COLORS.black,
          }}>
          {title}
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          width: normalize(28),
          height: normalize(28),
          borderWidth: 0.1,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#fff',
          shadowOffset: {
            width: 0,
            height: 10,
          },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
        }}>
        <Icons.Cart />
      </TouchableOpacity>
    </View>
  );
};

export default Header;
