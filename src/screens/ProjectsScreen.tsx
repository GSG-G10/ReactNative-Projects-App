/* eslint-disable import/namespace */
import { StyleSheet } from "react-native";

import { View } from "../components/Themed";
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
  return (
    <View style={styles.container}>
      <Card
        title="card"
        price="2523 $"
        icon="clockcircleo"
        status="In Progress"
        onPress={() => console.log("hello card")}
      />
      <Card
        title="card"
        price="2523 $"
        icon="closecircleo"
        status="Cancelled"
        onPress={() => console.log("hello card")}
      />
      <Card
        title="card"
        price="2523 $"
        icon="closecircleo"
        status="Cancelled"
        onPress={() => console.log("hello card")}
      />
    </View>
  );
};

export default ProjectsScreen;
