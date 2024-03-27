import React, {useEffect, useState, useRef, useCallback} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  FlatList,
  LayoutAnimation,
  UIManager,
  Platform,
  Text,
  Image,
} from 'react-native';
import {slider} from '../../assets/images/index';
import {normalize, width} from '../../utils/responsiveSize';
import {COLORS} from '../../utils/color';
import Carousel from 'react-native-reanimated-carousel';

const HomeCarousel = ({data}: any) => {
  const [dimension, setDimension] = useState(Dimensions.get('window'));
  const [index, setIndex] = useState(0);
  //   const [dataState, setDataState] = useState(data);
  //   const [indicatorIndex, setindicatorIndex] = useState();

  //   const sliderRef = useRef<FlatList>();
  //   let intervalId = null;

  //   useEffect(() => {
  //     if (Platform.OS === 'android') {
  //       UIManager.setLayoutAnimationEnabledExperimental(true);
  //     }
  //   }, []);

  //   const viewabilityConfig = {
  //     viewAreaCoveragePercentThreshold: 50,
  //   };

  //   const onViewableItemsChanged = ({viewableItems, changed}: any) => {
  //     console.log('viewableItems', viewableItems);
  //     if (viewableItems.length > 0) {
  //       let currentIndex = viewableItems[0].index;
  //       if (currentIndex % data.length === data.length - 1) {
  //         setIndex(currentIndex);
  //         setindicatorIndex(currentIndex);
  //         setDataState(dataState => [...dataState, ...data]);
  //       } else {
  //         console.log(currentIndex, 'else');
  //         setIndex(currentIndex);
  //       }
  //     }
  //   };

  //   const onSlideChange = () => {
  //     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);

  //     const newIndex = index + 1;
  //     setIndex(newIndex);

  //     sliderRef?.current?.scrollToIndex({
  //       index: index,
  //       animated: true,
  //     });
  //   };

  //   const startInterval = useCallback(() => {
  //     intervalId = setInterval(onSlideChange, 3000);
  //   }, [onSlideChange]);

  //   useEffect(() => {
  //     const timer = setTimeout(() => {
  //       // Change data.length to ads.length here
  //       const nextIndex = index === data.length - 1 ? 0 : index + 1;
  //       setIndex(nextIndex);
  //     }, 5000);
  //     return () => clearTimeout(timer);
  //   }, [data.length, index]);
  //   useEffect(() => {
  //     startInterval();

  //     return () => {
  //       clearInterval(intervalId);
  //     };
  //   }, [onSlideChange]);

  //   const viewabilityConfigCallbackPairs = useRef([
  //     {viewabilityConfig, onViewableItemsChanged},
  //   ]);
  //   const renderIndicator = () => {
  //     const indicators = [];
  //     data.map((val, key) =>
  //       indicators.push(
  //         <Text
  //           key={key}
  //           style={
  //             key === indicatorIndex % data.length
  //               ? {
  //                   color: 'lightblue',
  //                   fontSize: 10,
  //                   marginBottom: 8,
  //                   marginHorizontal: 1,
  //                 }
  //               : {
  //                   color: '#888',
  //                   fontSize: 10,
  //                   marginBottom: 8,
  //                   marginHorizontal: 1,
  //                 }
  //           }>
  //           ⬤
  //         </Text>,
  //       ),
  //     );
  //     return indicators;
  //   };
  return (
    <View
      style={{
        flex: 1,
        width: '100%',
        height: normalize(140),
        backgroundColor: COLORS.darkGray,
        borderRadius: 5,
      }}>
      <Carousel
        loop
        width={width - 40}
        style={{
          borderRadius: 5,
          backgroundColor: '#fff',
        }}
        height={normalize(140)}
        autoPlay={true}
        data={[...new Array(6).keys()]}
        scrollAnimationDuration={2000}
        autoPlayInterval={7000}
        onSnapToItem={index => console.log('current index:', index)}
        renderItem={({index}) => (
          <View
            style={{
              flex: 1,
              padding: 0,
            }}>
            <Image
              resizeMode="contain"
              source={slider}
              style={{
                width: '100%',
                height: '100%',
              }}
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeCarousel;
// <View
//   style={{
//     width: '100%',
//     height: normalize(140),
//     backgroundColor: COLORS.darkGray,
//     borderRadius: 5,
//   }}>
//   <FlatList
//     ref={sliderRef}
//     horizontal
//     pagingEnabled
//     // snapToInterval={dimension?.width}
//     decelerationRate="fast"
//     bounces={false}
//     showsHorizontalScrollIndicator={false}
//     data={dataState}
//     renderItem={({item, index}) => (
//       <>
//         <Image
//           resizeMode="contain"
//           source={slider}
//           style={{
//             width: '100%',
//             height: '100%',
//           }}
//         />
//       </>
//     )}
//     viewabilityConfigCallbackPairs={viewabilityConfigCallbackPairs.current}
//     getItemLayout={(data, index) => ({
//       length: dimension?.width,
//       offset: dimension?.width * index,
//       index,
//     })}
//     windowSize={1}
//     initialNumToRender={1}
//     maxToRenderPerBatch={1}
//     removeClippedSubviews={true}
//   />
//   <View
//     style={{
//       flexDirection: 'row',
//       position: 'absolute',
//       bottom: 0,
//       alignSelf: 'center',
//     }}>
//     {renderIndicator()}
//   </View>
// </View>
