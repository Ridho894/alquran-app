import React from "react";
import { TouchableWithoutFeedback, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import { Feather } from "@expo/vector-icons";
import moment from "moment";

const Stack = createNativeStackNavigator();

export const Root = () => {
  const time = moment(new Date());
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitle: `${time.date()}`,
          headerTitleAlign: "center",
          headerShadowVisible: false,
          headerRight: () => (
            <TouchableWithoutFeedback>
              <View style={{ backgroundColor: "#dbdbdb", padding: 10, borderRadius: 15 }}>
                <Feather name="compass" color="black" size={25} />
              </View>
            </TouchableWithoutFeedback>
          ),
          headerLeft: () => (
            <TouchableWithoutFeedback>
              <View style={{ backgroundColor: "#dbdbdb", padding: 10, borderRadius: 15 }}>
                <Feather name="book-open" color="black" size={25} />
              </View>
            </TouchableWithoutFeedback>
          ),
        }}
      />
    </Stack.Navigator>
  );
};
