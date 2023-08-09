import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Register from "../screens/register";
import Login from "../screens/login";
import Home from "../screens/home";

const Stack = createNativeStackNavigator();

function Rotas() {

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="register" screenOptions={{headerShown: false}}>
            <Stack.Screen name="register" component={Register} />
            <Stack.Screen name="login" component={Login} />
            <Stack.Screen name="home" component={Home} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
export default Rotas;