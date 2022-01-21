import {View, Text} from 'react-native';
import React from 'react';
import CallActionBox from '../../components/CallActionBox';
import styles from './styles';

const CallScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview} />

      <CallActionBox />
    </View>
  );
};

export default CallScreen;
