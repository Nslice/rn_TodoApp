import React from "react";
import {Platform, StyleSheet, View} from "react-native";



export const AppCard = ({children, style}) => {
    const defaultStyle = Platform.select({ios: css.defaultIos});
    const resultStyle = {...css.default, ...defaultStyle, ...style};

    return (
        <View style={resultStyle}>
            {children}
        </View>
    );
}


const css = StyleSheet.create({
    default: {
        flexDirection: "row",
        padding: 20,
        justifyContent: "space-between",
        alignItems: "center",
        elevation: 8,
        backgroundColor: "#fff",
        borderRadius: 10
    },
    defaultIos: {
        shadowColor: "#000",
        shadowRadius: 2,
        shadowOpacity: 0.3,
        shadowOffset: {
            width: 2,
            height: 3
        }
    }
});