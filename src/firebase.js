import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBNcqu5C5aSrjB1Of89IFfzUSvbI6-yxIQ",
  authDomain: "clone-react-9a23f.firebaseapp.com",
  databaseURL: "https://clone-react-9a23f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "clone-react-9a23f",
  storageBucket: "clone-react-9a23f.appspot.com",
  messagingSenderId: "520730031369",
  appId: "1:520730031369:web:af28b012f761795b8a4fd8",
  measurementId: "G-VPWJX36HJD"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);