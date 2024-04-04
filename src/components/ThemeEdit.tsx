/** @format */

import {
	Actionsheet,
	Box,
	HStack,
	Radio,
	Text,
	View,
	useColorMode,
} from "native-base";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
const ThemeEdit = ({ isOpen, onClose }: { isOpen: boolean; onClose: any }) => {
	const { colorMode, toggleColorMode } = useColorMode();
	const [value, setValue] = useState<string>(colorMode as string);
	return (
		<View>
			<Actionsheet isOpen={isOpen} onClose={onClose}>
				<Actionsheet.Content minHeight={"64"}>
					<Box w="100%" h={60} px={4} justifyContent="center">
						<Text
							fontSize="2xl"
							color="gray.500"
							_dark={{
								color: "gray.300",
							}}>
							Change Theme
						</Text>
					</Box>
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
				</Actionsheet.Content>
			</Actionsheet>
		</View>
	);
};

export default ThemeEdit;
