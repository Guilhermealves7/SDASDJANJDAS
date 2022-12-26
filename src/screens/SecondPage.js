import React from "react";
import { Text, StyleSheet, View } from "react-native";

export default function SecondPage(){
    return(
        <View style={styles.container}>
            <Text>SecondPage</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        justifyContent: "center",
        alignItems: "center"
    }
})