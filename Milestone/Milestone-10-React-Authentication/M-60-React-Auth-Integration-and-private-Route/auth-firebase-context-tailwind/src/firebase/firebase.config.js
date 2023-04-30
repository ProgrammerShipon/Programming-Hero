// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyBglAlYr6KN8xEGEcUfmkRqspEO0GkSvD0",
	authDomain: "auth-firebase-context-ta-27afe.firebaseapp.com",
	projectId: "auth-firebase-context-ta-27afe",
	storageBucket: "auth-firebase-context-ta-27afe.appspot.com",
	messagingSenderId: "845410240691",
	appId: "1:845410240691:web:a84aa5a9719ce2865288c6",
	measurementId: "G-HJWRE0DJHM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
