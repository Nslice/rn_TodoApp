import React from "react";
import {StyleSheet, View, ActivityIndicator} from "react-native";
import {Theme} from "src/theme";



export const AppLoader = () => {
    return (
        <View style={css.center}>
            <ActivityIndicator size="large" color={Theme.MAIN_COLOR}/>
        </View>
    );
};


const css = StyleSheet.create({
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});