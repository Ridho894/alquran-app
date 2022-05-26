import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import moment from "moment";
import { formatDateCompare, getHourAndMinutes, unixTime } from "../utils/Date";
import { Divider } from "react-native-paper";
import { Color } from "../utils/Color";

const PrayerSchedule = ({ dateNow }: any) => {
  return (
    <View style={{ margin: 20 }}>
      <Text>PRayer Scehdule</Text>
    </View>
  );
};

export default PrayerSchedule;
