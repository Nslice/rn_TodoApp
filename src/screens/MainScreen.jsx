import React from "react";
import {StyleSheet, View, FlatList, Image} from "react-native";
import {ScreenContext} from "src/context/screen/screen.context";
import {TodoContext} from "src/context/todo/todo.context";
import {AddTodo} from "src/components/AddTodo";
import {Todo} from "src/components/Todo";



export const MainScreen = () => {
    const {todos, addTodo, removeTodo} = React.useContext(TodoContext);
    const openTodo = React.useContext(ScreenContext).changeScreen;

    const content = (!todos.length)
        ? <EmptyTodosImage/>
        : <ListTodos todos={todos} removeTodo={removeTodo} openTodo={openTodo}/>;

    return (
        <View style={css.container}>
            <AddTodo onSubmit={addTodo}/>
            {content}
        </View>
    );
};


const ListTodos = ({todos, removeTodo, openTodo}) => {
    return (
        <FlatList keyExtractor={item => item.id}
                  data={todos}
                  renderItem={x => <Todo todo={x.item}
                                         onLongPress={removeTodo}
                                         onPress={openTodo}/>}/>
    );
};


const EmptyTodosImage = () => {
    return (
        <View style={css.imgWrap}>
            <Image style={css.img} source={require("../../assets/no-items.png")}/>
        </View>
    );
}


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