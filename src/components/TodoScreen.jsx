import React from "react";
import {Button, StyleSheet, Text, View} from "react-native";
import {Theme} from "../theme";
import AppCard from "./ui/AppCard"



const TodoScreen = ({goBack, todo}) => {
    return (
        <View>
            <AppCard style={css.card}>
                <Text style={css.title}>{todo.title}</Text>
                <Button title="Edit"/>
            </AppCard>

            <View style={css.buttons}>
                <View style={css.button}>
                    <Button title="Back"
                            color={Theme.GREY_COLOR}
                            onPress={goBack}/>
                </View>
                <View style={css.button}>
                    <Button title="Delete"
                            color={Theme.DANGER_COLOR}
                            onPress={() => {
                            }}/>
                </View>
            </View>
        </View>
    );
}


const css = StyleSheet.create({
    card: {
        marginBottom: 20,
        padding: 15
    },
    title: {
        fontSize: 20
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        width: "40%"
    }
});



export default TodoScreen;