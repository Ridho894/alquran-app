import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { StackScreenProps } from "@react-navigation/stack";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";
import moment from "moment";
import { DoaStack, HomeStack, NewsStack } from "./Stack";

const Stack = createNativeStackNavigator();

const Root = ({ navigation }: StackScreenProps<any>) => {
  const time = moment(new Date());
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Root"}>
        <Stack.Screen
          name="HomeStack"
          component={HomeStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewsStack"
          component={NewsStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="DoaStack"
          component={DoaStack}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
