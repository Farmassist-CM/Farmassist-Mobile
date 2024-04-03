/** @format */

import React from "react";
import { HStack, Input, ScrollView, Text, VStack, View } from "native-base";
import { Ionicons } from "@expo/vector-icons";
const TabHome = () => {
	return (
		<ScrollView>
			<VStack justifyContent="space-between" p={8} h={250} bg={"blue.500"}>
				<Input
					placeholder="Enter city"
					InputLeftElement={
						<View padding={2}>
							<Ionicons name="search" size={25} />
						</View>
					}
					h={"12"}
					bg="white"
					backgroundColor={"white"}
					focusOutlineColor="white"
					_input={{
						bgColor: "white",
						// outlineStyle: "",
					}}
				/>

				<HStack
					style={
						{
							// gap: 20,
						}
					}
					justifyContent="space-around"
					alignItems="center">
					<View>
						<Text color="white">{"0° C"}</Text>
						<Text color="white">{"Fiell like 0° "}</Text>
					</View>
					<Ionicons name="sunny" color="white" size={70} />
				</HStack>
			</VStack>
			<View></View>
		</ScrollView>
	);
};

export default TabHome;
