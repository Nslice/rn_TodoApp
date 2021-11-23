import React from "react";
import {StyleSheet, Alert, View, TextInput, Button} from "react-native";
import {Theme} from "../theme";



const AddTodo = ({onSubmit}) => {
    const [text, setText] = React.useState("");

    const onPresHandler = () => {
        if (!text.trim())
            Alert.alert("Error", "Todo's title can't be empty");
        else {
            onSubmit(text.trim());
            setText("");
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
                <Button title="Add" onPress={onPresHandler}/>
            </View>
        </View>
    );
};


const css = StyleSheet.create({
    block: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 20,
    },
    input: {
        width: "80%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: Theme.MAIN_COLOR
    },
    button: {
        width: "20%",
        paddingLeft: 3
    }
});



export default AddTodo;