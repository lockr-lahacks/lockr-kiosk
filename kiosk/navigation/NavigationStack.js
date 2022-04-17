import React, { useContext, useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import QRCodeScreen from "../screens/QRCodeScreen";
import { AuthContext } from "./AuthProvider";
import { ActivityIndicator } from "react-native";
import {db} from "../firebase/firebaseFunctions";

export default function NavigationStack() {
  const { userRfid, setUserRfid, userUID, setUserUID } = useContext(AuthContext);
  const [initializing, setInitializing] = useState(true);
  const [loading, setLoading] = useState(true);

  //handle user state changes
  useEffect(() => {
    //listen to changes to currCard
    const onCardChange = (querySnapshot) => {
      async function bruh(){
        if (querySnapshot.exists()) {
          const userRfid = querySnapshot.val();
          setUserRfid(userRfid);
          const userUIDVal = await db.ref(`userRfids/${userRfid}`).get();
          if(userUIDVal.exists()){
            setUserUID(userUIDVal.val());
          }
          else {
            setUserUID("");
          }
          console.log("User signed in!");
        }
        else {
          setUserRfid(null);
          setUserUID(null);
        }
        setLoading(false);
      }
      bruh();
    };
    const onRfidsChange = (querySnapshot) => {
      async function bruh(){
        if (querySnapshot.exists()){
          const rfidsList = querySnapshot.val();
          for(const rfid of Object.keys(rfidsList)){
            console.log(rfid);
            const possUID=rfidsList[rfid];
            if(possUID){
              setUserUID(possUID);
              setLoading(false);
            }
          }
        }
      }
    }
    db.ref("userRfids").on("value", onRfidsChange);
    //listen to changes to userRfids
    db.ref("currCard").on("value", onCardChange);
    return () => {
      db.ref("currCard").off("value", onCardChange);
      db.ref("userRfids").off("value", onRfidsChange);
    };
  }, []);

  if (loading) {
    return <ActivityIndicator />;
  }

  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      {userRfid ? userUID ? <HomeStack /> : <QRCodeScreen/>  : <AuthStack />}
    </NavigationContainer>
  );
}
