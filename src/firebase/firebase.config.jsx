// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBE6vQhN-729cICQbFy0Cu2P3FgogqDeeY",
  authDomain: "pack-bags.firebaseapp.com",
  projectId: "pack-bags",
  storageBucket: "pack-bags.appspot.com",
  messagingSenderId: "40183965721",
  appId: "1:40183965721:web:06a2742e1683b98a5b6288"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;