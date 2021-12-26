/* eslint-disable import/namespace */
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { useDispatch, useSelector } from "react-redux";

import { firebaseStorage } from "../../api";

import { Image } from "../../designs";
import styles from "./styles";

const PickImage = () => {
  const dispatch = useDispatch();
  const [progress, setProgress] = useState(0);
  const { postImageUri } = useSelector((state: any) => state);

  const onChoosePress = async () => {
    //@ts-ignore
    const { uri, cancelled } = await ImagePicker.launchCameraAsync();

    const imageName: string = uri.split("/").slice(-1)[0];

    const response = await fetch(uri);
    const blob = await response.blob();

    if (!cancelled) {
      const result = await firebaseStorage(
        blob,
        imageName,
        setProgress,
        dispatch
      );
      console.log(result);
    }
  };

  return (
    <>
      <Pressable style={styles.container}>
        {progress ? (
          <Text style={styles.uploadingProcess}>
            {progress < 100 ? `Uploading... ${progress}%` : "Upload Done"}
          </Text>
        ) : null}

        <View style={styles.btnContainer}>
          <Feather name="camera" size={24} color="white" />
          <Text onPress={onChoosePress} style={styles.takePictureBtn}>
            Take a photo for project
          </Text>
        </View>
        {postImageUri.uri ? (
          <Image uri={postImageUri.uri} width={200} height={300} />
        ) : null}
      </Pressable>
    </>
  );
};

export default PickImage;
