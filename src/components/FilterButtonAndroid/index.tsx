/* eslint-disable import/namespace */
import { useState } from "react";
import {
  View,
  Alert,
  TextInput,
  TouchableOpacity,
  Platform,
  StyleSheet
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch } from "react-redux";
import { filterProjects } from "../../redux/actions";

const FilterButton = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  console.log(name);




  const filter = (value: string) => {
    console.log('fsdfs',value);
    dispatch(filterProjects(value));
    setOpen(false);
    setName('')
  };

  const styles = StyleSheet.create({
    container:{
      flexDirection: "row",
      alignItems: "center",
      marginHorizontal: 16,
      padding:4,
      borderWidth: open ? 0.4 : 0,
      borderColor: "lightgray",
      borderRadius:8,

    },
    textInput:{
      marginHorizontal: 16,
      width: 135
    }
  })

  return (
    <View style={styles.container}>
      {open && (<TextInput style={styles.textInput} placeholder="Name" onChangeText={setName}/>)}
      <AntDesign
        onPress={() => name.length > 0 ? filter(name) : setOpen((c)=> !c)}
        name="search1"
        size={24}
        color="#0079FB"
      />
    </View>
  );
};

export default FilterButton;
