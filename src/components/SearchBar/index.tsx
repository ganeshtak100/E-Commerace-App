import {View, TextInput} from 'react-native';
import React, {useState} from 'react';
import {respFontSize} from '../../utils/responsiveSize';
import {Icons} from '../../assets/svg';
import {Fonts} from '../../utils/Fonts';
import {COLORS} from '../../utils/color';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <View
      style={{
        borderRadius: 5,
        backgroundColor: 'rgba(224, 224, 224, 0.6)',
        flexDirection: 'row',
        paddingHorizontal: 14,
        gap: 13,
        alignItems: 'center',
        width: '100%',
        paddingRight: 8,
      }}>
      <Icons.SearchIcon />
      <TextInput
        value={searchTerm}
        onChangeText={(text: string) => setSearchTerm(text)}
        placeholder={'Search meds, brands & more'}
        style={{
          color: COLORS.black,
          fontFamily: Fonts.Poppins,
          fontSize: respFontSize(12),
          width: '90%',
          alignSelf: 'flex-start',
        }}
        placeholderTextColor={COLORS.darkGray}
      />
    </View>
  );
};

export default SearchBar;
