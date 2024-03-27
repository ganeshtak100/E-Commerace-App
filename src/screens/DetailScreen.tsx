import {View, Text, TouchableOpacity} from 'react-native';

const ProductDetailScreen = () => {
  return (
    <View style={{flex: 1}}>
      <Text>Hello</Text>

      <TouchableOpacity
        style={{
          height: 30,
          width: 100,
          backgroundColor: 'red',
          alignSelf: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => {}}>
        <Text style={{backgroundColor: 'red', width: 80, height: 20}}>Go </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ProductDetailScreen;
