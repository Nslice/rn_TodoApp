import React from "react";
import {Alert} from "react-native";
import uuid from "react-native-uuid";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../types";
import {TodoContext} from "./todo.context";
import {ScreenContext} from "../screen/screen.context";
import {todoReducer} from "./todo.reducer";



const initialState = {
    todos: [
        {id: uuid.v4(), title: "@types in Webstorm"},
        {id: uuid.v4(), title: "выучить React"},
        {id: uuid.v4(), title: "выучить React Native"},
        {id: uuid.v4(), title: "выучить ASP.NET MVC"},
        {id: uuid.v4(), title: "node.js"},
        {id: uuid.v4(), title: "nest.js"},
    ]
};


export const TodoState = ({children}) => {
    const {changeScreen} = React.useContext(ScreenContext);
    const [state, dispatch] = React.useReducer(todoReducer, initialState);

    const addTodo = (title) => dispatch({type: ADD_TODO, title});
    const removeTodoDispatch = (id) => dispatch({type: REMOVE_TODO, id});
    const updateTodo = (id, title) => dispatch({type: UPDATE_TODO, id, title});


    const removeTodo = (todo) => {
        Alert.alert(
            "Removing",
            `Are you sure to remove todo "${todo.title}"`,
            [{text: "Cancel"},
                {
                    text: "OK",
                    onPress: () => {
                        changeScreen(null);
                        removeTodoDispatch(todo.id);
                    }
                }
            ],
            {cancelable: true}
        );
    };

    const value = {
        todos: state.todos,
        addTodo,
        removeTodo,
        updateTodo
    };


    return (
         <TodoContext.Provider value={value}>
             {children}
         </TodoContext.Provider>
    );
};