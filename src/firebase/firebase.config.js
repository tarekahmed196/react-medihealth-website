// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFw3FgGMIJmZNqG0NdNJ9Osgk6ohThlTw",
  authDomain: "medihealth-website.firebaseapp.com",
  projectId: "medihealth-website",
  storageBucket: "medihealth-website.appspot.com",
  messagingSenderId: "321560520214",
  appId: "1:321560520214:web:9b3e158d8ce84aca67b737"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;