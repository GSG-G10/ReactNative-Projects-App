/* eslint-disable import/namespace */
import { MaterialIcons } from '@expo/vector-icons'; 
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName, Pressable } from 'react-native';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import NotFoundScreen from '../screens/NotFoundScreen';
import * as Screens from '../screens';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';


var TabBarIcon = (props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  color: string;
}) => {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const BottomTab = createBottomTabNavigator<RootTabParamList>();

var BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}>
      <BottomTab.Screen
        name="TabOne"
        component={Screens.ProjectsScreen}
        options={({ navigation }: RootTabScreenProps<'TabOne'>) => ({
          title: 'Projects',
          tabBarIcon: ({ color }) => <MaterialIcons name="storefront" size={24} color={color} />,
          
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Screens.MessagesScreen}
        options={({ navigation }: RootTabScreenProps<'TabTwo'>) => ({
          title: 'Messages',
          tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />,
          
        })}
      />
    </BottomTab.Navigator>
  );
}

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      {/* <Stack.Screen name="SplashScreen" component={Screens.SplashScreen} options={{ headerShown: false }} /> */}
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      
    </Stack.Navigator>
  );
}
const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <RootNavigator />
    </NavigationContainer>
  );
}
export default Navigation