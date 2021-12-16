import React from "react";
import AppLoading from 'expo-app-loading';
import * as Font from "expo-font";
import {TodoState} from "src/context/todo/TodoState";
import {ScreenState} from "src/context/screen/ScreenState";
import {MainLayout} from "src/MainLayout";



const App = () => {
    const [isReady, setIsReady] = React.useState(false);

    if (!isReady) {
        return <AppLoading startAsync={loadApp}
                           onFinish={() => setIsReady(true)}
                           onError={console.error}/>;
    }


    return (
        <ScreenState>
            <TodoState>
                <MainLayout/>
            </TodoState>
        </ScreenState>
    );
};



const loadApp = async () => {
    await Font.loadAsync({
        "roboto-regular": require("./assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("./assets/fonts/Roboto-Bold.ttf")
    });
};



export default App;