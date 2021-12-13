import React from "react";
import {StyleSheet, View, TouchableOpacity, TouchableNativeFeedback, Platform} from "react-native";
import AppTextBold from "./AppTextBold"
import {Theme} from "../../theme";



const AppButton = ({children, onPress, color = Theme.MAIN_COLOR}) => {
    const Wrapper = (Platform.OS === "android") ?  TouchableNativeFeedback : TouchableOpacity;

    const style = {...css.button, backgroundColor: color};
    return (
        <Wrapper onPress={onPress} activeOpacity={0.7}>
            <View style={style}>
                <AppTextBold style={css.text}>{children}</AppTextBold>
            </View>
        </Wrapper>
    );
};


const css = StyleSheet.create({
    button: {
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 5,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"
    },
    text: {
        color: "white"
    }
});



export default AppButton;