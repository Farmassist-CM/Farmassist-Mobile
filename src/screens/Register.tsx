/** @format */

import React, { useState } from "react";
import {
	Button,
	FormControl,
	IconButton,
	Input,
	KeyboardAvoidingView,
	ScrollView,
	Stack,
	VStack,
} from "native-base";
import { Ionicons } from "@expo/vector-icons";
import FormControlErrorMessage from "../components/FormControlErrorMessage";
import { FireAuth } from "../firebase";
import { useFormik } from "formik";
import { RegisterInformations } from "../interfaces/AuthInferfaces";
import { RegistrationSchema } from "../utils/ValisationSchema";

const Register = () => {
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const formik = useFormik<RegisterInformations>({
		initialValues: {
			confirm_password: "",
			email: "",
			first_name: "",
			last_name: "",
			password: "",
			username: "",
		},
		validationSchema: RegistrationSchema,
		onSubmit: (values: RegisterInformations) => {
			handleSubmit(values);
		},
	});
	const handleSubmit = async (values: RegisterInformations) => {
		setIsLoading(false);
		try {
			const { email, password } = values;
			// const userCredential = await FireAuth.createUserWithEmailAndPassword(
			// 	email,
			// 	password
			// );
			// if (userCredential.user) {
			// 	const { first_name, last_name, username } = values;
			// 	await userCredential.user.updateProfile({ displayName: username });
			// 	// Registration successful, you can navigate to another page or perform other actions
			// 	console.log("Registration successful:", userCredential.user);
			// }
		} catch (error) {
			// Registration failed
			//   setError(error.message);
			console.error("Registration failed:", error);
		}
		setIsLoading(true);
	};

	return (
		<KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
			<ScrollView
				_dark={{
					bg: "dark.200",
				}}
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

					<FormControl isInvalid={formik.errors?.email ? true : false} my={3}>
						<FormControl.Label>Email</FormControl.Label>
						<Input
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
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
						/>
						<FormControlErrorMessage
							message={formik.errors.email?.toString() || ""}
						/>
					</FormControl>

					<FormControl
						isInvalid={formik.errors?.username ? true : false}
						my={3}>
						<FormControl.Label>Username</FormControl.Label>
						<Input
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
							py={"3"}
							backgroundColor="muted.100"
							placeholder="exemple@example.com"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							onChangeText={formik.handleChange("username")}
							onBlur={formik.handleBlur("username")}
							value={formik.values.username}
						/>
						<FormControlErrorMessage
							message={formik.errors.username?.toString() || ""}
						/>
					</FormControl>

					<FormControl isInvalid={formik.errors?.email ? true : false} my={3}>
						<FormControl.Label>First Name</FormControl.Label>
						<Input
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
							py={"3"}
							backgroundColor="muted.100"
							placeholder="exemple@example.com"
							fontSize="md"
							keyboardType="default"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							onChangeText={formik.handleChange("first_name")}
							onBlur={formik.handleBlur("first_name")}
							value={formik.values.first_name}
						/>
						<FormControlErrorMessage
							message={formik.errors.email?.toString() || ""}
						/>
					</FormControl>

					<FormControl isInvalid={formik.errors?.email ? true : false} my={3}>
						<FormControl.Label>Last name</FormControl.Label>
						<Input
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
							py={"3"}
							backgroundColor="muted.100"
							placeholder="exemple@example.com"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							// onChangeText={formik.handleChange("email")}
							// onBlur={formik.handleBlur("email")}
							// value={formik.values.email}
						/>
						<FormControlErrorMessage
							message=""
							// message={formik.errors.email?.toString() || ""}
						/>
					</FormControl>

					<FormControl
						isInvalid={formik.errors?.password ? true : false}
						my={3}>
						<FormControl.Label>Password</FormControl.Label>
						<Input
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
							backgroundColor="muted.100"
							placeholder="****************"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							// secureTextEntry={passwordHide}
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
									// onPress={() => setPasswordHide(!passwordHide)}
									variant="ghost"
									display="flex"
									justifyContent="center"
									alignItems="center">
									<Ionicons
										name="eye"
										// name={passwordHide ? "eye" : "eye-off"}
										color="green"
										size={20}
									/>
								</IconButton>
							}
						/>
						<FormControlErrorMessage
							message={formik.errors.password?.toString() || ""}
						/>
					</FormControl>

					<FormControl
						isInvalid={formik.errors?.confirm_password ? true : false}
						my={3}>
						<FormControl.Label>Confirm password</FormControl.Label>
						<Input
							_dark={{
								_input: {
									bg: "dark.100",
								},
							}}
							backgroundColor="muted.100"
							placeholder="****************"
							fontSize="md"
							keyboardType="email-address"
							_input={{ height: "12" }}
							focusOutlineColor="primary.100"
							// secureTextEntry={passwordHide}
							onChangeText={formik.handleChange("confirm_password")}
							onBlur={formik.handleBlur("confirm_password")}
							value={formik.values.confirm_password}
							InputRightElement={
								<IconButton
									_dark={{
										bg: "dark.100",
										h: "full",
										rounded: "none",
									}}
									// onPress={() => setPasswordHide(!passwordHide)}
									variant="ghost"
									display="flex"
									justifyContent="center"
									alignItems="center">
									<Ionicons
										name="eye"
										// name={passwordHide ? "eye" : "eye-off"}
										color="green"
										size={20}
									/>
								</IconButton>
							}
						/>
						<FormControlErrorMessage
							message={formik.errors.confirm_password?.toString() || ""}
						/>
					</FormControl>

					<Stack w={"full"} marginTop="5">
						<Button
							isLoading={isLoading}
							onPress={() => {
								formik.handleSubmit();
							}}
							rounded="full"
							w="full"
							size="lg">
							Register
						</Button>
					</Stack>
				</VStack>
			</ScrollView>
		</KeyboardAvoidingView>
	);
};

export default Register;
