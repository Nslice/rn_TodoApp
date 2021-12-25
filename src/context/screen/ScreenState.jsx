import React from "react";
import {CHANGE_SCREEN} from "src/context/types";
import {ScreenContext} from "./screen.context";
import {screenReducer} from "./screen.reducer";



export const ScreenState = ({children}) => {
    const [state, dispatch] = React.useReducer(screenReducer, null);

    const changeScreen = (todoId) => dispatch({type: CHANGE_SCREEN, todoId});

    const value = {
        todoId: state,
        changeScreen
    };

    return (
        <ScreenContext.Provider value={value}>
            {children}
        </ScreenContext.Provider>
    );
};