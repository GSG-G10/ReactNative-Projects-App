// eslint-disable-next-line import/namespace
import { StyleSheet, View, FlatList } from "react-native";
import SpecificationItem from "../components/SpecificationItem";

const SpecificationsScreen = () => {

  const list = [
    {
      id: 0,
      name: "specifications",
      price: "1000$",
      cb: () => console.log("1"),
    },
    {
      id:1,
      name: "Estimate",
      price: "1000$",
      cb: () => console.log("2"),
    },
    {
      id:2,
      name: "Punch List",
      price: "1000$",
      cb: () => console.log("3"),
    },
    {
      id:3,
      name: "schedule",
      price: "1000$",
      cb: () => console.log("4"),
    },
  ];

  return(
    <View>
      <FlatList
        data={list}
        renderItem={({ item, index }) => (
          <SpecificationItem
            key={item.id}
            name={item.name}
            price={item.price}
            cb={item.cb}
          />
        )}
      />
    </View>
  )

}

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

export default SpecificationsScreen; 