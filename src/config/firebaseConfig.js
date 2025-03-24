
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCigNQsayAtKyYeAOuCActruevITr3g9ZE",
  authDomain: "react-login-a2cbf.firebaseapp.com",
  projectId: "react-login-a2cbf",
  storageBucket: "react-login-a2cbf.firebasestorage.app",
  messagingSenderId: "855739704513",
  appId: "1:855739704513:web:3449504edd6669fc1fa040",
  measurementId: "G-1SF7MZE7J9"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export {auth};