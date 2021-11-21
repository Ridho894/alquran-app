import React from "react";
import { View, Text } from "react-native";
import moment from "moment";

const PrayerSchedule = () => {
  const date = new Date();
  const formatDate = moment(date).format("DD-MM-YYYY");
  return (
    <View>
      <Text>PrayerSchedule</Text>
    </View>
  );
};

export default PrayerSchedule;
