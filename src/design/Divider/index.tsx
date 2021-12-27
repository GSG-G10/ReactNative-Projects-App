/* eslint-disable import/namespace */
import { StyleSheet, View } from "react-native";

const styles = StyleSheet.create({
  divider: {
    backgroundColor: "lightgrey",
    height: 1,
  },
});

const Divider = () => <View style={styles.divider} />;

export default Divider;
