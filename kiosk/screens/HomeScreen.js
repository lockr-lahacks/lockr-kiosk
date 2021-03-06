import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import { manipulateDoor, magic } from "../firebase/firebaseFunctions";
import Tileset from "./Tileset";

export default function HomeScreen() {
  const { userRfid, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    // setUserName(user.displayName);
    // setProfilePic(user.photoURL);
  }, []); //ComponentDidMount

  return (
    <View style={styles.container}>
      <Text style={styles.mainTitle}>Lockrs at this location</Text>

      <Tileset />
    </View>
  );
}
