import React, { useContext } from "react";
import styles from "../styles.js";
import { Text, View, TouchableOpacity , Image} from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import { Button } from "react-native-paper";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.login}>
      <View style={styles.topBar}><Image
        style={styles.tinyLogo}
        source={require('../assets/Lockr.png')}
      /></View>
      <View style={styles.login2}><Text style={styles.login3}>Scan your Credit Card to Sign In!</Text></View>
      <View style={styles.qrcodebottom}></View>
      <View style={styles.qrcodebottom2}></View>
    </View>
  );
}
