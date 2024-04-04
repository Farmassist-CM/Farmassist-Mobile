/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "intl-pluralrules";
import "./src/i18n";

import AppRouter from "./src/AppRouter";

import { NativeBaseProvider, useColorMode } from "native-base";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
import { customTheme } from "./src/utils/theme";
import { LinearGradient } from "expo-linear-gradient";
const config = {
	dependencies: {
		"linear-gradient": LinearGradient,
	},
};
export default function App() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
	const { toggleColorMode } = useColorMode();
	useEffect(() => {
		// const l = localStorage.getItem("lang");
		// console.log("Language ", l);
		// if (l) {
		// 	if (l == "en" || l == "fr") {
		// 		changeLanguage(l);
		// 	}
		// }
	}, []);

	return (
		<NativeBaseProvider config={config} theme={customTheme}>
			<AppRouter />
		</NativeBaseProvider>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fff",
		alignItems: "center",
		justifyContent: "center",
	},
});
