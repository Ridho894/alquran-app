import React from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import TimeBox from "../components/TimeBox";

const Home = () => {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ margin: 20 }}>
        <TimeBox />
      </View>
    </ScrollView>
  );
};

export default Home;
