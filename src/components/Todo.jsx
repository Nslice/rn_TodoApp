import React from "react";
import {StyleSheet, Text, View, TouchableOpacity} from "react-native";


const Todo = ({todo, onLongPress, onPress}) => {
    return (
        <TouchableOpacity activeOpacity={0.4}
                          onPress={() => onPress(todo.id)} // TODO почему тут просто не ставить ссылку на TODO
                          onLongPress={(e) => onLongPress(e, todo.id)}
        >
            <View style={css.todo}>
                <Text>{todo.title}</Text>
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
        // borderColor: "#eee",
        borderColor: "red",
        borderRadius: 5,
        marginBottom: 5
    },
});


export default Todo;