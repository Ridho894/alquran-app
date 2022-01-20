import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import { Color } from "../utils/Color";
import DashboardSurah from "../screens/SurahJuz/DashboardSurah";
import DetailSurah from "../screens/SurahJuz/DetailSurah";
import PrayerSchedule from "../screens/PrayerSchedule";
import DashboardJuz from "../screens/SurahJuz/DashboardJuz";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Dashboard from "../screens/SurahJuz/Dashboard";
import DailyDoa from "../screens/SurahJuz/DailyDoa";
import News from "../screens/News/News";

const Stack = createNativeStackNavigator();
const TopTab = createMaterialTopTabNavigator();

export const HomeStack = ({ navigation }: any) => {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: true }}
      initialRouteName={"Home"}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerRight: () => (
            <TouchableWithoutFeedback>
              <Feather name="compass" color="black" size={25} />
            </TouchableWithoutFeedback>
          ),
          headerLeft: () => (
            <Feather
              name="book-open"
              color="black"
              size={25}
              onPress={() => navigation.navigate("Dashboard")}
            />
          ),
        }}
      />
      <Stack.Screen
        name="Dashboard"
        component={SurahStack}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="DetailSurah" component={DetailSurah} />
      <Stack.Screen name="PrayerSchedule" component={PrayerSchedule} />
    </Stack.Navigator>
  );
};

export const SurahStack = () => {
  return (
    <>
      <Dashboard />
      <TopTab.Navigator
        initialRouteName={"DashboardSurah"}
        screenOptions={{
          tabBarIndicatorStyle: { backgroundColor: Color.darkRed },
        }}
      >
        <TopTab.Screen
          name="DashboardSurah"
          component={DashboardSurah}
          options={{ title: "Surah" }}
        />
        <TopTab.Screen
          name="DashboardJuz"
          component={DashboardJuz}
          options={{ title: "Juz" }}
        />
      </TopTab.Navigator>
    </>
  );
};

export const DoaStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="DailyDoa" component={DailyDoa} />
    </Stack.Navigator>
  );
};

export const NewsStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="News" component={News} />
    </Stack.Navigator>
  );
};
