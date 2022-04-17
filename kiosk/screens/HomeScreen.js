import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import { manipulateDoor, getData } from "../firebase/firebaseFunctions";

export default function HomeScreen() {
  const { user, logout } = useContext(AuthContext);
  const [userName, setUserName] = useState("");
  const [profilePic, setProfilePic] = useState(null);

  useEffect(() => {
    setUserName(user.displayName);
    setProfilePic(user.photoURL);
  }, []); //ComponentDidMount

  return (
    <View style={styles.container}>
      <Text>Welcome {userName}</Text>
      <Image style={styles.profileImage} source={{ uri: profilePic }} />
      <Button title="Open Door 1" onPress={() => manipulateDoor(false, 1)} />
      <Button title="Close Door 1" onPress={() => manipulateDoor(true, 1)} />
      <Button title="Open Door 2" onPress={() => manipulateDoor(false, 2)} />
      <Button title="Close Door 2" onPress={() => manipulateDoor(true, 2)} />
      <Button onPress={logout} title="Log Out" />
    </View>
  );
}
