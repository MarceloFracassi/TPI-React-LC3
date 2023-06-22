
//import 'firebase/firestore';


// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
apiKey: "AIzaSyDGPhuupgxLKMftULt3nf8am-0UbByg_TQ",
authDomain: "code-pizzeria-fb.firebaseapp.com",
projectId: "code-pizzeria-fb",
storageBucket: "code-pizzeria-fb.appspot.com",
messagingSenderId: "699126961915",
appId: "1:699126961915:web:d5111f566ce806acddc25e"
};

// Initialize Firebase
const firebasAapp = initializeApp(firebaseConfig);
export default firebasAapp;

