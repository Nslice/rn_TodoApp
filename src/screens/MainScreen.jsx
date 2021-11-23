import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";


const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
    return (
        <View style={css.container}>
            <AddTodo onSubmit={addTodo}/>
            <FlatList keyExtractor={item => item.id}
                      data={todos}
                      renderItem={x => <Todo todo={x.item}
                                             onLongPress={removeTodo}
                                             onPress={openTodo}/>}/>
        </View>
    );
};

const css = StyleSheet.create({
    container: {
        flex: 1
    }
});


export default MainScreen;