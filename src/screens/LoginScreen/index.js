import {View, Text, TextInput, Pressable, Alert} from 'react-native';
import React, {useState, useEffect} from 'react';
import styles from './styles';
import {Voximplant} from 'react-native-voximplant';
import {ACC_NAME, APP_NAME} from '../../Constants';
import {useNavigation} from '@react-navigation/core';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const voximplant = Voximplant.getInstance();
  const navigation = useNavigation();

  useEffect(() => {
    const connect = async () => {
      const status = await voximplant.getClientState();
      if (status === Voximplant.ClientState.DISCONNECTED) {
        await voximplant.connect();
      } else if (status === Voximplant.ClientState.LOGGED_IN) {
        redirectHome();
      }
    };

    connect();
  }, []);

  const signIn = async () => {
    try {
      const fqUsername = `${username}@${APP_NAME}.${ACC_NAME}.voximplant.com`;
      await voximplant.login(fqUsername, password);

      redirectHome();
    } catch (e) {
      console.log(e);
      Alert.alert(e.name, `Error code: ${e.code}`);
    }
  };

  const redirectHome = () => {
    navigation.reset({
      index: 0,
      routes: [
        {
          name: 'Contacts',
        },
      ],
    });
  };

  return (
    <View style={styles.page}>
      <TextInput
        value={username}
        onChangeText={setUsername}
        placeholder="Username"
        style={styles.input}
        autoCapitalize="none"
      />
      <TextInput
        value={password}
        onChangeText={setPassword}
        placeholder="Password"
        style={styles.input}
        secureTextEntry
      />

      <Pressable style={styles.button} onPress={signIn}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
