/** @format */

import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Profile from "../screens/Tab/Profile";
import TabHome from "../screens/Tab/TabHome";
import Sensors from "../screens/Tab/Sensors";
import PlanDiseases from "../screens/Tab/PlanDiseases";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useColorMode } from "native-base";
import { BackHandler, Platform } from "react-native";
const Tab = createBottomTabNavigator();

const TabNavigator = () => {
	const { colorMode } = useColorMode();

	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => true
		);
		return () => backHandler.remove();
	}, []);
	return (
		<Tab.Navigator
			screenOptions={({ route }) => ({
				tabBarStyle: {
					backgroundColor: colorMode == "dark" ? "black" : "white",
					// paddingVertical: 10,
					height: Platform.OS == "android" ? 60 : 100,
					// alignItems: "center",
					justifyContent: "center",
				},

				// tabBarActiveBackgroundColor: colorMode === "dark" ? "red" : "white",
				// headerShown: false,
				tabBarActiveTintColor: "#52C112",
				tabBarIcon: ({ focused, color, size }) => {
					size = 30;
					let iconName: keyof typeof Ionicons.glyphMap = "add";
					let rn = route.name;
					if (rn === "TabHome") {
						iconName = focused ? "home" : "home-outline";
					}
					if (rn === "Sensors") {
						iconName = focused ? "thermometer-sharp" : "thermometer-outline";
					}
					if (rn === "Profile") {
						iconName = focused ? "person" : "person-outline";
					}
					if (rn === "PlanDiseases") {
						iconName = focused ? "heart" : "heart-outline";
					}

					return (
						// <Icon name="home" />
						<Ionicons
							// key={iconName}
							name={iconName}
							size={size}
							color={"#52C112"}
						/>
					);
				},
			})}>
			<Tab.Screen
				options={{
					title: "Home",
				}}
				name="TabHome"
				component={TabHome}
			/>
			<Tab.Screen
				options={{
					title: "Monitoring",
				}}
				name="Sensors"
				component={Sensors}
			/>
			<Tab.Screen
				name="PlanDiseases"
				options={{
					title: "Plan Diseases",
				}}
				component={PlanDiseases}
			/>
			<Tab.Screen name="Profile" component={Profile} />
		</Tab.Navigator>
	);
};

export default TabNavigator;
