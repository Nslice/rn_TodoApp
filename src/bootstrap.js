import * as Font from "expo-font";



export const bootstrap = async () => {
    await Font.loadAsync({
        "roboto-regular": require("assets/fonts/Roboto-Regular.ttf"),
        "roboto-bold": require("assets/fonts/Roboto-Bold.ttf")
    });
};