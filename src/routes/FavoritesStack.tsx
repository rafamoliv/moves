import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Descriptions from "../pages/Descriptions";
import Favorites from "../pages/Favorites";

const { Navigator, Screen } = createStackNavigator();

//Exports Stacks rtoutes
export default function FavoritesStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Favorites" component={Favorites} />
      <Screen name="Descriptions" component={Descriptions} />
    </Navigator>
  );
}
