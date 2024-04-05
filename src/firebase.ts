/** @format */

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyCQZuBxXRj3ogKa7vKaEKRinVJ9EK637VE",
	authDomain: "farmassist-32ae0.firebaseapp.com",
	databaseURL: "https://farmassist-32ae0-default-rtdb.firebaseio.com",
	projectId: "farmassist-32ae0",
	storageBucket: "farmassist-32ae0.appspot.com",
	messagingSenderId: "275436927970",
	appId: "1:275436927970:web:67d3bfb3ff38b41fd157bb",
	measurementId: "G-VTJ766E4CY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const auth = initializeAuth(app, {
// 	persistence: getReactNativePersistence(ReactNativeAsyncStorage),
// });
// const analytics = getAnalytics(app);
