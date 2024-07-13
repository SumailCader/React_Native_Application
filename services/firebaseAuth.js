import { initializeApp, getApps } from "firebase/app";
import { initializeAuth, getReactNativePersistence, getAuth } from "firebase/auth"; 
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
    apiKey: "AIzaSyBizeZF_mSsIsFAVZLXn8yPRfNBW2BToak",
    authDomain: "react-native-login-and-reister.firebaseapp.com",
    projectId: "react-native-login-and-reister",
    storageBucket: "react-native-login-and-reister.appspot.com",
    messagingSenderId: "893099147711",
    appId: "1:893099147711:web:c0fa5e6943b9c4a491a10a"
  };

let auth;
if (getApps().length === 0) {
    const app = initializeApp(firebaseConfig);
    auth = initializeAuth(app, {
        persistence: getReactNativePersistence(ReactNativeAsyncStorage)
    });
} else {
    auth = getAuth();
}

export default auth;