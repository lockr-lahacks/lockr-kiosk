import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import {manipulateDoor} from "../firebase/firebaseFunctions";

export default function ExtraScreen() {
  const { user, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Button title="Open Door 1" onPress={() =>manipulateDoor(false,1)}/>
      <Button title="Close Door 1" onPress={() =>manipulateDoor(true, 1)}/>
      <Button title="Open Door 2" onPress={() =>manipulateDoor(false,2)}/>
      <Button title="Close Door 2" onPress={() =>manipulateDoor(true, 2)}/>     
      <Button onPress={logout} title="Log Out" />
      <Text>An Extra Screen</Text>
    </View>
  );
}
