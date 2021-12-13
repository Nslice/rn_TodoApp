import React from "react";
import {StyleSheet, Text} from "react-native";



const AppText = ({style, ...props}) => {
    const resultStyle = {...css.default, ...style};
    return (
        <Text style={resultStyle}>{props.children}</Text>
    );
};


const css = StyleSheet.create({
    default: {
        fontFamily: "roboto-bold"
    }
});



export default AppText;