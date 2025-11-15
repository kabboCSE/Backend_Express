// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBHghuxNgq13HfOkNE1IrMQDNXSbxMU8c",
  authDomain: "smart-deals-91b1d.firebaseapp.com",
  projectId: "smart-deals-91b1d",
  storageBucket: "smart-deals-91b1d.firebasestorage.app",
  messagingSenderId: "731426155594",
  appId: "1:731426155594:web:4d093896fd2cb415920ab3",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
