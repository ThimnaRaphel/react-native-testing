import React from "react";
import {View, Text} from 'react-native';
import { StyleSheet} from 'react-native';
import CameraIcon from './CameraIcon';
import MessageIcon from '../component/MessageIcon';

const header = ()=>{
    return (
        <View
        style ={{
            flexDirection: 'row',
            justifyContent:'space-between',
            paddingHorizontal:15,
            height:70,
            alignItems:'center'
        }}>
            <CameraIcon></CameraIcon>
            <Text
            style = {{
                fontFamily : 'Cochin',
                fontSize : 40,
                fontWeight : 'bold',
                color:'black'
            }}
            >Instagram</Text>
            <MessageIcon></MessageIcon>
        </View>
    )
};


export default header;