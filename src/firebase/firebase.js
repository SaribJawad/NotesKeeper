import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCLoJ8afpi6t1cjqxhgQmUl9GNGwOEEFjQ",
  authDomain: "dockeeper-7f401.firebaseapp.com",
  projectId: "dockeeper-7f401",
  storageBucket: "dockeeper-7f401.appspot.com",
  messagingSenderId: "507008557915",
  appId: "1:507008557915:web:ec1d3db1d4b2c101a8f07e",
  databaseURL: "https://dockeeper-7f401-default-rtdb.firebaseio.com",
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
