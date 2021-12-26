/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";

import { Pressable, ScrollView, StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { Card } from "../design/Card";
import { Divider } from "../designs";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f5f5fa",
    marginVertical:16,
    
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

 const iconsHandler = (type:string)=>{
  switch(type){
    case "Completed":
      return "checkcircleo";
    case "Cancelled":
      return "closecircleo";
    case "In progress":
      return "loading1"
    default:
      return "form";
  }
}


const ProjectsScreen = () => {
  const { projectsList } = useSelector((state: any) => state);
  const navigation = useNavigation();
  
  return (
    <ScrollView>
    <Pressable style={styles.container}>
      {projectsList.data.length > 0 ? projectsList.data.map((elm:any)=>(
        <Card
        key={elm.id}
        title={elm.name}
        price={elm.cost}
        icon={iconsHandler(elm.status)}
        status={elm.status}
        onPress={() => navigation.navigate("ProjectScreen",elm)}
      />
      )) : null}
    </Pressable>
    </ScrollView>
  );
};

export default ProjectsScreen;
