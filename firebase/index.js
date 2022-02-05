import { initializeApp } from "firebase/app";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_APP_ID,
//   measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDin_yFytHKVmHyk_DzBfacJJvhYg6HxVU",
  authDomain: "roflix-movie-app-nextjs.firebaseapp.com",
  projectId: "roflix-movie-app-nextjs",
  storageBucket: "roflix-movie-app-nextjs.appspot.com",
  messagingSenderId: "939367642372",
  appId: "1:939367642372:web:3cb6afe7ab8dc54ae00c51",
  measurementId: "G-EJB9SF9R9J",
};

const firebaseInit = initializeApp(firebaseConfig);

export { firebaseInit };
