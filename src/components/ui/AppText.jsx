import React from "react";
import {StyleSheet, Text} from "react-native";



export const AppText = ({children, style}) => {
    const resultStyle = {...css.default, ...style};
    return (
        <Text style={resultStyle}>
            {children}
        </Text>
    );
};


const css = StyleSheet.create({
    default: {
        fontFamily: "roboto-regular"
    }
});