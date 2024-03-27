import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {normalize, respFontSize} from '../utils/responsiveSize';
import SearchBar from '../components/SearchBar';
import HomeCarousel from '../components/HomeCarousel';
import ProductCategory from '../components/FullProduct';
import {COLORS} from '../utils/color';
import {Icons} from '../assets/svg';
import {Fonts} from '../utils/Fonts';
import ItemSeparator from '../components/ItemSeparator';

const categoryData = [
  {
    icon: <Icons.DailyCare />,
    title: 'Daily care',
    ringColor: '#3CA9B0',
  },
  {
    icon: <Icons.BabyCare />,
    title: 'Baby Care',
    ringColor: '#FFBF67',
  },
  {
    icon: <Icons.MotherCare />,
    title: 'Mother Care',
    ringColor: '#EC589B',
  },
  {
    icon: <Icons.DigestionCare />,
    title: 'Digestion',
    ringColor: '#95D9CD',
  },
  {
    icon: <Icons.Organic />,
    title: 'Organic',
    ringColor: '#CAC0D2',
  },
  {
    icon: <Icons.DigestionCare />,
    title: 'Digestion',
    ringColor: '#95D9CD',
  },
];

const Home = ({navigation}: any) => {
  return (
    <View
      style={{
        flex: 1,
        width: '100%',

        backgroundColor: '#FFF',
      }}>
      <View
        style={{
          gap: 11,
          paddingHorizontal: normalize(18),
        }}>
        <Header />
        <SearchBar />
        <View
          style={{
            height: normalize(140),
            backgroundColor: COLORS.white,
          }}>
          <HomeCarousel data={[1, 2, 3, 4, 5, 6]} />
        </View>
      </View>
      <View style={{paddingTop: 10, paddingHorizontal: normalize(18)}}>
        <ProductCategory categoryName="Categories" />
      </View>
      <View style={{paddingHorizontal: normalize(18), paddingTop: 10}}>
        <FlatList
          data={categoryData}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={<ItemSeparator width={19} />}
          renderItem={({item, index}) => {
            return (
              <TouchableOpacity>
                <View
                  style={{
                    borderWidth: 1,
                    borderColor: item.ringColor,
                    borderRadius: 30,
                    width: normalize(51),
                    height: normalize(51),
                    backgroundColor: COLORS.white,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  {item.icon}
                </View>
                <Text
                  style={{
                    fontFamily: Fonts.Poppins,
                    color: COLORS.black,
                    textAlign: 'center',
                    lineHeight: 12,
                    paddingTop: 4,
                    fontSize: respFontSize(8),
                  }}>
                  {item.title}
                </Text>
              </TouchableOpacity>
            );
          }}
        />
      </View>
      <View style={{paddingTop: 10, paddingHorizontal: normalize(18)}}>
        <ProductCategory categoryName="Baby Carnival" />
      </View>
    </View>
  );
};

export default Home;
