/** @format */

import { BackHandler } from "react-native";
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
	FormControl,
	HStack,
	IconButton,
	Image,
	Input,
	ScrollView,
	StatusBar,
	Text,
	TextField,
	VStack,
	WarningOutlineIcon,
} from "native-base";
import { IMAGES } from "../utils/images";
import { useTranslation } from "react-i18next";
import { makeRedirectUri } from "expo-auth-session";
import { useNavigation } from "@react-navigation/native";
import { MyNavigation } from "../interfaces/natigationInterfaces";
import { useFormik } from "formik";
import { LoginInformations } from "../interfaces/AuthInferfaces";
import { LoginEmailPassworSchema as LoginEmailPasswordSchema } from "../utils/ValisationSchema";
import FormControlErrorMessage from "../components/FormControlErrorMessage";
import {} from "../firebase";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
} from "firebase/auth";
import { FireAuthUser } from "../interfaces/FireAuthUser";
import useSessionStore from "../store/SessionStore";
const Login = () => {
	const { LoginUser } = useSessionStore();
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const auth = getAuth();
	const formik = useFormik<LoginInformations>({
		initialValues: {
			email: "",
			password: "",
		},
		validationSchema: LoginEmailPasswordSchema,
		onSubmit: (values) => {
			handleSubmit(values);
		},
	});
	const handleSubmit = async (credentials: LoginInformations) => {
		// console.log(credentials);
		setIsLoading(true);
		signInWithEmailAndPassword(auth, credentials.email, credentials.password)
			.then(async (userCredential) => {
				// Signed in
				const user = userCredential.user as unknown as FireAuthUser;
				LoginUser(user);

				// onChangeLoggedInUser(user.email);
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				console.log(error);
			})
			.finally(() => {
				setIsLoading(false);
			});
	};
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
			_light={{ backgroundColor: "white" }}
			_dark={{ backgroundColor: "dark.100" }}>
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
				_dark={{
					bgColor: "dark.200",
				}}
				borderTopRadius={40}
				padding="10">
				<VStack>
					<FormControl isInvalid={formik.errors?.email ? true : false} my={3}>
						<FormControl.Label>Email</FormControl.Label>
						<Input
							py={"3"}
							backgroundColor="muted.100"
							placeholder="exemple@example.com"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							onChangeText={formik.handleChange("email")}
							onBlur={formik.handleBlur("email")}
							value={formik.values.email}
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
						/>
						<FormControlErrorMessage
							message={formik.errors.email?.toString() || ""}
						/>
					</FormControl>

					<FormControl
						isInvalid={formik.errors?.password ? true : false}
						my={3}>
						<FormControl.Label>{t("password")}</FormControl.Label>
						<Input
							backgroundColor="muted.100"
							placeholder="****************"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							secureTextEntry={passwordHide}
							onChangeText={formik.handleChange("password")}
							onBlur={formik.handleBlur("password")}
							value={formik.values.password}
							InputRightElement={
								<IconButton
									_dark={{
										bg: "dark.100",
										h: "full",
										rounded: "none",
									}}
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
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
						/>
						<FormControlErrorMessage
							message={formik.errors.password?.toString() || ""}
						/>
					</FormControl>

					<Button
						isLoading={isLoading}
						onPress={() => formik.handleSubmit()}
						rounded="full"
						size="lg"
						my={5}>
						{t("signIn")}
					</Button>
					<Button
						onPress={HandleGoogle}
						rounded="full"
						variant="outline"
						marginTop="10"
						size="lg">
						{t("sign_in_with_google")}
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
					<Text>{t("i_dont_have_account")}</Text>
					<Button onPress={() => navigation.push("Register")} variant="link">
						{t("sign_up")}
					</Button>
				</HStack>
			</VStack>
		</ScrollView>
	);
};

export default Login;
