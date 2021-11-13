import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import DashboardSurah from "../screens/DashboardSurah";
import { Color } from "../utils/Color";
import { HomeStack, SurahStack } from "./Stack";

const Stack = createNativeStackNavigator();

const Root = ({ navigation }: StackScreenProps<any>) => {
  const time = moment(new Date());
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Root"}>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{
            headerTitleAlign: "center",
            headerShadowVisible: false,
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
                  navigation.navigate("SurahStack", {
                    screen: "DashboardSurah",
                  })
                }
              />
            ),
          }}
        />
        <Stack.Screen name="SurahStack" component={SurahStack} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
