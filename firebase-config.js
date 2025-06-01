
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-app.js";
  import { getAuth } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/11.8.1/firebase-firestore.js";

  const firebaseConfig = {
    apiKey: "AIzaSyBkhAD7eobCtvzFYOviggm-VHQPcMzqgBk",
    authDomain: "role-base-access-43c3a.firebaseapp.com",
    projectId: "role-base-access-43c3a",
    storageBucket: "role-base-access-43c3a.firebasestorage.app",
    messagingSenderId: "342070761397",
    appId: "1:342070761397:web:46348508ddf6e387d16bfc",
    measurementId: "G-7CP6P7HYZ0"
  };


  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);