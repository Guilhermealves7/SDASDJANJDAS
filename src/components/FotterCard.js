import { View, StyleSheet, Text, ShadowPropTypesIOS} from "react-native";
import { FontAwesome5 } from '@expo/vector-icons'; 
import React, { useState } from "react";

/*
    cloud
    sun
    cloud-sun
    cloud-moon
    cloudversify
    cloud-showers-heavy
*/

export default function FotterCard(props){

    return(
        <View style={[styles.container,
        {
            backgroundColor: props.bgColor
        }]}>
            <Text style={{
                color: props.colorFont,
                fontFamily: 'courier',
                marginTop: 7,
                fontWeight: 'bold'
            }}>
                {props.time}
            </Text>

            <FontAwesome5 name={props.img} size={24} color={props.color} />

            <Text style={{
                color: props.colorFont,
                fontWeight: 'bold',
                marginBottom: 7,
                fontFamily: 'courier'
            }}>
                {props.temp}
            </Text>
        </View>
    );

}

const styles = StyleSheet.create({
    container:{
        height: 110,
        width: 60,
        marginLeft: 15,
        borderRadius: 10,
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})