/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import CallingScreen from './src/screens/CallingScreen';
import ContactsScreen from './src/screens/ContactsScreen';

const App = () => {
  return (
    <SafeAreaView>
      <StatusBar barStyle="light-content" />
      {/* <ContactsScreen /> */}
      <CallingScreen />
    </SafeAreaView>
  );
};

export default App;
