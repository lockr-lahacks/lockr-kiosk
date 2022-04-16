import React, { useContext } from "react";
import styles from "../styles.js";
import { Text, View, TouchableOpacity } from "react-native";
import { AuthContext } from "../navigation/AuthProvider.js";

export default function LoginScreen() {
  const { login } = useContext(AuthContext);
  return (
    <View style={styles.container}>
        <Text>Scan your Credit Card to Sign In!</Text>
    </View>
  );
}
