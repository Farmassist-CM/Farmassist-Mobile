/** @format */

import { HStack, Image } from "native-base";
import React from "react";
import { Ionicons } from "@expo/vector-icons";
import { IMAGES } from "../utils/images";
const Nothing = () => {
	return (
		<HStack justifyContent="center" bg="white">
			<Image
				source={IMAGES.nothing}
				alt="Nothing"
				size={300}
				style={{
					objectFit: "contain",
				}}
			/>
		</HStack>
	);
};

export default Nothing;
