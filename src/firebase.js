import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBvBLbug59RbgJb1DJ5yCBxtMRrBnN8R24",
  authDomain: "auth2-2d0ac.firebaseapp.com",
  projectId: "auth2-2d0ac",
  storageBucket: "auth2-2d0ac.appspot.com",
  messagingSenderId: "449816341838",
  appId: "1:449816341838:web:9d907c5b72aa7cde97821f"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);