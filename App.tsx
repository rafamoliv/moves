import "react-native-gesture-handler";
import React from "react";
import Routes from "./src/routes";
import { AppLoading } from "expo";
import { StatusBar } from "expo-status-bar";
import { useFonts, Roboto_400Regular, Roboto_700Bold } from "@expo-google-fonts/roboto";
import { Orbitron_400Regular, Orbitron_700Bold } from "@expo-google-fonts/orbitron";

//Exports App
export default function App() {
  //Exports Fonts
  let [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
    Orbitron_400Regular,
    Orbitron_700Bold,
  });

  // Check if fonts are loaded before app
  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <>
        <StatusBar style="light" />
        <Routes />
      </>
    );
  }
}
