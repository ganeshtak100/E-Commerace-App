import React from 'react';
import {Platform, SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigator from './src/navigation/navigator';

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar backgroundColor={'#fff'} barStyle={'light-content'} />
      <Navigator />
    </SafeAreaView>
  );
}

export default App;
