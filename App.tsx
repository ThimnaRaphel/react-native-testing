import React from 'react';
import {View, Text} from 'react-native';
import {SafeAreaView, StyleSheet, TextInput,TouchableOpacity} from 'react-native';
// import buttonComponent from './src/component/Button';
import ButtonComponent from './src/component/Button';
const ViewBoxesWithColorAndText = () => {
  return (
    <View
      style={{
        flexDirection: 'column',
        height: 100,
        padding: 20,
        paddingTop:250
      }}>
        <Text>Hey there</Text>
        <Text
        style={{
          fontWeight:'bold',
          
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
    // margin:50,
    margin : 12,
  },
  baseText: {
    padding: 10,
    fontFamily: 'Cochin',
    textDecorationColor:'black',
  },
});


export default ViewBoxesWithColorAndText;