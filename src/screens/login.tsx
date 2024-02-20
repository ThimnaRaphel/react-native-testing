import React from 'react';
import {View, Text} from 'react-native';
import { StyleSheet, TextInput} from 'react-native';
import ButtonComponent from '../component/Button';
const login = () => {
  return (
    <View
      style={{
        flex :1,
        flexDirection: 'column',
        height: 100,
        padding: 20,
        justifyContent :'center'
      }}>
        <Text
        style={{
          fontWeight:'bold',
          textAlign:'center'
        }}
        >WELCOME</Text>
        <TextInput
        style={styles.input}
        placeholder={"Enter the user name"}
      />
      <TextInput
        style={styles.input}
        placeholder={"Enter the password"}
      />
      <Text>Forgot Password</Text>
      <ButtonComponent/>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    margin : 12,
  },
  baseText: {
    textAlign:'center',
    fontFamily: 'Cochin',
    textDecorationColor:'black',
  },
});


export default login;