/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import { View, Text, Pressable, TextInput, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { postNewProject } from "../api";

import PickImage from "../components/PickImage";

import { addNewProject } from "../redux/actions";

import styles from "./styles/NewProjectStyle";

const NewProjectScreen = () => {
  const [name, setName] = useState("");
  const [cost, setCost] = useState("");
  const [description, setDescription] = useState("");

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { uri } = useSelector((state: any) => state.postImageUri);
  const imageUrl = uri;

  const post = async () => {
    if (name && uri && cost && description) {
      const response = await postNewProject({
        name,
        imageUrl,
        cost,
        description,
        status: 'Waiting'
      });
      dispatch(addNewProject(response));
      navigation.navigate("Root");
    }
  };

  return (
    <ScrollView>
      <Pressable style={styles.container}>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>Name</Text>
          <TextInput
            autoFocus
            placeholder="Home Kitchen"
            style={styles.inputField}
            value={name}
            onChangeText={setName}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>cost</Text>
          <TextInput
            keyboardType="number-pad"
            placeholder="$7500"
            style={styles.inputField}
            value={cost}
            onChangeText={setCost}
          />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.inputHeader}>Description</Text>
          <TextInput
            multiline
            placeholder="Short description about the project"
            style={styles.inputField}
            value={description}
            onChangeText={setDescription}
          />
        </View>

        <View>
          <PickImage />
        </View>
        <View style={styles.buttonContainer}>
          <Text onPress={post} style={styles.fillButton}>
            Post now
          </Text>
        </View>
      </Pressable>
    </ScrollView>
  );
};

export default NewProjectScreen;
