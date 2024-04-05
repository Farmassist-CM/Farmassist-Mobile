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
import ChoosePreferences from "./screens/ChoosePreferences";
import useSessionStore from "./store/SessionStore";

const Stack = createNativeStackNavigator<MyRouteStackParamList>();
const AppRouter = () => {
	const { session } = useSessionStore();
	return (
		<NavigationContainer>
			<Stack.Navigator>
				{session == null && (
					<>
						<Stack.Group
							screenOptions={{
								headerShown: false,
								animation: "slide_from_left",
								headerBackButtonMenuEnabled: false,
								gestureEnabled: false,
							}}>
							<Stack.Screen name="Splash" component={Splash} />
							<Stack.Screen
								name="ChoosePreferences"
								component={ChoosePreferences}
							/>
							<Stack.Screen name="Home" component={Home} />
							<Stack.Screen name="Login" component={Login} />
						</Stack.Group>
						<Stack.Screen name="Register" component={Register} />
					</>
				)}
				{session !== null && (
					<>
						<Stack.Screen
							name="Tab"
							component={TabNavigator}
							options={{
								headerShown: false,
								gestureEnabled: false,
							}}
						/>
						<Stack.Group
							screenOptions={{
								headerBackTitle: "Back",
							}}>
							<Stack.Screen name="CodeBarScan" component={ScanBarCode} />
							<Stack.Screen name="Settings" component={Settings} />
							<Stack.Screen
								options={{
									animation: "fade_from_bottom",
								}}
								name="EditProfile"
								component={EditProfile}
							/>
						</Stack.Group>
					</>
				)}
			</Stack.Navigator>
		</NavigationContainer>
	);
};

export default AppRouter;
