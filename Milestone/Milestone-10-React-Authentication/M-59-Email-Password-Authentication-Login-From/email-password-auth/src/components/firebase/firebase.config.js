// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDGf8AdkRD5LZGurJRq9AJRqtAtAdl6w_0",
	authDomain: "email-password-auth-ef1ff.firebaseapp.com",
	projectId: "email-password-auth-ef1ff",
	storageBucket: "email-password-auth-ef1ff.appspot.com",
	messagingSenderId: "891546072960",
	appId: "1:891546072960:web:c6991ba456be9837577365",
	measurementId: "G-DXM8MGSKX5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
