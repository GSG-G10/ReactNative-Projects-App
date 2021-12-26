import { FC } from "react";
// eslint-disable-next-line import/namespace
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Text, IconComponent } from "..";

import {handleStatusColor} from '../../utils'

type CardProps = {
  title: string;
  price: string;
  icon: string;
  status: string;
  onPress: () => void;
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginVertical: 8,
    width: "90%",
    height: 120,
    justifyContent: "space-around",
    backgroundColor: "#fff",
    borderRadius: 4,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerText: {
    color: "#32343b",
    fontSize: 20,
    fontWeight:"600",
  },
  statusContainer: {
    flexDirection: "row",
    height: "50%",
    alignItems: "center",
  },
  statusText: {
    paddingHorizontal: 10,
    fontSize: 16,
    fontWeight:"300",
  },
});

export const Card: FC<CardProps> = ({
  title,
  price,
  icon,
  status,
  onPress,
}) => (
  <TouchableOpacity style={styles.container} onPress={onPress}>
    <View style={styles.header}>
<<<<<<< HEAD
      <Text value={title} typography="h2" style={styles.headerText} />
      <Text value={price} typography="h2" style={styles.headerText} />
=======
      <TextComponent value={title} style={styles.headerText} />
      <TextComponent value={`$${price}`} style={styles.headerText} />
>>>>>>> 24e6771c95986c19c4a4230215b8e1998dda6d53
    </View>
    <View style={styles.statusContainer}>
      <IconComponent
        iconName={icon}
        color={handleStatusColor(status)}
        raised={false}
      />
<<<<<<< HEAD
      <Text value={status} style={styles.statusText} />
=======
      <TextComponent value={status} style={[{...styles.statusText,color:handleStatusColor(status)}]} />
>>>>>>> 24e6771c95986c19c4a4230215b8e1998dda6d53
    </View>
  </TouchableOpacity>
);
