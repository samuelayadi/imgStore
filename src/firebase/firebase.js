import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth'



const firebaseConfig = {
  apiKey: "AIzaSyCIRz8uCXCMRR9n3SufZFsn63PPIDJMzYs",
  authDomain: "imgstore-8f775.firebaseapp.com",
  databaseURL: "https://imgstore-8f775-default-rtdb.firebaseio.com",
  projectId: "imgstore-8f775",
  storageBucket: "imgstore-8f775.appspot.com",
  messagingSenderId: "535375177460",
  appId: "1:535375177460:web:fde62f4fb9eba0f95ce0a1",
  measurementId: "G-F3W2FK32EM",
};


const app = initializeApp(firebaseConfig);


export const auth = getAuth(app);

