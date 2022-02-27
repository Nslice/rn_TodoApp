import React from "react";
import AppLoading from "expo-app-loading";
import {bootstrap} from "src/bootstrap";
import {TodoState} from "src/context/todo/TodoState";
import {ScreenState} from "src/context/screen/ScreenState";
import {MainLayout} from "src/MainLayout";



const App = () => {
    const [isReady, setIsReady] = React.useState(false);

    if (!isReady) {
        return <AppLoading startAsync={bootstrap}
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



export default App;