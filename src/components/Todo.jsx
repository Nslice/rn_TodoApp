import React from "react";
import {StyleSheet,View, TouchableOpacity} from "react-native";
import {AppText} from "./ui/AppText";



export const Todo = ({todo, onLongPress, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.4}
                          onPress={() => onPress(todo.id)}
                          onLongPress={() => onLongPress(todo)}>
            <View style={css.todo}>
                <AppText>{todo.title}</AppText>
            </View>
        </TouchableOpacity>
    );
};


const css = StyleSheet.create({
    todo: {
        flexDirection: "row",
        alignItems: "center",
        padding: 15,
        borderWidth: 1,
        backgroundColor: "#eee",
        borderColor: "#bfbbbb",
        borderRadius: 5,
        marginBottom: 5
    },
});