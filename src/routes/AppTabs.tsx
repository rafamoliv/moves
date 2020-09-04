import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Landing from "../pages/Landing";
import SearchStack from "./SearchStack";
import FavoritesStack from "./FavoritesStack";
import Settings from "../pages/Settings";

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
        name="SearchStack"
        component={SearchStack}
        options={{
          tabBarLabel: "Search",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-search" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="FavoritesStack"
        component={FavoritesStack}
        options={{
          tabBarLabel: "Favorites",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-heart" size={size} color={color} />;
          },
        }}
      />
      <Screen
        name="Settings"
        component={Settings}
        options={{
          tabBarLabel: "Settings",
          tabBarIcon: ({ color, size }) => {
            return <Ionicons name="ios-settings" size={size} color={color} />;
          },
        }}
      />
    </Navigator>
  );
}
