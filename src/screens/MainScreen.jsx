import React from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";



const MainScreen = (props) => {
    return (
        <View style={css.container}>
            <AddTodo onSubmit={props.addTodo}/>
            <FlatList data={props.todos}
                      keyExtractor={item => item.id}
                      renderItem={x => <Todo todo={x.item}
                                             onLongPress={props.removeTodo}
                                             onPress={props.openTodo}/>}
            />
        </View>
    );
}

const css = StyleSheet.create({
    container: {
    }
});



export default MainScreen;