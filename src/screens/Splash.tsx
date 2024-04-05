/** @format */

import { View, Text, Image } from "react-native";
import React, { useEffect } from "react";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../interfaces/natigationInterfaces";
import { VStack } from "native-base";
import { IMAGES } from "../utils/images";

const Splash = () => {
	const navigation = useNavigation<MyNavigation>();
	useEffect(() => {
		setTimeout(() => {
			navigation.replace("ChoosePreferences");
		}, 2000);
	}, []);
	return (
		<VStack
			display={"flex"}
			justifyContent="center"
			alignItems={"center"}
			height="full">
			<Image source={IMAGES.icon} style={{ width: 200, height: 200 }} />
		</VStack>
	);
};

export default Splash;
