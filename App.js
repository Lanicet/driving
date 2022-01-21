import React, {useState, useEffect} from "react";
import { StyleSheet } from "react-native";
import { AppLoading } from "expo";
import * as Font from "expo-font";

import Navigation from "./navigation";
import { Block, Text } from "./components";

 const App = () => {
 
  const [isLoadingComplete, setIsLoadingComplete]=useState(false);

  const _loadResourcesAsync = async () => {
 
     await Font.loadAsync({
        "Rubik-Regular": require("./assets/fonts/Rubik-Regular.ttf"),
        "Rubik-Black": require("./assets/fonts/Rubik-Black.ttf"),
        "Rubik-Bold": require("./assets/fonts/Rubik-Bold.ttf"),
        "Rubik-Italic": require("./assets/fonts/Rubik-Italic.ttf"),
        "Rubik-Light": require("./assets/fonts/Rubik-Light.ttf"),
        "Rubik-Medium": require("./assets/fonts/Rubik-Medium.ttf")
      })

    };

    useEffect(() => {
      _loadResourcesAsync
    }, [])
    const _handleLoadingError = (error) => {
      // In this case, you might want to report the error to your error
      // reporting service, for example Sentry
      console.warn(error);
    };
  

    return (
      <Block>
        <Navigation />
      </Block>
    );
}

export default App