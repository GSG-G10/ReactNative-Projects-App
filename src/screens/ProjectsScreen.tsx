/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";

import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Card } from "../design/Card";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5fa",
    marginVertical: 16,
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

const iconsHandler = (type: string) => {
  switch (type) {
    case "Completed":
      return "checkcircleo";
    case "Cancelled":
      return "closecircleo";
    case "In progress":
      return "loading1";
    case "Waiting":
      return "clockcircleo";
    default:
      return "form";
  }
};

const ProjectsScreen = () => {
  const { projectsList } = useSelector((state: any) => state);
  const navigation = useNavigation();
  const [data, setData] = useState(projectsList.data);

  useEffect(() => {
    if (projectsList.filteredData.length > 0) {
      return setData(projectsList.filteredData);
    }
    if (projectsList.data.length > data.length) {
      return setData(projectsList.data);
    }
  }, [projectsList.filteredData, projectsList.data]);

  return (
    <ScrollView>
      <Pressable style={styles.container}>
        {data.map((elm: any) => (
          <Card
            key={elm.id}
            title={elm.name}
            price={elm.cost}
            icon={iconsHandler(elm.status)}
            status={elm.status}
            onPress={() => navigation.navigate("ProjectScreen", elm)}
          />
        ))}
      </Pressable>
    </ScrollView>
  );
};

export default ProjectsScreen;
