/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/namespace */
import { useNavigation } from "@react-navigation/native";
import React, { useEffect } from "react";
import { View,Text } from "react-native";
import { DefaultRootState, useDispatch,useSelector } from "react-redux";

import { getData } from "../api";


import {storeData} from '../redux/actions';

const SplashScreen = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch();
  //@ts-ignore
  const {userAuth} = useSelector((state:DefaultRootState)=> state)


  useEffect(() => {
    const requestData = async() => {
      const result = await getData('projects');
      return dispatch(storeData(result))
    };
    requestData()
    
    setTimeout(() =>{
      if(!userAuth.value.isAuth){
        return navigation.navigate('SignInScreen')
      }else{
        return navigation.navigate('Root');
      }
    },1500)
  },[]);

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
