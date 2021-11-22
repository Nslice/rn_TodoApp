import React from "react";
import {StyleSheet, Alert, View, TextInput, Button} from "react-native";



const AddTodo = (props) => {
    const [text, setText] = React.useState("");

    const onPresHandler = () => {
        if (!text.trim()) {
            Alert.alert("Error", "Add todo's title");
        } else {
            props.onSubmit(text.trim());
            setText("");
        }
    };

    return (
        <View style={css.block}>
            <TextInput input style={css.input}
                       value={text}
                       onChangeText={setText}
                       autoCorrect={false}
                       autoCapitalize="none"
                       placeholder="Enter title"
                       keyboardType="default"
            />
            <Button style={css.button}
                    title="Add"
                    onPress={onPresHandler}
            />
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
        borderColor: "#3949ab"
    },
    button: {
    }
});



export default AddTodo;