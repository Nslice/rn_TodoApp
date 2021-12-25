import {createReducer} from "@reduxjs/toolkit";
import {
    ADD_TODO,
    REMOVE_TODO,
    UPDATE_TODO,
    FETCH_TODOS,
    SHOW_LOADER,
    HIDE_LOADER,
    SHOW_ERROR,
    CLEAR_ERROR
} from "src/context/types";



/**
 * @typedef Todo
 * @property {!string} id
 * @property {!string} title
 */
/**
 * @property {!Todo[]} todos
 * @property {boolean} isLoading
 * @property {?string} error
 */
const initialState = {
    todos: [],
    isLoading: false,
    error: null
};


const fetchTodos = (state, action) => ({...state, todos: action.todos});

const addTodo = (state, action) => {
    return {
        ...state,
        todos: [
            ...state.todos, {
                id: action.id,
                title: action.title
            }
        ]
    };
};

const updateTodo = (state, action) => {
    return {
        ...state,
        todos: state.todos.map(x => {
            if (x.id === action.id)
                x = {...x, title: action.title};
            return x;
        })
    };
};

const removeTodo = (state, action) => {
    return {
        ...state,
        todos: state.todos.filter(x => x.id !== action.id)
    };
};

const showLoader = (state, action) => ({...state, isLoading: true});

const hideLoader = (state, action) => ({...state, isLoading: false});

const showError = (state, action) =>  ({...state, error: action.error});

const clearError = (state, action) => ({...state, error: null});



export const todoReducer = createReducer(null, (builder) => {
    return builder
        .addCase(FETCH_TODOS, fetchTodos)
        .addCase(ADD_TODO, addTodo)
        .addCase(UPDATE_TODO, updateTodo)
        .addCase(REMOVE_TODO, removeTodo)
        .addCase(SHOW_LOADER, showLoader)
        .addCase(HIDE_LOADER, hideLoader)
        .addCase(SHOW_ERROR, showError)
        .addCase(CLEAR_ERROR, clearError)
        .addDefaultCase(state => state);
});

export {initialState};