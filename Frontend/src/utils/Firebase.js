
import{getAuth, GoogleAuthProvider} from "firebase/auth"
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "loginwebsite-399b6.firebaseapp.com",
  projectId: "loginwebsite-399b6",
  storageBucket: "loginwebsite-399b6.firebasestorage.app",
  messagingSenderId: "949261582557",
  appId: "1:949261582557:web:7dbb48cb06e4d35d285b34"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()

export {auth,provider}