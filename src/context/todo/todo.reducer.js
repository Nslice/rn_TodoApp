import uuid from "react-native-uuid";
import {ADD_TODO, REMOVE_TODO, UPDATE_TODO} from "../types";



const handlers = {
    [ADD_TODO]: (state, {title}) => ({
        ...state,
        todos: [
            ...state.todos, {
                id: uuid.v4(),
                title
            }
        ]
    }),

    [REMOVE_TODO]: (state, {id}) => ({
        ...state,
        todos: state.todos.filter(x => x.id !== id)
    }),

    [UPDATE_TODO]: (state, {id, title}) => ({
        ...state,
        todos: state.todos.map(x => {
            if (x.id === id)
                x = {...x, title: title};
            return x;
        })
    }),

    DEFAULT: (state) => state
}


export const todoReducer = (state, action) => {
    const handler = handlers[action.type] ?? handlers.DEFAULT;
    return handler(state, action);
};