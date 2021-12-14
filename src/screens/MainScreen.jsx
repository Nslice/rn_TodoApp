import React from "react";
import {StyleSheet, View, FlatList, Image} from "react-native";
import {ScreenContext} from "../context/screen/screen.context";
import {TodoContext} from "../context/todo/todo.context";
import {AddTodo} from "../components/AddTodo";
import {Todo} from "../components/Todo";



export const MainScreen = () => {
    const {todos, addTodo, removeTodo} = React.useContext(TodoContext);
    const openTodo = React.useContext(ScreenContext).changeScreen;


    // TODO: https://stackoverflow.com/questions/67454966/whats-the-difference-between-functions-that-render-jsx-vs-declaring-components
    let content = <FlatList keyExtractor={item => item.id}
                            data={todos}
                            renderItem={x => <Todo todo={x.item}
                                                   onLongPress={removeTodo}
                                                   onPress={openTodo}/>}/>;

    if (!todos.length) {
        content = (
            <View style={css.imgWrap}>
                <Image style={css.img} source={require("../../assets/no-items.png")}/>
            </View>
        );

    }
    return (
        <View style={css.container}>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    );
};


const css = StyleSheet.create({
    container: {
        flex: 1
    },
    imgWrap: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
        height: 300
    },
    img: {
        width: "100%",
        height: "100%",
        resizeMode: "contain"
    }
});