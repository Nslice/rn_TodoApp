import {createReducer} from "@reduxjs/toolkit";
import {CHANGE_SCREEN} from "src/context/types";



const changeScreen = (state, action) => action.todoId;


export const screenReducer = createReducer(null, (builder) => {
    return builder
        .addCase(CHANGE_SCREEN, changeScreen)
        .addDefaultCase(state => state);
});