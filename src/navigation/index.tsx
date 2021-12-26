/* eslint-disable import/namespace */
import { MaterialIcons, Ionicons, AntDesign } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";
import { ColorSchemeName, Pressable } from "react-native";

import Colors from "../constants/Colors";
import useColorScheme from "../hooks/useColorScheme";
import NotFoundScreen from "../screens/NotFoundScreen";
import * as Screens from "../screens";
import {
  RootStackParamList,
  RootTabParamList,
  RootTabScreenProps,
} from "../types";
import LinkingConfiguration from "./LinkingConfiguration";
import { StatusBar } from "expo-status-bar";

var TabBarIcon = (props: {
  name: React.ComponentProps<typeof MaterialIcons>["name"];
  color: string;
}) => {
  return <MaterialIcons size={30} style={{ marginBottom: -3 }} {...props} />;
};

const BottomTab = createBottomTabNavigator<RootTabParamList>();

var BottomTabNavigator = () => {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme].tint,
      }}
    >
      <BottomTab.Screen
        name="TabOne"
        component={Screens.ProjectsScreen}
        options={({ navigation }: RootTabScreenProps<"TabOne">) => ({
          title: "Projects",
          tabBarIcon: ({ color }) => (
            <MaterialIcons name="storefront" size={24} color={color} />
          ),
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate("NewProjectScreen")}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
                marginRight: 24,
              })}
            >
              <AntDesign name="pluscircleo" size={24} color="black" />
            </Pressable>
          ),
        })}
      />
      <BottomTab.Screen
        name="TabTwo"
        component={Screens.MessagesScreen}
        options={({ navigation }: RootTabScreenProps<"TabTwo">) => ({
          title: "Messages",
          tabBarIcon: ({ color }) => (
            <Ionicons name="chatbubble-outline" size={24} color={color} />
          ),
        })}
      />
    </BottomTab.Navigator>
  );
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SplashScreen"
        component={Screens.SplashScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignInScreen"
        component={Screens.SignInScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SignUpScreen"
        component={Screens.SignUpScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Root"
        component={BottomTabNavigator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ProjectScreen"
        component={Screens.ProjectScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="EstimateScreen"
        component={Screens.Estimate}
        options={{ title: "Estimate" }}
      />
      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: "Oops!" }}
      />
      <Stack.Group>
        <Stack.Screen
          name="NewProjectScreen"
          component={Screens.NewProjectScreen}
          options={{ title: "New Project" }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
};
const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  return (
    <NavigationContainer
      linking={LinkingConfiguration}
      theme={colorScheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <RootNavigator />
    </NavigationContainer>
  );
};
export default Navigation;
