import React from "react";
import {StyleSheet, Text} from "react-native";



export const AppTextBold = ({children, style}) => {
    const resultStyle = {...css.default, ...style};

    return (
        <Text style={resultStyle}>
            {children}
        </Text>
    );
};


const css = StyleSheet.create({
    default: {
        fontFamily: "roboto-bold"
    }
});