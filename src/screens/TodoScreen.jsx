import React from "react";
import {StyleSheet, View} from "react-native";
import {FontAwesome, AntDesign} from "@expo/vector-icons";
import {ScreenContext} from "../context/screen/screen.context";
import {TodoContext} from "../context/todo/todo.context";
import {Theme} from "../theme";
import {AppCard} from "../components/ui/AppCard"
import {AppTextBold} from "../components/ui/AppTextBold";
import {AppButton} from "../components/ui/AppButton";
import {EditModal} from "../components/EditModal";



export const TodoScreen = () => {
    const {todos, removeTodo, updateTodo} = React.useContext(TodoContext);
    const {changeScreen, todoId} = React.useContext(ScreenContext);
    const todo = todos.find(x => x.id === todoId)

    const [modalVisible, setModalVisible] = React.useState(false);


    return (
        <View>
            <EditModal visible={modalVisible}
                       value={todo.title}
                       onClose={() => setModalVisible(false)}
                       onSave={updateTodo.bind(null, todo.id)}/>

            <AppCard style={css.card}>
                <View style={css.editField}>
                    <AppTextBold style={css.title}>{todo.title}</AppTextBold>
                </View>
                <View style={css.editButton}>
                    <AppButton onPress={() => setModalVisible(true)}>
                        <FontAwesome name="edit" size={20}/>
                    </AppButton>
                </View>
            </AppCard>

            <View style={css.bottomButtons}>
                <View style={css.bottomButton}>
                    <AppButton onPress={() => changeScreen(null)}
                               color={Theme.GREY_COLOR}>
                        <AntDesign name="back" size={20} color="white"/>
                    </AppButton>
                </View>
                <View style={css.bottomButton}>
                    <AppButton onPress={() => removeTodo(todo)}
                               color={Theme.DANGER_COLOR}>
                        <FontAwesome name="remove" size={20} color="white"/>
                    </AppButton>
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
        flex: 1
    },
    editButton: {
        flexBasis: 80,
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