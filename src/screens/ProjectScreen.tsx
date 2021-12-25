import React from "react";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

// eslint-disable-next-line import/namespace
import { View, Text, FlatList } from "react-native";

import { Image, Divider } from "../designs";
import { handleStatusColor } from "../utils";
import styles from "./styles/ProjectScreenStyle";
import OptionNavigator from "../components/OptionNavigator";
import { Feather, MaterialIcons } from "@expo/vector-icons";

const ProjectScreen = () => {
  const navigation = useNavigation();
  const list = [
    {
      id: 0,
      name: "specifications",
      icon: <Feather name="settings" size={24} color="black" />,
      cb: () => navigation.navigate("EstimateScreen"),
    },
    {
      id:1,
      name: "Estimate",
      icon: <Feather name="edit" size={24} color="black" />,
      cb: () => console.log("2"),
    },
    {
      id:2,
      name: "Punch List",
      icon: <Feather name="check-circle" size={24} color="black" />,
      cb: () => console.log("3"),
    },
    {
      id:3,
      name: "schedule",
      icon: <MaterialIcons name="date-range" size={24} color="black" />,
      cb: () => console.log("4"),
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>Hart Project</Text>
          <Text
            style={[styles.status, { color: handleStatusColor("In progress") }]}
          >
            In Progress
          </Text>
        </View>
        <Text style={styles.cost}>$12,500</Text>
      </View>
      <View style={styles.projectImage}>
        <Image
          uri="https://images.victorianplumbing.co.uk/images/ALPSFS_nl.jpg"
          width={360}
          height={300}
          style={{ borderRadius: 4 }}
        />
      </View>

      <FlatList
        data={list}
        ItemSeparatorComponent={Divider}
        renderItem={({ item, index }) => (
          <OptionNavigator
            key={item.id}
            name={item.name}
            icon={item.icon}
            cb={item.cb}
          />
        )}
      />
    </View>
  );
};

export default ProjectScreen;
