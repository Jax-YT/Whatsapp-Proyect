import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCCM0U-ABu8N82OfRbIrWWYllwsEdQUq7A",
  authDomain: "whatsapp-299fe.firebaseapp.com",
  projectId: "whatsapp-299fe",
  storageBucket: "whatsapp-299fe.appspot.com",
  messagingSenderId: "884954908186",
  appId: "1:884954908186:web:10941a5b03eca24f21b3a3",
  measurementId: "G-Q8HKWKWR8V"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});

export function signIn(email, password) {
  return signInWithEmailAndPassword(auth, email, password);
}
export function signUp(email, password) {
  return createUserWithEmailAndPassword(auth, email, password);
}
