import React from "react";
import {StyleSheet, Text, View} from "react-native";


const AppCard = (props) => {
    const style = {...css.default, ...props.style};
    return (
        <View style={style}>
            {props.children}
        </View>
    );
}


const css = StyleSheet.create({
    default: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",

        //<editor-fold desc="OS свойства">
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 2,
            height: 3
        },
        //<editor-fold desc="OS свойства">

        elevation: 8,
        backgroundColor: "#fff",
        borderRadius: 10,
    }
});



export default AppCard;