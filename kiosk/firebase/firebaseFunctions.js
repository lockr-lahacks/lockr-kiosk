import firebase from "firebase";
import apiKeys from "../config/apiKeys";
import * as Google from "expo-google-app-auth";
let app;
if (!firebase.apps.length) app = firebase.initializeApp(apiKeys.firebaseConfig);
else app = firebase.app();
export const db = app.database();
console.log("Firebase set up!");

export async function logout() {
  try {
    db.ref("currCard").set(null);
  } catch (e) {
    console.error(e);
  }
}

//open or close door with isClosed to true if closed, to false if open, states with a doorID number
export async function manipulateDoor(isClosed, doorID){
  try {
    db.ref("lockrs/"+doorID).set({
      closed: isClosed,
    });
  }
  catch (e) {
    console.error(e);
  }
}

