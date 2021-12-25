/* eslint-disable import/namespace */
import React, { useState } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";

import { signUp } from "../api";
import { createAuth } from "../redux/actions";

import styles from "./styles/AuthScreensStyle";

const SignUpScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const response = await signUp(email, password);
      dispatch(
        createAuth({ isAuth: true, id: response.id, token: response.token })
      );
      navigation.navigate("Root");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        style={styles.textInput}
      />
      <TextInput
        placeholder="Password"
        onChangeText={setPassword}
        secureTextEntry
        style={styles.textInput}
      />
      <Pressable onPress={onSubmit} style={styles.signInButton}>
        <Text style={styles.signInButtonText}>Sign Up</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignInScreen")}
        style={styles.signUpNavigator}
      >
        <Text style={styles.signUpNavigatorText}>
          Already have account ?{" "}
          <Text style={styles.signUpNavigatorLink}>Sign In</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default SignUpScreen;
