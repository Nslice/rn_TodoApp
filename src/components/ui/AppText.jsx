import React from "react";
import {StyleSheet, Text} from "react-native";



const AppText = (props) => {
    const style = {...css.default, ...props.style};
    return (
        <Text style={style}>{props.children}</Text>
    );
};


const css = StyleSheet.create({
    default: {
        fontFamily: "roboto-regular"
    }
});



export default AppText;