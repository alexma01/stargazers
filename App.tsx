import React from 'react';
import {SafeAreaView} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {HomeScreen} from './src/screens/HomeScreen';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: Colors.lighter, flex: 1}}>
      <HomeScreen />
    </SafeAreaView>
  );
};

export default App;
