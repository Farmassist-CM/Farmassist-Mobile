/** @format */

import { Text, BackHandler } from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	GoogleAuthProvider,
	signInWithPopup,
	initializeAuth,
	UserCredential,
	signInWithCredential,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// import app, { } from "../firebase";

import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";

WebBrowser.maybeCompleteAuthSession();

import {
	Button,
	HStack,
	IconButton,
	Image,
	Input,
	ScrollView,
	StatusBar,
	TextField,
	VStack,
} from "native-base";
import { IMAGES } from "../utils/images";
import { useTranslation } from "react-i18next";
import { makeRedirectUri } from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../interfaces/natigationInterfaces";

const Login = () => {
	const navigation = useNavigation<MyNavigation>();
	const [userData, setuserData] = useState({});
	const redirectUri = makeRedirectUri({
		scheme: "exp://192.168.0.2:8081",
		path: "/oauth2",

		preferLocalhost: true, // also tried false
	});

	// const [request, response, promptAsync] = Google.useAuthRequest({
	// 	// redirectUri: "exp://192.168.0.2:8081",
	// 	// redirectUri: redirectUri,

	// 	androidClientId:
	// 		"1065267739858-72ir4uikhmnskgsoupvnhi6u42n93nf2.apps.googleusercontent.com",
	// });
	const { t } = useTranslation();
	const [passwordHide, setPasswordHide] = useState<boolean>(true);
	useEffect(() => {
		const backHandler = BackHandler.addEventListener(
			"hardwareBackPress",
			() => true
		);
		return () => backHandler.remove();
	}, []);
	useEffect(() => {
		// if (response?.type == "success") {
		// 	const { id_token } = response.params;
		// 	const credential = GoogleAuthProvider.credential(id_token);
		// 	signInWithCredential(auth, credential);
		// }
	}, []);
	const HandleGoogle = async () => {
		// const privider = new GoogleAuthProvider();
		// promptAsync();
		// signInWithPopup(auth, privider);
		console.log("DEV");

		navigation.replace("Tab");
	};
	return (
		<ScrollView
			// backgroundColor={"primary.500"}
			_light={{ backgroundColor: "white" }}
			_dark={{ backgroundColor: "red.50" }}
			// minHeight={Dimensions.get("screen").height}
			// _web={{ minHeight: Dimensions.get("window").height }}
			// style={{
			// 	height: Dimensions.get("window").height,
			// }}
		>
			<VStack
				style={{
					height: 300,
				}}
				_light={{
					background: "primary.700",
				}}
				justifyContent="center"
				alignItems="center">
				<Image source={IMAGES.icon} alt="" size={100} />
			</VStack>
			<VStack
				bgColor="white"
				borderTopRadius={40}
				// justifyContent="space-between"
				padding="10">
				<VStack>
					<Input
						py={"3"}
						// borderWidth="0"
						backgroundColor="muted.100"
						placeholder="email"
						// errorMessage="dev"
						fontSize="md"
						keyboardType="email-address"
						_input={{ height: "12" }}
						focusOutlineColor="primary.100"
					/>
					<Input
						py={"3"}
						my={4}
						// borderWidth="0"
						backgroundColor="muted.100"
						placeholder="email"
						// errorMessage="dev"
						fontSize="md"
						keyboardType="email-address"
						_input={{ height: "12" }}
						focusOutlineColor="primary.100"
						secureTextEntry={passwordHide}
						// fontSize="md"
						InputRightElement={
							<IconButton
								onPress={() => setPasswordHide(!passwordHide)}
								variant="ghost"
								display="flex"
								justifyContent="center"
								alignItems="center">
								<Ionicons
									name={passwordHide ? "eye" : "eye-off"}
									color="green"
									size={20}
								/>
							</IconButton>
						}
						// _input={{ height: "12" }}
					/>
					<Button rounded="full" size="lg">
						{t("signIn")}
					</Button>
					<Button
						onPress={HandleGoogle}
						rounded="full"
						variant="outline"
						marginTop="10"
						size="lg">
						Sign In with Google
					</Button>
				</VStack>
				<HStack
					_ios={{
						marginY: "10",
					}}
					_android={{
						marginY: "5",
					}}
					alignItems="center"
					justifyContent="center">
					<Text>{"You don't have account ?"}</Text>
					<Button onPress={() => navigation.push("Register")} variant="link">
						Sign Up
					</Button>
				</HStack>
			</VStack>
		</ScrollView>
	);
};

export default Login;
