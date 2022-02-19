import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import CarDetails from "../screens/CarDetails";
import Home from "../screens/Home";
import MyCars from "../screens/MyCars";
import Scheduling from "../screens/Scheduling";
import Confirmation from "../screens/Confirmation";
import SchedulingDetails from "../screens/SchedulingDetails";
import Splash from "../screens/Splash";
import SignIn from "../screens/SignIn";
import SignUpFirstStep from "../screens/SignUp/FirstStep";
import SignUpSecondStep from "../screens/SignUp/SecondStep";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="SignIn"
      screenOptions={{
        headerShown: false
      }}
    >
      <Screen name="SignUpFirstStep" component={SignUpFirstStep} />
      <Screen name="SignUpSecondStep" component={SignUpSecondStep} />
      <Screen name="SignIn" component={SignIn} />
      <Screen name="Home" component={Home} />
      <Screen name="MyCars" component={MyCars} />
      <Screen name="CarDetails" component={CarDetails} />
      <Screen name="Scheduling" component={Scheduling} />
      <Screen name="SchedulingDetails" component={SchedulingDetails} />
      <Screen name="Confirmation" component={Confirmation} />
    </Navigator>
  );
}
