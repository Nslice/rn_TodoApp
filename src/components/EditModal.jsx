import React, {useState} from "react";
import {StyleSheet, View, Modal, Button, TextInput, Alert} from "react-native";
import {Theme} from "../theme";



const EditModal = ({visible, value, onClose, onSave}) => {
    const [title, setTitle] = useState(value);

    const saveHandler = () => {
        if (!title?.trim())
            Alert.alert("Error", "Add todo's title");
        else {
            onSave(title);
            onClose();
        }
    };


    return (
        <Modal visible={visible}
               animationType="slide"
               transparent={false}
               onRequestClose={onClose}>
            <View style={css.wrap}>
                <TextInput style={css.input}
                           value={title}
                           onChangeText={setTitle}
                           autoCorrect={false}
                           autoCapitalize="none"
                           maxLength={300}
                           multiline
                           placeholder="Enter title"
                           keyboardType="default"/>
                <View style={css.buttons}>
                    <View style={css.button}>
                        <Button title="Cancel"
                                onPress={onClose}
                                color={Theme.DANGER_COLOR}/>
                    </View>
                    <View style={css.button}>
                        <Button title="Save" onPress={saveHandler}/>
                    </View>
                </View>
            </View>
        </Modal>
    );
};


const css = StyleSheet.create({
    wrap: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        width: "80%",
        padding: 10,
        borderStyle: "solid",
        borderBottomWidth: 2,
        borderColor: Theme.MAIN_COLOR
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-around",
        width: "80%",
        marginTop: 10
    },
    button: {
        width: "45%"
    }
});



export default EditModal;