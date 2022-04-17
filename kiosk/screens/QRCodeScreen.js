import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import {manipulateDoor} from "../firebase/firebaseFunctions";
import SvgQRCode from 'react-native-qrcode-svg';

export default function ExtraScreen() {
  const { userRfid, logout } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>QR Code Screen!</Text>
      <SvgQRCode value={userRfid}/>
      <Button title="Log Out" onPress={logout} />
    </View>
  );
}
