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
export async function manipulateDoor(isClosed, doorID) {
  try {
    db.ref(`lockrs/${doorID}/isClosed`).set(isClosed);
  } catch (e) {
    console.error(e);
  }
}

export async function createLockr(lockrId) {
  try {
    db.ref(`lockrs/${lockrId}`).set({
      lockrId: lockrId,
      isClosed: false,
      lockrItems: [],
      ownerId: "",
      location: "",
    });
  } catch (e) {
    console.error(e);
  }
}

export async function addNewLockrItem(
  lockrId,
  name,
  depositPrice,
  deadlineFee,
  duration,
  itemImage = ""
) {
  const lockrItem = {
    name: name,
    itemImage: itemImage,
    currUserId: null,
    timestampTaken: null,
    depositPrice: depositPrice,
    deadlineFee: deadlineFee,
    duration: duration,
  };

  try {
    console.log(db.ref(`lockrs/${lockrId}/lockrItem`).set(lockrItem));
  } catch (e) {
    console.error(e);
  }
}
export async function takeLockrItem(lockrId, userId) {
  try {
    db.ref(`lockrs/${lockrId}/lockrItem/currUserId`).set(userId);
    db.ref(`lockrs/${lockrId}/lockrItem/timestampTaken`).set(
      firebase.database.ServerValue.TIMESTAMP
    );
  } catch (e) {
    console.error(e);
  }
}

export async function returnLockrItem(lockrId, userId) {
  try {
    if (
      userId !=
      (await db.ref(`lockrs/${lockrId}/lockrItem/currUserId`).get()).val()
    ) {
      throw new Error("User does not own this lockr item");
    } else {
      db.ref(`lockrs/${lockrId}/lockrItem/currUserId`).set(null);
      db.ref(`lockrs/${lockrId}/lockrItem/timestampTaken`).set(null);
    }
  } catch (e) {
    console.error(e);
  }
}

export async function getLockrItemData(lockrId) {
  try {
    return (await db.ref(`lockrs/${lockrId}/lockrItem`).get()).val();
  } catch (e) {
    console.error(e);
  }
}

export async function getAllLocrItems(lockrId) {
  for (let i = 1; i <= lockrId; i++) {
    res.push(await getLockrItemData(i));
  }
  return res;
}
