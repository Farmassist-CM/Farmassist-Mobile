/** @format */

import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import "./src/i18n";
import AppRouter from "./src/AppRouter";
import {
	GluestackUIProvider,
	Text,
	Box,
	GluestackUIStyledProvider,
} from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import { NativeBaseProvider } from "native-base";
import { useTranslation } from "react-i18next";
import { useEffect } from "react";
export default function App() {
	const { i18n } = useTranslation();

	const changeLanguage = (lng: string) => {
		i18n.changeLanguage(lng);
	};
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
		<NativeBaseProvider>
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
