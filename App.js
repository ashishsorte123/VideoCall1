/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import Navigation from './src/navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />

      <Navigation />
    </>
  );
};

export default App;
