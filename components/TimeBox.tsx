import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Color } from "../utils/Color";
import { Size } from "../utils/Size";

const TimeBox = ({ navigation }: any) => {
  const [currentDate, setCurrentDate] = useState("");

  useEffect(() => {
    var hours = new Date().getHours();
    var minutes = new Date().getUTCMinutes();
    setCurrentDate(hours + ":" + minutes);
  }, []);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PrayerSchedule")}
    >
      <View
        style={{
          backgroundColor: Color.darkRed,
          borderRadius: 15,
          alignItems: "center",
        }}
      >
        <View style={{ margin: 20 }}>
          <Text style={{ color: Color.lightWhite, textAlign: "center" }}>
            Dzuhur
          </Text>
          <Text
            style={{
              color: Color.lightWhite,
              textAlign: "center",
              fontWeight: "bold",
              fontSize: Size.extraLarge,
            }}
          >
            {currentDate}
          </Text>
          <Text style={{ color: Color.lightWhite, textAlign: "center" }}>
            Alamat
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default TimeBox;
