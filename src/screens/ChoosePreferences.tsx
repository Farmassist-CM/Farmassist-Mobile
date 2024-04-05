/** @format */

import {
	Button,
	Divider,
	HStack,
	Radio,
	ScrollView,
	StatusBar,
	Text,
	VStack,
	useColorMode,
} from "native-base";
import i18n from "../i18n";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../interfaces/natigationInterfaces";
const ChoosePreferences = () => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [value, setValue] = useState<string>(colorMode as string);
	const [lang, setlang] = useState<string>(i18n.language);
	const navigation = useNavigation<MyNavigation>();
	return (
		<ScrollView
			_dark={{
				bgColor: "dark.200",
			}}
			// mt={60}
			pt={60}>
			<StatusBar
				barStyle={colorMode == "dark" ? "light-content" : "dark-content"}
			/>
			<Text fontWeight="bold" textAlign="center" fontSize={"2xl"}>
				Choose Preferences
			</Text>
			<VStack p={5}>
				<Text fontWeight="bold" fontSize="xl" my={5}>
					Theme
				</Text>
				<VStack>
					<Radio.Group
						name="myRadioGroup"
						accessibilityLabel="favorite number"
						value={value}
						onChange={(nextValue) => {
							setValue(nextValue);
							toggleColorMode();
						}}>
						<HStack
							style={{
								gap: 10,
							}}>
							<Radio value="dark" my={1}>
								<Ionicons
									color={colorMode == "dark" ? "white" : "black"}
									size={20}
									name="moon"
								/>{" "}
								Dark
							</Radio>
							<Radio value="light" my={1}>
								<Ionicons
									color={colorMode == "dark" ? "white" : "black"}
									size={20}
									name="sunny"
								/>
								Light
							</Radio>
							{/* <Radio value="default" my={1}>
								<Ionicons size={20} name="phone-portrait" /> Default
							</Radio> */}
						</HStack>
					</Radio.Group>
				</VStack>
				<Divider my={5} />
				<VStack>
					<Text fontWeight="bold" fontSize="xl" my={4}>
						Language
					</Text>
					<Radio.Group
						name="myRadioGroup"
						accessibilityLabel="favorite number"
						value={lang}
						onChange={(nextValue) => {
							setlang(nextValue);
							i18n.changeLanguage(nextValue);
						}}>
						<HStack
							style={{
								gap: 10,
							}}>
							<Radio value="en" my={1}>
								English
							</Radio>
							<Radio value="fr" my={1}>
								Français
							</Radio>
							{/* <Radio value="default" my={1}>
								<Ionicons size={20} name="phone-portrait" /> Default
							</Radio> */}
						</HStack>
					</Radio.Group>
				</VStack>
			</VStack>
			<HStack p={5}>
				<Button
					onPress={() => {
						navigation.replace("Home");
					}}
					w="full"
					size="lg"
					rounded="full">
					{i18n.t("continue")}
				</Button>
			</HStack>
		</ScrollView>
	);
};

export default ChoosePreferences;
