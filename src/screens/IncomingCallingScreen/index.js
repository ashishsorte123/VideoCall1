import {View, Text, ImageBackground, Pressable, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import bg from '../../../assets/images/android_bg.png';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import {useRoute, useNavigation} from '@react-navigation/native';
import {Voximplant} from 'react-native-voximplant';

const IncomingCallScreen = () => {
  const [caller, setCaller] = useState('');

  const route = useRoute();

  const {call} = route.params;

  const navigation = useNavigation();

  const onDecline = () => {
    call.decline();
  };

  useEffect(() => {
    setCaller(call.getEndpoints()[0].displayName);

    call.on(Voximplant.CallEvents.Disconnected, callEvent => {
      navigation.navigate('Contacts');
    });

    return () => {
      call.off(Voximplant.CallEvents.Disconnected);
    };
  }, []);

  const onAccept = () => {
    navigation.navigate('Calling', {
      call,
      isIncomingCall: true,
    });
  };
  return (
    <ImageBackground source={bg} style={styles.bg} resizeMode="cover">
      <Text style={styles.name}>{caller}</Text>
      <Text style={styles.phoneNumber}>WhatsApp video ...</Text>

      <View style={[styles.row, {marginTop: 'auto'}]}>
        <View style={styles.iconContainer}>
          <Ionicons name="alarm" color="white" size={30} />
          <Text style={styles.iconText}>Remind me</Text>
        </View>
        <View style={styles.iconContainer}>
          <Entypo name="message" color="white" size={30} />
          <Text style={styles.iconText}>Message</Text>
        </View>
      </View>

      <View style={styles.row}>
        {/* Decline Button */}
        <Pressable onPress={onDecline} style={styles.iconContainer}>
          <View style={styles.iconButtonContainer}>
            <Feather name="x" color="white" size={40} />
          </View>
          <Text style={styles.iconText}>Decline</Text>
        </Pressable>

        {/* Accept Button */}
        <Pressable onPress={onAccept} style={styles.iconContainer}>
          <View
            style={[styles.iconButtonContainer, {backgroundColor: '#2e7bff'}]}>
            <Feather name="check" color="white" size={40} />
          </View>
          <Text style={styles.iconText}>Accept</Text>
        </Pressable>
      </View>
    </ImageBackground>
  );
};

export default IncomingCallScreen;
