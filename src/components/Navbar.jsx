import React from "react";
import {StyleSheet, View, Platform} from "react-native";
import {Theme} from "src/theme";
import {AppTextBold} from "./ui/AppTextBold";



export const Navbar = ({title}) => {
    const select = Platform.select({
        ios: css.navbarIos,
        android: css.navbarAndroid
    });

    return (
        <View style={{...css.navbar, ...select}}>
            <AppTextBold style={css.text}>{title}</AppTextBold>
        </View>
    );
};


const css = StyleSheet.create({
    navbar: {
        height: 70,
        alignItems: "center",
        justifyContent: "flex-end",
        paddingBottom: 3
    },
    navbarAndroid: {
        backgroundColor: Theme.MAIN_COLOR
    },
    navbarIos: {
       borderBottomColor: Theme.MAIN_COLOR,
       borderBottomWidth: 1
    },
    text: {
        color: (Platform.OS === "ios") ? Theme.MAIN_COLOR : "white",
        fontSize: 20
    }
});