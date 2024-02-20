import React from "react";
import { TouchableOpacity,Text,StyleSheet, View } from "react-native";

const ButtonComponent = ()=>{
    return(
        <View>
            <TouchableOpacity style={styles.button}>
                <Text>Login</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        height:50,
        backgroundColor: '#00FFFF',
        padding: 10,
        margin:10,
      },
});

export default ButtonComponent;