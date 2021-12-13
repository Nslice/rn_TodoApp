import React from "react";
import {Platform, StyleSheet, View} from "react-native";



const AppCard = (props) => {
    const defaultStyle = Platform.select({ios: css.defaultIos});
    const style = {...css.default, ...defaultStyle, ...props.style};

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



export default AppCard;