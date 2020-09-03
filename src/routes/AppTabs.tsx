import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AppStack from "./AppStack";

import Landing from "../pages/Landing";
import Favorites from "../pages/Favorites";

import { Ionicons } from "@expo/vector-icons";

const { Navigator, Screen } = createBottomTabNavigator();

//Exports Tabs Navigations
export default function AppTabs() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 50,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          display: "none",
        },
        inactiveTintColor: "#FFF",
        activeTintColor: "#b5905f",
      }}
    >
      <Screen
        name="Locaflix"
        component={Landing}
        options={{
          tabBarLabel: "Home",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-home" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="AppStack"
        component={AppStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-search" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Favorites"
        component={Favorites}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-heart" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
