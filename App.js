import React from "react";
import MainMenu from "./MainMenu";
import About from './src/About';
import ZakaCalculator from './src/ZakaCalculator';
import BmiCalculator from './src/BmiCalculator';

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main Menu">
        <Stack.Screen name="Main Menu" component={MainMenu} />
        <Stack.Screen
          name="Zaka Calculator"
          component={ZakaCalculator}
          options={{ title: "Zaka Calculator" }}
        />
        <Stack.Screen
          name="BMI Calculator"
          component={BmiCalculator}
          options={{ title: "BMI Calculator" }}
        />
        <Stack.Screen
          name="About"
          component={About}
          options={{ title: "About" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;