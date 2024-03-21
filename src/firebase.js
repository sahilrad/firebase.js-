import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBZavjH2YEMyjNoUMwIQLjfYmQThjuTOE",
  authDomain: "login-page-c905f.firebaseapp.com",
  projectId: "login-page-c905f",
  storageBucket: "login-page-c905f.appspot.com",
  messagingSenderId: "239419997954",
  appId: "1:239419997954:web:81707f0c1810e03ba54c1b",
  measurementId: "G-BZSSPGM3WW"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };
