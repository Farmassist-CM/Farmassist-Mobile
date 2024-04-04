/** @format */

import { Ionicons } from "@expo/vector-icons";
import { ILinearGradientProps } from "native-base/lib/typescript/components/primitives/Box/types";
import {
	ColorType,
	ResponsiveValue,
} from "native-base/lib/typescript/components/types";
type IconType = keyof typeof Ionicons.glyphMap;
type colorType = ResponsiveValue<ColorType | ILinearGradientProps>;
export type functionId = 1 | 2 | 3 | 4;
export interface ProfileMenuInterface {
	icon: IconType;
	title: string;
	color: colorType;
	functionId: functionId;
}
export const ProfileMenu: ProfileMenuInterface[] = [
	{
		icon: "settings",
		title: "Settings",
		color: "blue.600",
		functionId: 1,
	},
	{
		icon: "language",
		title: "Language",
		color: "primary.500",
		functionId: 2,
	},
	{
		icon: "pencil",
		title: "Edit",
		color: "amber.500",
		functionId: 3,
	},
	{
		icon: "sunny",
		title: "Theme",
		color: "red.500",
		functionId: 4,
	},
];

// let iconName: keyof typeof Ionicons.glyphMap = "add";
