// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJ7D-eLPodTNOsJQrVl28_A-rj7Zp9hTc",
  authDomain: "mern-book-inventory-a31de.firebaseapp.com",
  projectId: "mern-book-inventory-a31de",
  storageBucket: "mern-book-inventory-a31de.appspot.com",
  messagingSenderId: "336943616156",
  appId: "1:336943616156:web:6442b2df92088fb0f55d59",
  measurementId: "G-XRNV0NY2HJ"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig);

 export default app 
//  const analytics = getAnalytics(app);
