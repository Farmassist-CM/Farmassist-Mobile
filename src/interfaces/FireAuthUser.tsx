/** @format */

export interface FireAuthUser {
	_redirectEventId: string;
	apiKey: string;
	appName: string;
	createdAt: string;
	displayName: string;
	email: string;
	emailVerified: boolean;
	isAnonymous: boolean;
	lastLoginAt: string;
	phoneNumber: string;
	photoURL: string;
	providerData: any[];
	stsTokenManager: StsTokenManager;
	tenantId: string;
	uid: string;
}

export interface StsTokenManager {
	accessToken: string;
	expirationTime: number;
	refreshToken: string;
}
