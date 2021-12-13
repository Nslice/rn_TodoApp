import React from "react";
import {StyleSheet, View, FlatList, Image} from "react-native";
import AddTodo from "../components/AddTodo";
import Todo from "../components/Todo";



const MainScreen = ({todos, addTodo, removeTodo, openTodo}) => {
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



export default MainScreen;