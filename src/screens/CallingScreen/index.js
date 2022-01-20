import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.phoneNumber}>ringing +31 343 3232 5656</Text>
      </View>
    </View>
  );
};

export default CallingScreen;
