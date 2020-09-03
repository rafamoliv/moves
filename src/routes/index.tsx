import React from "react";
import AppTabs from "./AppTabs";
import AppStack from "./AppStack";
import { NavigationContainer, DarkTheme } from "@react-navigation/native";

// Exports all routes
export default function Routes() {
  return (
    <NavigationContainer theme={DarkTheme}>
      {/* Control the navigation bottom tabs */}
      <AppTabs />
    </NavigationContainer>
  );
}
