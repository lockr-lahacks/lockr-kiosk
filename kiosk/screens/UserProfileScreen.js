import React from "react";
import styles from "../styles.js";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";
import { setConfig } from "../firebase/firebaseFunctions";

export default function UserProfileScreen() {
  return (
    <View style={styles.containeruser}>
      <Text style={styles.containeruser1}>Lockr Configuration Screen</Text>
      <Formik
        initialValues={{ itemUseTerm: "" }}
        onSubmit={(values) =>
          setConfig(
            2,
            "bruh",
            values.itemUseTerm,
            values.costForUse,
            values.deadlineFee
          )
        }
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View >
            <TextInput
              onChangeText={handleChange("itemUseTerm")}
              onBlur={handleBlur("itemUseTerm")}
              value={values.itemUseTerm}
              inputProps={{style: {fontSize: 20}}}
              InputLabelProps={{style: {fontSize: 20}}}
              
              placeholder="Term for item use"
            />
            <TextInput
              onChangeText={handleChange("costForUse")}
              onBlur={handleBlur("costForUse")}
              value={values.costForUse}
              inputProps={{style: {fontSize: 20}}}
              InputLabelProps={{style: {fontSize: 20}}}
              placeholder="Cost for item use"
            />
            <TextInput
              onChangeText={handleChange("deadlineFee")}
              onBlur={handleBlur("deadlineFee")}
              value={values.deadlineFee}
              inputProps={{style: {fontSize: 20}}}
              InputLabelProps={{style: {fontSize: 20}}}
              placeholder="Fee for deadline"
            />

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
