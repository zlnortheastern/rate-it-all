// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, collection, getDocs, addDoc, getDoc, deleteDoc, } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

export default function MyFirebase() {

  const firebaseConfig = {
    apiKey: "AIzaSyAIbW-MBjgcbNHUt8-mOvHlztOA3ga7axc",
    authDomain: "rate-it-all-ed671.firebaseapp.com",
    projectId: "rate-it-all-ed671",
    storageBucket: "rate-it-all-ed671.appspot.com",
    messagingSenderId: "899645713381",
    appId: "1:899645713381:web:aeb0365a4e547b44465d0c",
    measurementId: "G-TTL52L9ZW4"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const me = {};
  const threadRef = collection(db, "Thread");

  me.getThreads = async () => {
    if (!db) {
      console.error("Database not initialized!");
      return [];
    }

    const querySnapshot = await getDocs(threadRef);
    const threads = querySnapshot.docs.map(doc => ({
      ...doc.data(),
      id: doc.id
    }));
    return threads;
  };

  me.getThread = async (threadId) => {
    if (!db) {
      console.error("Database not initialized!");
      return null;
    }

    const threadDocRef = doc(db, "Thread", threadId);
    const threadDocSnapshot = await getDoc(threadDocRef);

    if (threadDocSnapshot.exists()) {
      const threadData = threadDocSnapshot.data();
      return { ...threadData, id: threadDocSnapshot.id };
    } else {
      console.error("Thread not found!");
      return null;
    }
  };

  me.getObject = async (threadId, objectId) => {
    if (!db) {
      console.error("Database not initialized!");
      return null;
    }

    const threadDocRef = doc(db, "Thread", threadId);
    const threadDocSnapshot = await getDoc(threadDocRef);

    if (threadDocSnapshot.exists()) {
      const threadData = threadDocSnapshot.data();
      const objects = threadData.objects;
      return objects[objectId];
    } else {
      console.error("Thread not found!");
      return null;
    }
  };

  me.addThread = async (thread) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }

    return await addDoc(threadRef, thread);
  };

  me.deleteThread = async (threadId) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }
  
    try {
      const threadDocRef = doc(db, "Thread", threadId);
      await deleteDoc(threadDocRef);
      console.log("Thread deleted successfully!");
    } catch (error) {
      console.error("Error deleting thread:", error);
    }
  }

  me.updateRating = async (threadId, objectId, newRating) => {
    if (!db) {
      console.error("Database not initialized!");
      return;
    }

    try {
      const threadRef = doc(db, "Thread", threadId);
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
  };

  return me;
}

export const myFirebase = new MyFirebase();