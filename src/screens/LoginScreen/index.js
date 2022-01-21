import {View, Text, TextInput, Pressable} from 'react-native';
import React from 'react';
import styles from './styles';

const LoginScreen = () => {
  const signIn = () => {};
  return (
    <View style={styles.page}>
      <TextInput placeholder="Username" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />

      <Pressable style={styles.button} onPress={signIn}>
        <Text>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default LoginScreen;
