/** @format */

import * as Yup from "yup";
import {
	LoginInformations,
	RegisterInformations,
} from "../interfaces/AuthInferfaces";

import i18n from "../i18n";

export const LoginEmailPassworSchema = Yup.object<LoginInformations>({
	email: Yup.string()
		.email(i18n.t("invalid_email"))
		.required(i18n.t("email_required")),
	password: Yup.string().required(i18n.t("password_required")),
});
export const RegistrationSchema = Yup.object<RegisterInformations>({
	email: Yup.string()
		.email(i18n.t("invalid_email"))
		.required(i18n.t("email_required")),
	password: Yup.string().required(i18n.t("password_required")),
	cormfirm_password: Yup.string().required("Confirm Password is required"),
	username: Yup.string().required("z"),
	last_name: Yup.string(),
	first_name: Yup.string().required(""),
});
