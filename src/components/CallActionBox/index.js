import {View, Pressable} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CallActionBox = ({onHangUpPress}) => {
  const [isCameraOn, setIsCameraOn] = useState(true);
  const [isMicOn, setIsMicOn] = useState(true);
  const onReverseCamera = () => {
    console.warn('onReverseCamera');
  };

  const onToggleCamera = () => {
    setIsCameraOn(currentValue => !currentValue);
  };

  const onToggleMicrophone = () => {
    setIsMicOn(currentValue => !currentValue);
  };

  return (
    <View style={styles.buttonsContainer}>
      <Pressable onPress={onReverseCamera} style={styles.iconButton}>
        <Ionicons name="camera-reverse" size={30} color={'white'} />
      </Pressable>

      <Pressable onPress={onToggleCamera} style={styles.iconButton}>
        <MaterialIcons
          name={isCameraOn ? 'camera-off' : 'camera'}
          size={30}
          color={'white'}
        />
      </Pressable>

      <Pressable onPress={onToggleMicrophone} style={styles.iconButton}>
        <MaterialIcons
          name={isMicOn ? 'microphone-off' : 'microphone'}
          size={30}
          color={'white'}
        />
      </Pressable>

      <Pressable
        onPress={onHangUpPress}
        style={[styles.iconButton, {backgroundColor: 'red'}]}>
        <MaterialIcons name="phone-hangup" size={30} color={'white'} />
      </Pressable>
    </View>
  );
};

export default CallActionBox;
