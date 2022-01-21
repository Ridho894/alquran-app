import React, { useState } from "react";
import moment from "moment";
import { View, Text } from "react-native";
import { Color } from "../utils/Color";

interface TimeBoxProps {
  regionName: string;
}

const TimeBox = (props: TimeBoxProps) => {
  const [time, setTime] = useState("");

  setInterval(() => {
    var date = moment().format("LTS");
    setTime(date);
  }, 1000);

  return (
    <View
      style={{
        backgroundColor: Color.darkRed,
        borderRadius: 15,
        alignItems: "center",
      }}
    >
      <View style={{ margin: 20 }}>
        <Text style={{ color: Color.lightWhite, textAlign: "center" }}>
          {time}
        </Text>
        <Text style={{ color: Color.lightWhite, textAlign: "center" }}>
          Dzuhur
        </Text>
        <Text style={{ color: Color.lightWhite, textAlign: "center" }}>
          {props.regionName}
        </Text>
      </View>
    </View>
  );
};

export default TimeBox;
