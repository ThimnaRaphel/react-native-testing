import React from "react";
import {View, Image, StyleSheet} from 'react-native';

const messageIcon = ()=>{
    return (
        <View>
            <Image
        style={styles.tinyLogo}
        source={require('../assets/icons8-telegram-50.png')}
      />
        </View>
    )
};

export const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });

export default messageIcon;