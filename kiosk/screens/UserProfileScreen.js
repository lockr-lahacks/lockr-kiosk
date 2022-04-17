import React from "react";
import styles from "../styles.js";
import { Button, TextInput, View, Text } from "react-native";
import { Formik } from "formik";

export default function UserProfileScreen() {
  return (
    <View style={styles.container}>
      <Text>User Profile Screen</Text>
      <Formik
        initialValues={{ itemUseTerm: "" }}
        onSubmit={(values) => console.log(values)}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <View>
            <TextInput
              onChangeText={handleChange("itemUseTerm")}
              onBlur={handleBlur("itemUseTerm")}
              value={values.itemUseTerm}
              placeholder="Term for item use"
            />
            <TextInput
              onChangeText={handleChange("costForUse")}
              onBlur={handleBlur("costForUse")}
              value={values.costForUse}
              placeholder="Cost for item use"
            />
            <TextInput
              onChangeText={handleChange("deadlineFee")}
              onBlur={handleBlur("deadlineFee")}
              value={values.deadlineFee}
              placeholder="Fee for deadline"
            />

            <Button onPress={handleSubmit} title="Submit" />
          </View>
        )}
      </Formik>
    </View>
  );
}
