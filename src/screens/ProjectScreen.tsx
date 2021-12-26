import React from "react";
import { useNavigation } from "@react-navigation/native";

// eslint-disable-next-line import/namespace
import { View, Text, FlatList } from "react-native";

import { Image, Divider } from "../designs";
import { handleStatusColor } from "../utils";
import styles from "./styles/ProjectScreenStyle";
import OptionNavigator from "../components/OptionNavigator";
import { Feather, MaterialIcons } from "@expo/vector-icons";

export type route = object

interface ProjectScreenProps { 
  route: object;
}

const ProjectScreen = ({route}:ProjectScreenProps) => {
  const navigation = useNavigation();
  const {params}:any = route;

  const list = [
    {
      id: 0,
      name: "specifications",
      icon: <Feather name="settings" size={24} color="black" />,
      cb: (id:any) => navigation.navigate("EstimateScreen",id),
    },
    {
      id:1,
      name: "Estimate",
      icon: <Feather name="edit" size={24} color="black" />,
      cb: () => null,
    },
    {
      id:2,
      name: "Punch List",
      icon: <Feather name="check-circle" size={24} color="black" />,
      cb: () => null,
    },
    {
      id:3,
      name: "schedule",
      icon: <MaterialIcons name="date-range" size={24} color="black" />,
      cb: () => null,
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerTitle}>
          <Text style={styles.title}>{params.name}</Text>
          <Text
            style={[styles.status, { color: handleStatusColor(params.status) }]}
          >
            {params.status}
          </Text>
        </View>
        <Text style={styles.cost}>${params.cost}</Text>
      </View>
      <View style={styles.projectImage}>
        <Image
          uri={params.imageUrl}
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
            cb={()=>item.cb(params.id)}
          />
        )}
      />
    </View>
  );
};

export default ProjectScreen;
