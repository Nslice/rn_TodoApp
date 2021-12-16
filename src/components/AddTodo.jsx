import React from "react";
import {StyleSheet, Alert, View, TextInput, Keyboard} from "react-native";
import {AntDesign} from "@expo/vector-icons";
import {Theme} from "src/theme";



export const AddTodo = ({onSubmit}) => {
    const [text, setText] = React.useState("");

    const onPresHandler = () => {
        if (!text.trim())
            Alert.alert("Error", "Todo's title can't be empty");
        else {
            onSubmit(text.trim());
            setText("");
            Keyboard.dismiss();
        }
    };

    return (
        <View style={css.block}>
            <TextInput style={css.input}
                       value={text}
                       onChangeText={setText}
                       autoCorrect={false}
                       autoCapitalize="none"
                       maxLength={60}
                       placeholder="Enter title"
                       keyboardType="default"/>
            <View style={css.button}>
                <AntDesign.Button name="pluscircleo" onPress={onPresHandler}>
                    Add
                </AntDesign.Button>
            </View>
        </View>
    );
};


const css = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20
    },
    input: {
        flex: 1,
        padding: 10,
        marginRight: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: Theme.MAIN_COLOR
    },
    button: {
        flexBasis: 80
    }
});