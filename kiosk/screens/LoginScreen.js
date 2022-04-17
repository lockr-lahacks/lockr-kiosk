import React, { useContext } from "react";
import styles from "../styles.js";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";
import { Button } from "react-native-paper";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text>Scan your Credit Card to Sign In!</Text>
    </View>
  );
}
