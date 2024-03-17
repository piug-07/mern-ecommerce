// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_APP_ID,
// };

// export const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCJ74gB7brA3V4dD0WQv_coej7arBsEKZM",
  authDomain: "mern-ecomm-3b08d.firebaseapp.com",
  projectId: "mern-ecomm-3b08d",
  storageBucket: "mern-ecomm-3b08d.appspot.com",
  messagingSenderId: "876258901369",
  appId: "1:876258901369:web:f4f3377ad6c81a557043a8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);