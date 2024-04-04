/** @format */

import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyRouteStackParamList } from "./interfaces/natigationInterfaces";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Splash from "./screens/Splash";
import Register from "./screens/Register";
import TabNavigator from "./components/TabNavigator";
import ScanBarCode from "./screens/ScanBarCode";
import Settings from "./screens/Settings";
import EditProfile from "./screens/EditProfile";

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
				<Stack.Screen name="Register" component={Register} />
				<Stack.Screen
					name="Tab"
					component={TabNavigator}
					options={{
						headerShown: false,
						gestureEnabled: false,
					}}
				/>
				<Stack.Screen name="CodeBarScan" component={ScanBarCode} />
				<Stack.Screen name="Settings" component={Settings} />
				<Stack.Screen name="EditProfile" component={EditProfile} />
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
