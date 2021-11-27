import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firebase.config";

const firebaseIntializeApp=()=>{
    initializeApp(firebaseConfig);
}

export default firebaseIntializeApp;