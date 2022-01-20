import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallingScreen = () => {
  return (
    <View style={styles.page}>
      <View style={styles.cameraPreview}>
        <Text style={styles.name}>Alex</Text>
        <Text style={styles.phoneNumber}>ringing +31 343 3232 5656</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <View style={styles.iconButton}>
          <Ionicons name="camera-reverse" size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name="camera-off" size={30} color={'white'} />
        </View>

        <View style={styles.iconButton}>
          <MaterialIcons name="microphone-off" size={30} color={'white'} />
        </View>

        <View style={[styles.iconButton, {backgroundColor: 'red'}]}>
          <MaterialIcons name="phone-hangup" size={30} color={'white'} />
        </View>
      </View>
    </View>
  );
};

export default CallingScreen;
