/** @format */

import { View, Text } from "react-native";
import React from "react";
import {
	Button,
	Input,
	ScrollView,
	Stack,
	TextField,
	VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";

const Register = () => {
	return (
		<ScrollView
			_light={{
				bg: "white",
			}}>
			<VStack padding="10" alignItems="center">
				<Stack
					_light={{
						bg: "primary.500",
						padding: "10",
						rounded: "full",
						shadow: "7",
					}}>
					<Ionicons name="person-add" size={100} color={"white"} />
				</Stack>
				<Stack w={"full"} mt="10">
					<Input
						py={"3"}
						borderWidth="0"
						backgroundColor="muted.100"
						// errorMessage="dev"
						fontSize="md"
						keyboardType="email-address"
						_input={{ height: "12", focusOutlineColor: "amber.200" }}
						focusOutlineColor="primary.100"
						// fontSize="md"
						placeholder="Username"
						InputLeftElement={
							<Ionicons
								style={{
									paddingHorizontal: 10,
								}}
								name="person"
								color="#52C112"
								size={20}
							/>
						}
					/>
				</Stack>
				<Stack w={"full"}>
					<Input
						_input={{
							h: "12",
						}}
						py={"3"}
						borderWidth="0"
						backgroundColor="muted.100"
						placeholder="password"
						// errorMessage="dev"
						fontSize="md"
						keyboardType="email-address"
						// _input={{ height: "12" }}
						focusOutlineColor="primary.100"
						InputLeftElement={
							<Ionicons
								style={{
									paddingHorizontal: 10,
								}}
								name="lock-closed"
								color="#52C112"
								size={20}
							/>
						}
						// placeholder="Password"
					/>
				</Stack>
				<Stack w={"full"}>
					<Input
						py={"3"}
						borderWidth="0"
						backgroundColor="muted.100"
						placeholder="email"
						// errorMessage="dev"
						fontSize="md"
						keyboardType="email-address"
						_input={{ height: "12" }}
						focusOutlineColor="primary.100"
						InputLeftElement={
							<Ionicons
								style={{
									paddingHorizontal: 10,
								}}
								name="lock-closed"
								color="#52C112"
								size={20}
							/>
						}
						// _input={{
						// 	h: "12",
						// }}
						// placeholder="Confirm Password"
					/>
				</Stack>

				<Stack w={"full"} marginTop="5">
					<Button rounded="full" w="full" size="lg">
						Register
					</Button>
				</Stack>
			</VStack>
		</ScrollView>
	);
};

export default Register;
