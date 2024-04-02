/** @format */

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyRouteStackParamList } from "./interfaces/natigationInterfaces";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Splash from "./screens/Splash";

const Stack = createNativeStackNavigator<MyRouteStackParamList>();
const AppRouter = () => {
	return (
		<NavigationContainer>
			<Stack.Navigator>
				<Stack.Group
					screenOptions={{
						headerShown: false,
						animation: "slide_from_left",
						headerBackButtonMenuEnabled: false,
						gestureEnabled: false,
					}}>
					<Stack.Screen name="Splash" component={Splash} />
					<Stack.Screen name="Home" component={Home} />
					<Stack.Screen name="Login" component={Login} />
				</Stack.Group>
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
