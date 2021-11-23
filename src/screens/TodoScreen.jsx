import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Theme} from "../theme";
import AppCard from "../components/ui/AppCard"
import EditModal from "../components/EditModal";



const TodoScreen = ({goBack, todo, removeTodo, onSave}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>
            <EditModal visible={modalVisible}
                       value={todo.title}
                       onClose={() => setModalVisible(false)}
                       onSave={(text) => onSave(todo.id, text)}/>

            <AppCard style={css.card}>
                <View style={css.editField}>
                    <Text style={css.title}>{todo.title}</Text>
                </View>
                <View style={css.editButton}>
                    <Button title="Edit" onPress={() => setModalVisible(true)}/>
                </View>
            </AppCard>

            <View style={css.bottomButtons}>
                <View style={css.bottomButton}>
                    <Button title="Back"
                            color={Theme.GREY_COLOR}
                            onPress={goBack}/>
                </View>
                <View style={css.bottomButton}>
                    <Button title="Delete"
                            color={Theme.DANGER_COLOR}
                            onPress={() => removeTodo(todo.id)}/>
                </View>
            </View>
        </View>
    );
};


const css = StyleSheet.create({
    card: {
        marginBottom: 20,
        padding: 15,
    },
    title: {
        fontSize: 20
    },
    editField: {
        width: "80%"
    },
    editButton: {
        width: "20%",
        paddingLeft: 5
    },
    bottomButtons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    bottomButton: {
        width: "40%"
    }
});



export default TodoScreen;