/** @format */

import React from "react";
import {
	HStack,
	IconButton,
	Pressable,
	ScrollView,
	Text,
	View,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import Nothing from "../../components/Nothing";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../../interfaces/natigationInterfaces";

const Sensors = () => {
	const navigation = useNavigation<MyNavigation>();
	return (
		<ScrollView>
			<View p={10} h={200} bg={"blue.500"}>
				<HStack display="flex" flexDirection="row" justifyContent={"flex-end"}>
					<Pressable onPress={() => navigation.push("CodeBarScan")}>
						<Ionicons name="qr-code-outline" color="white" size={40} />
					</Pressable>
				</HStack>
			</View>
			<Nothing />
		</ScrollView>
	);
};

export default Sensors;
