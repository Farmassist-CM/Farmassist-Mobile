/** @format */

import { extendTheme } from "native-base";

export const customTheme = extendTheme({
	space: {
		"space-2": "29px",
	},

	colors: {
		primary: {
			50: "#E4F7E3",
			100: "#C8F0C5",
			200: "#A8EAA3",
			300: "#83E07B",
			400: "#62D64B",
			500: "#52C112", // Base color
			600: "#48B10C",
			700: "#3DA007",
			800: "#329002",
			900: "#257C00",
		},
	},
	components: {
		// Button: {
		//   variants: {
		//     brand: {
		//       p: '10',
		//       bg: 'brand.500',
		//     },
		//   },
		// },
	},
});

type CustomThemeType = typeof customTheme;

declare module "native-base" {
	interface ICustomTheme extends CustomThemeType {}
}
