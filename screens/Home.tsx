import React from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import TimeBox from "../components/TimeBox";

const Home = ({ navigation }: any) => {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ margin: 20 }}>
        <TimeBox />
        <TouchableWithoutFeedback
          onPress={() =>
            navigation.navigate("SurahStack", { screen: "DashboardSurah" })
          }
        >
          <Text>GO</Text>
        </TouchableWithoutFeedback>
      </View>
    </ScrollView>
  );
};

export default Home;
