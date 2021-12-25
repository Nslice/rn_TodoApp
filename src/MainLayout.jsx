import React from "react";
import {StyleSheet, View} from "react-native";
import {ScreenContext} from "./context/screen/screen.context"
import {Navbar} from "./components/Navbar";
import {MainScreen} from "./screens/MainScreen";
import {TodoScreen} from "./screens/TodoScreen";



export const MainLayout = () => {
    const {todoId} = React.useContext(ScreenContext);

    return (
        <View style={css.main}>
            <Navbar title="Todo App!"/>
            <View style={css.container}>
                {todoId ? <TodoScreen/> : <MainScreen/>}
            </View>
        </View>
    );
};


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