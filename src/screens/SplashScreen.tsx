/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View,Text } from "react-native";
import { useDispatch } from "react-redux";

import { getData } from "../api";


import storeData from '../redux/actions';

const SplashScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();


  useEffect(() => {
    const requestData = async() => {
      const result = await getData('projects');
      return dispatch(storeData(result))
    };
    requestData()
    
    setTimeout(() =>{
      return navigation.navigate('Root');
    },2000)
  });

  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
    >
      <Text>
        Splash
      </Text>
    </View>
  );
};


export default SplashScreen;
