/** @format */

import { VStack, View } from "native-base";
import React, { useEffect, useState } from "react";
import { Alert, Text } from "react-native";

import { BarCodeScanningResult, Camera, CameraType } from "expo-camera";
const ScanBarCode = () => {
	const [permission, requestPermission] = Camera.useCameraPermissions();
	console.log("permission", permission?.status);
	const [canCapture, setCanCapture] = useState<boolean>(true);
	useEffect(() => {
		requestPermission();
	}, []);
	const handleCannned = (b: BarCodeScanningResult) => {
		if (canCapture) {
			Alert.alert("BarCode", b.data);
			setCanCapture(false);
		}
	};

	return (
		<View flex={1}>
			<VStack flex={1} p={10}>
				<Camera
					onBarCodeScanned={handleCannned}
					type={CameraType.back}
					style={{
						// flex: 1,
						height: 150,
					}}></Camera>
			</VStack>
		</View>
	);
};

export default ScanBarCode;
