import React from "react";
import {StyleSheet, Text, View} from "react-native";
import {Theme} from "../theme";



const Navbar = ({title}) => {
    return (
        <View style={css.navbar}>
            <Text style={css.text}>{title}</Text>
        </View>
    );
};


const css = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 3,
        backgroundColor: Theme.MAIN_COLOR
    },
    text: {
        color: "white",
        fontSize: 20
    }
});



export default Navbar;