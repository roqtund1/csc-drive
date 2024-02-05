
import { initializeApp } from "firebase/app";

import { getFirestore } from "@firebase/firestore";
import { getStorage } from "firebase/storage";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBTlBT6mGB3g8qE5JEneBa8h2ysQXyD2NU",
  authDomain: "csc-drive.firebaseapp.com",
  projectId: "csc-drive",
  storageBucket: "csc-drive.appspot.com",
  messagingSenderId: "1012561150423",
  appId: "1:1012561150423:web:05aa228ed22682157dcb92"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);
