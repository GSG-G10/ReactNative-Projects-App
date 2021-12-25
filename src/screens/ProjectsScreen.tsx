/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";

import {Pressable, StyleSheet } from "react-native";

import { Card } from "../design/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5fa",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const ProjectsScreen = () => {
  const navigation = useNavigation();
  return (
    <Pressable style={styles.container}>
      <Card
        title="card"
        price="2523 $"
        icon="clockcircleo"
        status="In Progress"
        onPress={() => navigation.navigate("ProjectScreen")}
      />
      
      <Card
        title="card"
        price="2523 $"
        icon="closecircleo"
        status="Cancelled"
        onPress={() => navigation.navigate("ProjectScreen")}
      />
      <Card
        title="card"
        price="2523 $"
        icon="closecircleo"
        status="Cancelled"
        onPress={() => navigation.navigate("ProjectScreen")}
      />
    </Pressable>
  );
};

export default ProjectsScreen;
