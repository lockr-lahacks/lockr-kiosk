import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  signinButton: {
    alignItems: "center",
    backgroundColor: "#b3d0ff",
    padding: 20,
    borderRadius: 20,
  },

  profileImage: {
    height: 250,
    width: 250,
  },

  mainTitle: {
    fontSize: 40,
  },
  qrcode:{
      marginBottom: 30,
      marginTop: 50,
      fontSize: 30,
  },
  qrcontainer: {
    flex: 1,
    marginTop: 10,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    fontSize: 30,
  },
  tinyLogo:{
    marginTop: 170,
    width: 400,
    height: 200,
  },
  qrcodebottom:{
    backgroundColor: "#558B6E",
    width: 1200,
    marginTop: 100,
    height: 50,
  },
  qrcodebottom2:{
    backgroundColor: "#558B6E",
    width: 1200,
    marginTop: 20,
    height: 20,
  },
  topBar:{
    marginTop: -200,
    backgroundColor: "#558B6E",
    width: 1200,
    height: 370,
    alignItems: "center",
  }
});
