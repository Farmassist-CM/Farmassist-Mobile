/** @format */

import {
	Avatar,
	Button,
	HStack,
	Icon,
	Input,
	KeyboardAvoidingView,
	Pressable,
	ScrollView,
	Text,
	VStack,
} from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
const EditProfile = () => {
	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
			<ScrollView
				_dark={{
					bg: "dark.200",
				}}>
				<Text my={25} fontWeight="bold" textAlign="center" fontSize="3xl">
					Edit Profile
				</Text>
				<HStack justifyContent={"center"} position="relative">
					<Avatar
						bg="lightBlue.400"
						source={{
							uri: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
						}}
						size={200}>
						<Avatar.Badge
							bg="primary.500"
							size={"16"}
							justifyContent={"center"}
							alignItems={"center"}>
							<Pressable>
								<Icon color={"white"} as={Ionicons} size={"2xl"} name="image" />
							</Pressable>
						</Avatar.Badge>
					</Avatar>
				</HStack>
				<VStack p={25}>
					<Input
						shadow="2"
						py={"3"}
						borderWidth="0"
						backgroundColor="muted.200"
						placeholder="email"
						value="@developer"
						// errorMessage="dev"
						bg={"gray.100"}
						fontSize="md"
						keyboardType="email-address"
						_dark={{
							_input: {
								bg: "dark.100",
							},
						}}
						_input={{
							height: "12",
						}}
						focusOutlineColor="primary.100"
						editable={false}
					/>

					<Input
						py={"3"}
						mt={3}
						borderWidth="0"
						backgroundColor="muted.100"
						placeholder="email"
						// value="@developer"
						// errorMessage="dev"
						_dark={{
							_input: {
								bg: "dark.100",
							},
						}}
						bg={"gray.100"}
						fontSize="md"
						keyboardType="email-address"
						_input={{ height: "12", bg: "gray.200" }}
						focusOutlineColor="primary.100"
					/>

					<Input
						py={"3"}
						mt={3}
						borderWidth="0"
						backgroundColor="muted.100"
						placeholder="Name"
						// value="@developer"
						// errorMessage="dev"
						_dark={{
							_input: {
								bg: "dark.100",
							},
						}}
						bg={"gray.100"}
						fontSize="md"
						keyboardType="email-address"
						_input={{ height: "12", bg: "gray.200" }}
						focusOutlineColor="primary.100"
					/>
					<Input
						py={"3"}
						mt={3}
						borderWidth="0"
						backgroundColor="muted.100"
						placeholder="Surname"
						// value="@developer"
						// errorMessage="dev"
						_dark={{
							_input: {
								bg: "dark.100",
							},
						}}
						bg={"gray.100"}
						fontSize="md"
						keyboardType="default"
						_input={{ height: "12", bg: "gray.200" }}
						focusOutlineColor="primary.100"
					/>
					<Button my={7} size="lg" rounded="full">
						Update Profile
					</Button>
				</VStack>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default EditProfile;
