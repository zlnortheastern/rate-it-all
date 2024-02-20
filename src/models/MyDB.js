// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, collection, getDocs, addDoc, getDoc, } from "firebase/firestore";

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
    this.db = getFirestore(app);
  }

  async getThreads() {
    if (!this.db) {
      console.error("Database not initialized!");
      return [];
    }

    try {
      const threadCollection = collection(this.db, "Thread");
      const querySnapshot = await getDocs(threadCollection);
      const threads = querySnapshot.docs.map(doc => ({ id: doc.id, thread: doc.data() }));
      return threads;
    } catch (error) {
      console.error("Error getting threads:", error);
      return [];
    }
  }

  async addThread(thread) {
    if (!this.db) {
      console.error("Database not initialized!");
      return;
    }

    try {
      const threadCollection = collection(this.db, "Thread");
      const docRef = await addDoc(threadCollection, thread);
      console.log("Thread added with ID: ", docRef.id);
      return docRef.id;
    } catch (error) {
      console.error("Error adding thread:", error);
      return null;
    }
  }

  async updateRating(threadId, objectId, newRating) {
    if (!this.db) {
      console.error("Database not initialized!");
      return;
    }

    try {
      const threadRef = doc(this.db, "Thread", threadId);
      const threadDoc = await getDoc(threadRef);

      if (!threadDoc.exists()) {
        console.error("Thread not found!");
        return;
      }

      const threadData = threadDoc.data();

      // Find the object within the thread
      const objectIndex = threadData.objects.findIndex(obj => obj.objectId === objectId);

      if (objectIndex === -1) {
        console.error("Object not found in thread!");
        return;
      }

      // Update the ratings array of the object
      threadData.objects[objectIndex].ratings.push(newRating);

      // Extract rating values for calculation
      const ratings = threadData.objects[objectIndex].ratings.map(rating => rating.rating);

      if (ratings.length === 0) {
        console.warn("Ratings array is empty. Cannot calculate average rating.");
        return;
      }

      // Calculate the average rating
      const totalRating = ratings.reduce((acc, curr) => acc + curr, 0);
      const averageRating = totalRating / ratings.length;

      // Update the averageRating attribute of the object
      threadData.objects[objectIndex].averageRating = averageRating;

      // Update the Firestore document
      await updateDoc(threadRef, {
        objects: threadData.objects // Update the objects array
      });

      console.log("Ratings and average rating updated successfully!");
    } catch (error) {
      console.error("Error updating ratings:", error);
    }
  }
}
