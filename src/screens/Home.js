import React from "react";
import { Text, StyleSheet, View } from "react-native";
import Title from "../components/Title";
import Card from "../components/Card";
import Fotter from "../components/Fotter";
import { useNavigation } from "@react-navigation/native";

export default function HomePage(){
    const navigation = useNavigation()
    return(
        <View style={styles.container}>
            <Title
                cidade = "?"
                pais = "?"
            />
            <Card
                //MainCard
                mainText = "?"
                dateText = "?"
                temperature = "?"
                img = "cloud"
                //FotterCard
                wind = "?" //km/j
                pressure = "?"
                uv = "?"
                fellsLike = "?"
            />
            <Fotter
                nav = {() => navigation.navigate("SecondPage")}
            />
        </View>
    );  
}


const styles = StyleSheet.create({
    container:{
        height: '100%'
    }
})