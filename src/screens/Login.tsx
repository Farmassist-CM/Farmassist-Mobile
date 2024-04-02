/** @format */

import {
	View,
	Text,
	BackHandler,
	SafeAreaView,
	Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import {
	GoogleAuthProvider,
	signInWithPopup,
	initializeAuth,
	getReactNativePersistence,
	UserCredential,
	signInWithCredential,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import app, { auth } from "../firebase";

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

const Login = () => {
	const [userData, setuserData] = useState({});
	const redirectUri = makeRedirectUri({
		scheme: "exp://192.168.0.2:8081",
		path: "/oauth2",

		preferLocalhost: true, // also tried false
	});

	const [request, response, promptAsync] = Google.useAuthRequest({
		// redirectUri: "exp://192.168.0.2:8081",
		// redirectUri: redirectUri,

		androidClientId:
			"1065267739858-72ir4uikhmnskgsoupvnhi6u42n93nf2.apps.googleusercontent.com",
	});
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
		if (response?.type == "success") {
			const { id_token } = response.params;
			const credential = GoogleAuthProvider.credential(id_token);
			signInWithCredential(auth, credential);
		}
	}, [response]);
	const HandleGoogle = async () => {
		promptAsync();
	};
	return (
		<View>
			<StatusBar barStyle={"default"} />
			<ScrollView
				backgroundColor={"green.500"}
				_light={{ backgroundColor: "green.500" }}
				_dark={{ backgroundColor: "red.50" }}
				// minHeight={Dimensions.get("screen").height}
				// _web={{ minHeight: Dimensions.get("window").height }}
				pt={"10"}>
				<VStack
					// minHeight={"2/6"}
					justifyContent="center"
					alignItems="center">
					<Image source={IMAGES.icon} alt="" size={100} />
				</VStack>
				<VStack
					minHeight={"4/6"}
					_web={{ minHeight: "4/6" }}
					_android={{ minHeight: "4/6" }}
					bgColor="white"
					h={"full"}
					borderTopRadius={40}
					justifyContent="space-between"
					padding="10">
					<VStack>
						<TextField
							placeholder="email"
							errorMessage="dev"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
						/>
						<TextField
							placeholder="password"
							errorMessage="dev"
							size="lg"
							secureTextEntry={passwordHide}
							fontSize="md"
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
							_input={{ height: "12" }}
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
					<HStack alignItems="center" justifyContent="center">
						<Text>{"You don't have account ?"}</Text>
						<Button variant="link">Sign Up</Button>
					</HStack>
				</VStack>
			</ScrollView>
		</View>
	);
};

export default Login;
