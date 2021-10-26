import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CarDetails from "../screens/CarDetails";
import Home from "../screens/Home";
import MyCars from "../screens/MyCars";
import Scheduling from "../screens/Scheduling";
import SchedulingComplete from "../screens/SchedulingComplete";
import SchedulingDetails from "../screens/SchedulingDetails";
import Splash from "../screens/Splash";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Splash"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="Splash" component={Splash} />
      <Screen name="Home" component={Home} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="SchedulingComplete" component={SchedulingComplete} />
    </Navigator>
  );
}
