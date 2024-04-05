/** @format */
import React from "react";
import {
	Avatar,
	Box,
	HStack,
	Pressable,
	ScrollView,
	Text,
	VStack,
	View,
	useDisclose,
} from "native-base";
import { ProfileMenu, functionId } from "../../utils/ProfileMenu";
import { Ionicons } from "@expo/vector-icons";
import ThemeEdit from "../../components/ThemeEdit";
import LanguageEdit from "../../components/LanguageEdit";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../../interfaces/natigationInterfaces";
import UserInformationItem, {
	UserInfo,
} from "../../components/UserInformationItem";
import useSessionStore from "../../store/SessionStore";
const Profile = () => {
	const { session } = useSessionStore();
	const userInformations: UserInfo[] = [
		{
			title: "Username",
			value: session?.displayName || "",
		},
		{
			title: "Name & surname",
			value: "TIOMELA JOU DANIEL",
		},
		{
			title: "email",
			value: session?.email || "",
		},
	];
	const { isOpen, onOpen, onClose } = useDisclose();
	const navigation = useNavigation<MyNavigation>();
	const {
		isOpen: languageIsOpen,
		onOpen: languageOpen,
		onClose: languageOnClose,
	} = useDisclose();
	const HandlePress = (id: functionId) => {
		if (id == 1) {
			HandleSettings();
		}
		if (id == 2) {
			HandleLanguage();
		}
		if (id == 3) {
			HandleEdit();
		}
		if (id == 4) {
			HandleTheme();
		}
	};
	const HandleSettings = () => {
		navigation.push("Settings");
	};
	const HandleLanguage = () => {
		languageOpen();
	};
	const HandleEdit = () => {
		navigation.push("EditProfile");
	};
	const HandleTheme = () => {
		onOpen();
	};
	return (
		<ScrollView
			_dark={{
				bg: "dark.200",
			}}>
			<Box
				bg={{
					linearGradient: {
						colors: ["blue.400", "primary.500"],
						start: [0, 0],
						end: [1, 0],
					},
				}}
				// bg={"amber.400"}
				p={20}
				_text={{
					fontSize: "md",
					fontWeight: "medium",
					color: "warmGray.50",
					textAlign: "center",
				}}>
				{/* This is a Box with Linear Gradient */}
			</Box>
			<HStack justifyContent={"center"} position="relative">
				<Avatar
					style={{
						position: "absolute",
						transform: [{ translateY: -60 }],
					}}
					size={"2xl"}
					bg="green.500"
					source={{
						uri: session?.photoURL,
					}}></Avatar>
			</HStack>
			<HStack
				alignItems={"center"}
				justifyItems={"center"}
				mt={100}
				mb={5}
				p={4}
				justifyContent="space-between">
				{ProfileMenu.map((profile, index) => (
					<Pressable
						onPress={() => {
							HandlePress(profile.functionId);
						}}
						key={index}
						display="flex"
						justifyContent="center"
						alignItems="center"
						flexDirection="column">
						<Box
							p={4}
							bg={profile.color}
							display="flex"
							justifyContent="center"
							alignItems="center"
							rounded="md">
							<Ionicons
								color="white"
								size={25}
								style={{
									fontWeight: "bold",
								}}
								name={profile.icon}
							/>
						</Box>
						<Text
							mt={2}
							textAlign="center"
							justifyContent="center"
							fontSize={"xs"}>
							{profile.title}
						</Text>
					</Pressable>
				))}
			</HStack>
			<VStack p={4}>
				{userInformations.map((user, index) => (
					<View key={index}>
						<UserInformationItem {...user} />
					</View>
				))}
				{/* <Fab
					// icon={<Ionicons name="log-out"  size={25} />}
					icon={<Icon as={Ionicons} name="log-out" size="3xl" />}
					marginBottom={"24"}
					size={70}
				/> */}
			</VStack>
			<ThemeEdit isOpen={isOpen} onClose={onClose} />
			<LanguageEdit isOpen={languageIsOpen} onClose={languageOnClose} />
		</ScrollView>
	);
};

export default Profile;
