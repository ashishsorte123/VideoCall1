import {View, Text, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';
import CallActionBox from '../../components/CallActionBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation, useRoute} from '@react-navigation/core';

const CallingScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const user = route?.params.user;
  const goBack = () => {
    navigation.pop();
  };
  return (
    <View style={styles.page}>
      <Pressable onPress={goBack} style={styles.backButton}>
        <Ionicons name="chevron-back" color="white" size={25} />
      </Pressable>

      <View style={styles.cameraPreview}>
        <Text style={styles.name}>{user?.user_display_name}</Text>
        <Text style={styles.phoneNumber}>ringing +31 343 3232 5656</Text>
      </View>

      <CallActionBox />
    </View>
  );
};

export default CallingScreen;
