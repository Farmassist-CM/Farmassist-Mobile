/** @format */

import { extendTheme } from "native-base";

export const customTheme = extendTheme({
	space: {
		"space-2": "29px",
	},
	colors: {
		// primary: {
		// 	50: "#E3FCE3",
		// 	100: "#C5F9C5",
		// 	200: "#A2F5A2",
		// 	300: "#7AEE7A",
		// 	400: "#47E947",
		// 	500: "#57E704", // Base color
		// 	600: "#4EDC00",
		// 	700: "#45D200",
		// 	800: "#3CC800",
		// 	900: "#33BD00",
		// },
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

// 2. Get the type of the CustomTheme
// type CustomThemeType = typeof customTheme;

// 3. Extend the internal NativeBase Theme
// declare module 'native-base' {
//   interface ICustomTheme extends CustomThemeType {}
// }
