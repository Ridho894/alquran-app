import React from "react";
import { View, Text, ScrollView, TouchableWithoutFeedback } from "react-native";
import TimeBox from "../components/TimeBox";

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ margin: 20 }}>
        <TimeBox onPress={() => props.navigation.navigate("PrayerSchedule")} />
      </View>
    </ScrollView>
  );
};

export default Home;
