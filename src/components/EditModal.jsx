import React from "react";
import {StyleSheet, View, Modal, TextInput, Alert, Keyboard} from "react-native";
import {Theme} from "src/theme";
import {AppButton} from "./ui/AppButton";
import {AppLoader} from "./ui/AppLoader";



export const EditModal = ({visible, value, onClose, onSave, isLoading}) => {
    const [title, setTitle] = React.useState(value);


    const saveHandler = async () => {
        Keyboard.dismiss();
        if (!title?.trim())
            Alert.alert("Error", "Add todo's title", null, {cancelable: true});
        else {
            await onSave(title);
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
                <Modal visible={isLoading} transparent={true}>
                    <AppLoader/>
                </Modal>
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
        width: "40%"
    }
});