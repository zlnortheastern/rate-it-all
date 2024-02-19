// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default class MyDBFirebase {
  constructor() {
    this.initializeFirebase();
  }

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  firebaseConfig = {
    apiKey: "AIzaSyCoqiBEpwAhBYKP2Fo0ArXy-HthH4XY73U",
    authDomain: "rateitall-ee1d1.firebaseapp.com",
    projectId: "rateitall-ee1d1",
    storageBucket: "rateitall-ee1d1.appspot.com",
    messagingSenderId: "191603399210",
    appId: "1:191603399210:web:43e09e8fe5d788d844c153",
    measurementId: "G-3SBTFYHBL9"
  };

  // Firebase database
  db = null;

  initializeFirebase() {
    // Initialize Firebase
    const app = initializeApp(this.firebaseConfig);
    const analytics = getAnalytics(app);
    console.log("Firebase initialized!", app, analytics);

    const db = getFirestore(app);

    this.db = db;
  }

  async getThreads() {
    if (!this.db) {
      console.error("Database not initialized!");
      return [];
    }

    const threadCollection = collection(this.db, "Thread");

    const res = await getDocs(threadCollection);
    const threads = [];

    for (let doc of res.docs) {
      threads.push({id:doc.id, thread:doc.data()});
      console.log("getThreadss() res", doc.data());
    }

    return threads;
  }

  async addThread(thread) {
    console.log("Add Thread", thread, this.db);
    if (!this.db) {
      console.error("Database not initialized!");
      return;
    }

    const threadCollection = collection(this.db, "Thread");
    const res = await addDoc(threadCollection, thread);

    console.log("❤️⚠️📣 addInteraction() res", res, res.id);


    return res;
  }
}
