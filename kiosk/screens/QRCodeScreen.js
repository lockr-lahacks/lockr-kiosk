import React, { useState, useEffect, useContext } from "react";
import { AuthContext } from "../navigation/AuthProvider";
import styles from "../styles.js";
import { Text, View, Button, Image } from "react-native";
import {manipulateDoor} from "../firebase/firebaseFunctions";
import SvgQRCode from 'react-native-qrcode-svg';

export default function ExtraScreen() {
  const { userRfid, logout } = useContext(AuthContext);
  let logoFromFile = require('../assets/Lockr.png');
  return (
    <View style={styles.qrcontainer}>
       <View style={styles.topBar}><Image
        style={styles.tinyLogo}
        source={require('../assets/Lockr.png')}
      /></View>
      <Text style={styles.qrcode}>Scan the QR code to link your credit card!</Text>
      <SvgQRCode value={userRfid} size={200} 
      />
      <Button title="Log Out" onPress={logout} />
      <View style={styles.qrcodebottom}></View>
      <View style={styles.qrcodebottom2}></View>
    </View>
    
  );
}
