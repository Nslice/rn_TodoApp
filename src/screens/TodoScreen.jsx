import React from "react";
import {StyleSheet,View} from "react-native";
import {FontAwesome, AntDesign} from "@expo/vector-icons";
import {Theme} from "../theme";
import AppCard from "../components/ui/AppCard"
import AppTextBold from "../components/ui/AppTextBold";
import AppButton from "../components/ui/AppButton";
import EditModal from "../components/EditModal";



const TodoScreen = ({goBack, todo, removeTodo, onSave}) => {
    const [modalVisible, setModalVisible] = React.useState(false);

    return (
        <View>
            <EditModal visible={modalVisible}
                       value={todo.title}
                       onClose={() => setModalVisible(false)}
                       onSave={onSave.bind(null, todo.id)}/>

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
                    <AppButton onPress={goBack}
                               color={Theme.GREY_COLOR}>
                        <AntDesign name="back" size={20} color="white"/>
                    </AppButton>
                </View>
                <View style={css.bottomButton}>
                    <AppButton onPress={() => removeTodo(todo.id)}
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



export default TodoScreen;