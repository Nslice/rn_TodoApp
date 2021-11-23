import React from "react";
import {StyleSheet, View, FlatList} from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";



const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
    return (
        <View style={css.container}>
            <AddTodo onSubmit={addTodo}/>
            <FlatList data={todos}
                      keyExtractor={item => item.id}
                      renderItem={x => <Todo todo={x.item}
                                             onLongPress={removeTodo}
                                             onPress={openTodo}/>}
            />
        </View>
    );
};

const css = StyleSheet.create({
    container: {
    }
});



export default MainScreen;