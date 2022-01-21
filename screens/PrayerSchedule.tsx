import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import moment from "moment";
import { formatDateCompare, getHourAndMinutes, unixTime } from "../utils/Date";
import { Divider } from "react-native-paper";
import { Color } from "../utils/Color";

interface Compare {
  firstTime: Date;
  lastTime: Date;
}

const PrayerSchedule = ({ dateNow }: any) => {
  const [time, setTime] = useState("");
  const date = new Date();
  const Hours = date.getHours();
  const Minutes = date.getMinutes();
  const full = date.getTime();
  const [timeSchedule, setTimeSchedule] = useState<any>({});
  const getMyData = async () => {
    const url = await fetch(
      `https://api.pray.zone/v2/times/today.json?city=yogyakarta`
    );
    const data = await url.json();
    const jadwalBaru = data.results.datetime;
    setTimeSchedule(jadwalBaru);
    for (let i = 0; i < data.results.length; i++) {
      setTimeSchedule(data.results[i].datetime);
    }
  };
  useEffect(() => {
    getMyData();
  }, []);
  const compareDate = (props: Compare) => {
    return (
      Date.parse(`${formatDateCompare(date)}`) >
        Date.parse(
          `${unixTime(dateNow)} ${getHourAndMinutes(props.firstTime)}:00`
        ) &&
      Date.parse(`${formatDateCompare(date)}`) <
        Date.parse(
          `${unixTime(dateNow)} ${getHourAndMinutes(props.lastTime)}:00`
        )
    );
  };
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        data={timeSchedule}
        renderItem={({ item }) => {
          const Shubuh = item.times.Fajr;
          const Dhuhur = item.times.Dhuhr;
          const Ashar = item.times.Asr;
          const Maghrib = item.times.Maghrib;
          const Isya = item.times.Isha;
          if (`${Hours}:${Minutes}` > Shubuh) {
            console.log("Menuju Shubuh");
          }
          console.log(Shubuh, `${Hours}:${Minutes}`);
          return (
            <View key={item.date.gregorian}>
              <View>
                <Text
                  style={{
                    textAlign: "center",
                    color: Color.darkRed,
                    fontWeight: "bold",
                    fontSize: 30,
                  }}
                >
                  {item.date.gregorian}
                </Text>
                <Text style={{ textAlign: "center", color: "gray" }}>
                  {item.date.hijri}
                </Text>
              </View>
              <Divider
                style={{
                  borderWidth: 0.7,
                  borderColor: Color.lightBrown,
                  marginVertical: 10,
                  backgroundColor: Color.lightBrown,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Shubuh</Text>
                <Text>{`${Hours}:${Minutes}` > Isya || `${Hours}:${Minutes}` < Shubuh ? `Menuju Shubuh ${Shubuh}` : Shubuh} (WIB)</Text>
              </View>
              <Divider
                style={{
                  borderWidth: 0.7,
                  borderColor: Color.lightBrown,
                  marginVertical: 10,
                  backgroundColor: Color.lightBrown,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Dhuhur</Text>
                <Text>{`${Hours}:${Minutes}` > Shubuh || `${Hours}:${Minutes}` < Dhuhur ? `Menuju Dhuhur ${Shubuh}` : Shubuh} (WIB)</Text>
              </View>
              <Divider
                style={{
                  borderWidth: 0.7,
                  borderColor: Color.lightBrown,
                  marginVertical: 10,
                  backgroundColor: Color.lightBrown,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Ashar</Text>
                <Text>{Ashar} (WIB)</Text>
              </View>
              <Divider
                style={{
                  borderWidth: 0.7,
                  borderColor: Color.lightBrown,
                  marginVertical: 10,
                  backgroundColor: Color.lightBrown,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Maghrib</Text>
                <Text>
                  {Maghrib < time ? `${Maghrib} ` : `Menuju Maghrib ${Maghrib}`}
                  (WIB)
                </Text>
              </View>
              <Divider
                style={{
                  borderWidth: 0.7,
                  borderColor: Color.lightBrown,
                  marginVertical: 10,
                  backgroundColor: Color.lightBrown,
                }}
              />
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text>Isya</Text>
                <Text>{Isya > time ? `` : `Menuju Isya ${Isya}`} (WIB)</Text>
              </View>
              <Divider
                style={{
                  borderWidth: 0.7,
                  borderColor: Color.lightBrown,
                  marginVertical: 10,
                  backgroundColor: Color.lightBrown,
                }}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default PrayerSchedule;
