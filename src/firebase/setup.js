import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDs68J-hbfZX13jvb_V-6vb6scSb4RD7wE",
  authDomain: "react-portfolio-cea27.firebaseapp.com",
  projectId: "react-portfolio-cea27",
  storageBucket: "react-portfolio-cea27.appspot.com",
  messagingSenderId: "184654292601",
  appId: "1:184654292601:web:182544f60d5c37bd5096a8",
};

const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

export const auth = getAuth(app);
