/** @format */

export interface LoginInformations {
	email: string;
	password: string;
}

export interface RegisterInformations {
	email: string;
	password: string;
	confirm_password: string;
	first_name: string;
	last_name: string | null;
	username: string;
}
export interface UserInfo
	extends Omit<RegisterInformations, "password" | "confirm_password"> {}
