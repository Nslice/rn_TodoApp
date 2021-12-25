import React from "react";
import {Alert} from "react-native";
import {Http} from "src/http";
import {
    FETCH_TODOS,
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR
} from "src/context/types";
import {ScreenContext} from "src/context/screen/screen.context";
import {TodoContext} from "./todo.context";
import {todoReducer, initialState} from "./todo.reducer";



const URL = "https://todo-app-52d81-default-rtdb.firebaseio.com";


export const TodoState = ({children}) => {
    const {changeScreen} = React.useContext(ScreenContext);
    const [state, dispatch] = React.useReducer(todoReducer, initialState);


    const fetchTodos = async () => {
        try {
            clearError();
            showLoader();

            const data = await Http.get(`${URL}/todos.json`) ?? [];
            const todos = Object.keys(data).map(x => ({id: x, ...data[x]}));
            dispatch({type: FETCH_TODOS, todos});
        } catch (err) {
            showError(err.message);
        } finally {
            hideLoader();
        }
    };


    const addTodo = async (title) => {
        try {
            clearError();

            const data = await Http.post(`${URL}/todos.json`, {title});
            dispatch({type: ADD_TODO, id: data.name, title});
        } catch (err) {
            showError(err.message);
        }
    };


    const updateTodo = async (id, title) => {
        try {
            clearError();
            showLoader();

            const data = await Http.patch(`${URL}/todos/${id}.json`, {title});
            dispatch({type: UPDATE_TODO, id, title: data.title})
        } catch (err) {
            showError(err.message);
        } finally {
            hideLoader();
        }
    };


    const removeTodo = (todo) => {
        Alert.alert(
            "Removing",
            `Are you sure to remove todo "${todo.title}"`,
            [
                {text: "Cancel"},
                {
                    text: "Delete",
                    onPress: async () => {
                        try {
                            clearError();
                            changeScreen(null);
                            await Http.delete(`${URL}/todos/${todo.id}.json`);
                            removeTodoDispatch(todo.id);
                        } catch (err) {
                            showError(err.message);
                        }
                    }
                }
            ],
            {cancelable: true}
        );
    };


    const removeTodoDispatch = (id) => dispatch({type: REMOVE_TODO, id});

    const showLoader = () => dispatch({type: SHOW_LOADER});
    const hideLoader = () => dispatch({type: HIDE_LOADER});

    const showError = (error) => dispatch({type: SHOW_ERROR, error});
    const clearError = () => dispatch({type: CLEAR_ERROR});


    const value = {
        todos: state.todos,
        isLoading: state.isLoading,
        error: state.error,
        fetchTodos,
        addTodo,
        updateTodo,
        removeTodo
    };

    return (
         <TodoContext.Provider value={value}>
             {children}
         </TodoContext.Provider>
    );
};