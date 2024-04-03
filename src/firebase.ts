/** @format */

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyCQZuBxXRj3ogKa7vKaEKRinVJ9EK637VE",
	authDomain: "farmassist-32ae0.firebaseapp.com",
	projectId: "farmassist-32ae0",
	storageBucket: "farmassist-32ae0.appspot.com",
	messagingSenderId: "275436927970",
	appId: "1:275436927970:web:67d3bfb3ff38b41fd157bb",
	measurementId: "G-VTJ766E4CY",
};

if (!firebase.apps.length) {
	firebase.initializeApp(firebaseConfig);
}

export default firebase;
// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);

// // Android 1065267739858-72ir4uikhmnskgsoupvnhi6u42n93nf2.apps.googleusercontent.com
