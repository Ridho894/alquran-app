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
import DetailSurah from "../screens/DetailSurah";
import PrayerSchedule from "../screens/PrayerSchedule";

const Stack = createNativeStackNavigator();

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
              onPress={() =>
                navigation.navigate("DashboardSurah")
              }
            />
          ),
        }}
      />
      <Stack.Screen name="DashboardSurah" component={DashboardSurah} />
      <Stack.Screen name="DetailSurah" component={DetailSurah} />
      <Stack.Screen name="PrayerSchedule" component={PrayerSchedule} />
    </Stack.Navigator>
  );
};

// export const SurahStack = () => {
//   return (
//     <Stack.Navigator
//       initialRouteName={"DashboardSurah"}
//       screenOptions={{ headerShown: false }}
//     >
      
//     </Stack.Navigator>
//   );
// };
