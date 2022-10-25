// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA_H63H0ZfPUfzJaSmw8OBscliDsLBhB4Q",
  authDomain: "courseacademy-learningplatform.firebaseapp.com",
  projectId: "courseacademy-learningplatform",
  storageBucket: "courseacademy-learningplatform.appspot.com",
  messagingSenderId: "884763974249",
  appId: "1:884763974249:web:0cf030e2a39c6bbafee0f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;