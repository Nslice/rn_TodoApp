import React from "react";
import {StyleSheet, Text, View, FlatList} from "react-native";
import uuid from "react-native-uuid";
import MainScreen from "./src/screens/MainScreen";
import Navbar from "./src/components/Navbar";
import TodoScreen from "./src/components/TodoScreen";


const App = () => {
    console.log("Rendering App");

    const [todoId, setTodoId] = React.useState(null);


    //<editor-fold desc="todos elements">

    const [todos, setTodos] = React.useState([
        {id: uuid.v4(), title: "@types"},
        {id: uuid.v4(), title: "вернуть"},
    ]);

    const addTodo = (title) => {
        setTodos(prevTodos => [
                ...prevTodos, {
                    id: uuid.v4(),
                    title: title
                }
            ]
        );
    };

    const removeTodo = (e, id) => {
        setTodos(todos.filter(x => x.id !== id));
    };

    //</editor-fold desc="todos elements">


    let content = <MainScreen todos={todos}
                              addTodo={addTodo}
                              removeTodo={removeTodo}
                              openTodo={setTodoId}/>;

    console.log(`todoId = ${todoId}`);

    if (todoId) {
       content = <TodoScreen goBack={() => setTodoId(null)}
                             todo={todos.find(x => x.id === todoId)}/>;
    }

    return (
        <View>
            <Navbar title="Todo App!"/>
            <View style={css.container}>
                {content}
            </View>
        </View>
    );
}

const css = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
    text: {}
});


export default App;