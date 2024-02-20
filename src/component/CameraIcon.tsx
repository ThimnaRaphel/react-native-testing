import React from "react";
import {View, Image, StyleSheet} from 'react-native';

const cameraIcon = ()=>{
    return (
        <View>
            <Image
        style={styles.tinyLogo}
        source={require('../assets/icons8-camera-50.png')}
      />
        </View>
    )
};

const styles = StyleSheet.create({
    tinyLogo: {
      width: 50,
      height: 50,
    },
  });

export default cameraIcon;