import { initializeApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDin_yFytHKVmHyk_DzBfacJJvhYg6HxVU",
  authDomain: "roflix-movie-app-nextjs.firebaseapp.com",
  projectId: "roflix-movie-app-nextjs",
  storageBucket: "roflix-movie-app-nextjs.appspot.com",
  messagingSenderId: "939367642372",
  appId: "1:939367642372:web:3cb6afe7ab8dc54ae00c51",
  measurementId: "G-EJB9SF9R9J",
};

// if (!getApps().length) {
//   initializeApp(firebaseConfig);
// }

const app = initializeApp(firebaseConfig);
const db = getFirestore();

export { app, db };
