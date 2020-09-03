import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Search from "../pages/Search";
import Descriptions from "../pages/Descriptions";

const { Navigator, Screen } = createStackNavigator();

//Exports Stacks rtoutes
export default function AppStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="Search" component={Search} />
      <Screen name="Descriptions" component={Descriptions} />
    </Navigator>
  );
}
