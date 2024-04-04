/** @format */

import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";

import enTranslation from "./locales/en.json";
import frTranslation from "./locales/fr.json";

const resources: Resource = {
	en: {
		translation: enTranslation,
	},
	fr: {
		translation: frTranslation,
	},
};

i18n.use(initReactI18next).init({
	compatibilityJSON: "v3",
	resources,
	lng: "en",
	fallbackLng: "en",
	interpolation: {
		escapeValue: false,
		
	},
});

export default i18n;
