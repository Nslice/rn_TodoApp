import React from "react";
import {StyleSheet, View, FlatList, Image} from "react-native";
import {ScreenContext} from "src/context/screen/screen.context";
import {TodoContext} from "src/context/todo/todo.context";
import {Theme} from "src/theme";
import {AppLoader} from "src/components/ui/AppLoader";
import {AppText} from "src/components/ui/AppText";
import {AppButton} from "src/components/ui/AppButton";
import {AddTodo} from "src/components/AddTodo";
import {Todo} from "src/components/Todo";



export const MainScreen = () => {
    const openTodo = React.useContext(ScreenContext).changeScreen;
    const {todos, fetchTodos, isLoading, error, addTodo, removeTodo} = React.useContext(TodoContext);

    const loadTodos = React.useCallback(async () => await fetchTodos(), [fetchTodos]);
    React.useEffect(() => {
        loadTodos();
    }, []);

    const content = (!todos.length)
        ? <EmptyTodosImage/>
        : <ListTodos todos={todos} removeTodo={removeTodo} openTodo={openTodo}/>;


    if (isLoading)
        return <AppLoader/>

    if (error) {
        return (
            <View style={css.center}>
                <AppText style={css.error}>{error}</AppText>
                <AppButton onPress={loadTodos}>Repeat</AppButton>
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


const ListTodos = ({todos, removeTodo, openTodo}) => {
    return (
        <FlatList keyExtractor={x => x.id}
                  data={todos}
                  renderItem={x => <Todo todo={x.item}
                                         onLongPress={removeTodo}
                                         onPress={openTodo}/>}/>
    );
};


const EmptyTodosImage = () => {
    return (
        <View style={css.imgWrap}>
            <Image style={css.img} source={require("assets/no-items.png")}/>
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
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    error: {
        fontSize: 20,
        color: Theme.DANGER_COLOR
    }
});