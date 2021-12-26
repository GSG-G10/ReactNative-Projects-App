/* eslint-disable import/namespace */
import React from "react";
import { Text, StyleSheet, Pressable } from "react-native";

interface OptionNavigatorProps {
  name?: string;
  icon?: any;
  cb?: () => void;
  direction?: string;
}

const OptionNavigator = ({
  name,
  icon,
  cb,
  direction = "row",
}: OptionNavigatorProps) => {
  const styles = StyleSheet.create({
    listContainer: {
      //@ts-ignore
      flexDirection: direction,
    },
  });

  return (
    <Pressable style={styles.listContainer} onPress={cb}>
      {icon ? <Text style={{ margin: 8, padding: 16 }}>{icon}</Text> : null}
      {name ? <Text style={{ margin: 8, padding: 16 }}>{name}</Text> : null}
    </Pressable>
  );
};

export default OptionNavigator;
