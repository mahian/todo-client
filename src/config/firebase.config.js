// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB_HeEGll6zMHB_ByMOb6bfrWhF28kcVBs",
  authDomain: "todo-app-2ac87.firebaseapp.com",
  projectId: "todo-app-2ac87",
  storageBucket: "todo-app-2ac87.appspot.com",
  messagingSenderId: "656839905912",
  appId: "1:656839905912:web:a355b48a166668faf6138d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;