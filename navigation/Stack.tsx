import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import DashboardSurah from "../screens/DashboardSurah";
import { Color } from "../utils/Color";

const Stack = createNativeStackNavigator();

export const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"Home"}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

export const SurahStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={"DashboardSurah"}
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="DashboardSurah" component={DashboardSurah} />
    </Stack.Navigator>
  );
};
