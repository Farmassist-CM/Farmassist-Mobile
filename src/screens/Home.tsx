/** @format */

import { SafeAreaView, Image } from "react-native";
import React from "react";
import { OnboardFlow } from "react-native-onboard";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../interfaces/natigationInterfaces";
import { IMAGES } from "../utils/images";

import { View } from "native-base";
const Home = () => {
	const navigation = useNavigation<MyNavigation>();
	const onDone = () => {
		// navigation.popToTop();
		navigation.navigate("Login");
	};
	return (
		<View marginTop={100}>
			<OnboardFlow
				titleStyle={{
					color: "green",
					fontSize: 25,
				}}
				// primaryColor="red"
				// showDismissButton

				paginationColor="green"
				paginationSelectedColor="lime"
				onDone={onDone}
				primaryButtonStyle={{
					backgroundColor: "green",
				}}
				pages={[
					{
						title: "Welcome to my app",
						subtitle:
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam quaerat sint incidunt laudantium, commodi velit voluptates? Fugit, cum est?",
						imageComponent: (
							<Image
								alt=""
								source={IMAGES.phone}
								style={{ width: 400, height: 400 }}
							/>
						),
					},
					{
						title: "Page 2 header",
						subtitle:
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam quaerat sint incidunt laudantium, commodi velit voluptates? Fugit, cum est?",
						imageComponent: (
							<Image
								alt=""
								source={IMAGES.plan}
								style={{ width: 400, height: 400 }}
							/>
						),
					},
					{
						title: "Page 2 header",
						subtitle:
							"Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti ullam quaerat sint incidunt laudantium, commodi velit voluptates? Fugit, cum est?",
						imageComponent: (
							<Image
								alt=""
								source={IMAGES.persgood}
								style={{ width: 400, height: 400 }}
							/>
						),
					},
				]}
				type={"fullscreen"}
			/>
		</View>
	);
};

export default Home;
