import React from "react";
import {StyleSheet, View, Modal, TextInput, Alert} from "react-native";
import {Theme} from "../theme";
import AppButton from "./ui/AppButton";



const EditModal = ({visible, value, onClose, onSave}) => {
    const [title, setTitle] = React.useState(value);

    const saveHandler = () => {
        if (!title?.trim())
            Alert.alert("Error", "Add todo's title");
        else {
            onSave(title);
            onClose();
        }
    };

    const closeHandler = () => {
        setTitle(value);
        onClose();
    };


    return (
        <Modal visible={visible}
               animationType="slide"
               transparent={false}
               onRequestClose={closeHandler}>
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
                        <AppButton onPress={closeHandler}
                                color={Theme.DANGER_COLOR}>
                            Cancel
                        </AppButton>
                    </View>
                    <View style={css.button}>
                        <AppButton onPress={saveHandler}>
                            Save
                        </AppButton>
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