import React from "react";
import {Alert, StyleSheet, View} from "react-native";
import uuid from "react-native-uuid";
import MainScreen from "./src/screens/MainScreen";
import Navbar from "./src/components/Navbar";
import TodoScreen from "./src/screens/TodoScreen";



const App = () => {
    //<editor-fold desc="todos elements">
    const [todoId, setTodoId] = React.useState(null);
    const [todos, setTodos] = React.useState(initialTodosState);

    const addTodo = (title) => {
        setTodos(prevTodos => [
                ...prevTodos, {
                    id: uuid.v4(),
                    title: title
                }
            ]
        );
    };

    const removeTodo = (id) => {
        Alert.alert(
            "Removing",
            "Are you sure to remove todo",
            [{text: "Cancel"},
                {
                    text: "OK",
                    onPress: () => {
                        setTodoId(null);
                        setTodos(todos.filter(x => x.id !== id));
                    }
                }
            ],
            {cancelable: true}
        );
    };

    const updateTodo = (id, title) => {
        setTodos(prev => {
            return prev.map(x => {
                if (x.id === id)
                    x = {id, title};
                return x;
            });
        });
    };
    //</editor-fold desc="todos elements">


    let content = <MainScreen todos={todos}
                              addTodo={addTodo}
                              removeTodo={removeTodo}
                              openTodo={setTodoId}/>;
    if (todoId) {
        content = <TodoScreen goBack={() => setTodoId(null)}
                              todo={todos.find(x => x.id === todoId)}
                              removeTodo={removeTodo.bind(null, null)}
                              onSave={updateTodo}/>;
    }


    return (
        <View style={css.main}>
            <Navbar title="Todo App!"/>
            <View style={css.container}>
                {content}
            </View>
        </View>
    );
};


const initialTodosState = [
    {id: uuid.v4(), title: "@types"},
    {id: uuid.v4(), title: "вернуть"},
    {id: uuid.v4(), title: "dsexbnm"},
    {id: uuid.v4(), title: "react"},
    {id: uuid.v4(), title: "react-native"},
    {id: uuid.v4(), title: "node.js"},
    {id: uuid.v4(), title: "nest.js"},
    {id: uuid.v4(), title: "angular.js"},
];


const css = StyleSheet.create({
    main: {
        flex: 1
    },
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 20,
    },
});



export default App;