/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    width: "90%",
    padding: 16,
    marginBottom: 32,
    borderWidth: 1,
    borderColor: "lightgray",
    borderRadius: 4,
  },
  signInButton: {
    backgroundColor: "#0079FB",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    borderRadius: 4,
    width: "90%",
  },
  signInButtonText: {
    color: "white",
    fontSize: 20,
  },
  signUpNavigator: {
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 32,
    borderRadius: 4,
    width: "90%",
  },
  signUpNavigatorText: {
    color: "black",
    fontSize: 16,
  },
  signUpNavigatorLink: {
    color: "#0079FB",
  },
});

export default styles;
