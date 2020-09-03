import React from "react";
import AppTabs from "./AppTabs";
import SearchStack from "./SearchStack";
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
