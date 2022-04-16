import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
import {db} from "../firebase/firebaseFunctions";

export default function NavigationStack() {
  const { user, setUser } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);

  //handle user state changes
  useEffect(() => {
    //listen to changes
    const onCardChange = (querySnapshot) => {
      if (querySnapshot.exists()) {
        setUser(querySnapshot.val());
        console.log("User signed in!");
        setLoading(false);
      }
      else {
        setUser("");
      }
    };
    db.ref("currCard").on("value", onCardChange);
    return () => {
      db.ref("currCard").off("value", onCardChange);
    };
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {user ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
