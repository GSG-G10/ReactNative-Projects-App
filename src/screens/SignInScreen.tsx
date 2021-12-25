/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/namespace */
import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { DefaultRootState, useDispatch, useSelector } from "react-redux";

import { signIn } from "../api";
import { createAuth } from "../redux/actions";
import styles from "./styles/AuthScreensStyle";

const SignInScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //@ts-ignore
  const { userAuth } = useSelector((state: DefaultRootState) => state);
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      const response = await signIn(email, password);
      dispatch(
        createAuth({ isAuth: true, id: response.id, token: response.token })
      );
      return navigation.navigate("Root");
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
        <Text style={styles.signInButtonText}>Sign in</Text>
      </Pressable>
      <Pressable
        onPress={() => navigation.navigate("SignUpScreen")}
        style={styles.signUpNavigator}
      >
        <Text style={styles.signUpNavigatorText}>
          New here ? <Text style={styles.signUpNavigatorLink}>Sign up</Text>
        </Text>
      </Pressable>
    </View>
  );
};

export default SignInScreen;
