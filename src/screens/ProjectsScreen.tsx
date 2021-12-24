/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "../components/Themed";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    <Pressable
      style={styles.container}
      onPress={() => navigation.navigate("ProjectScreen")}
    >
      <Text style={styles.title}>ProjectsScreen</Text>
    </Pressable>
  );
};

export default ProjectsScreen;
