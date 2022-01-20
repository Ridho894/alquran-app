import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import moment from "moment";

let myArray: string[] = [];

const PrayerSchedule = () => {
  const date = new Date();
  const formatDate = moment(date).format("DD-MM-YYYY");
  const [timeSchedule, setTimeSchedule] = useState<any>({});
  const getMyData = async () => {
    const url = await fetch(
      `https://api.pray.zone/v2/times/today.json?city=yogyakarta`
    );
    const data = await url.json();
    const jadwalBaru = data.results.datetime;
    setTimeSchedule(jadwalBaru);
    for (let i = 0; i < data.results.length; i++) {
      myArray.push(data.results[i].datetime);
      setTimeSchedule(data.results[i].datetime);
    }
  };
  useEffect(() => {
    getMyData();
  }, []);
  console.log(timeSchedule);
  // console.log(myArray, "array")
  return (
    <View style={{ margin: 20 }}>
      <Text>PrayerSchedule</Text>
      <FlatList
        data={timeSchedule}
        renderItem={({ item }) => {
          return (
            <View key={item.date.gregorian}>
              <Text>{item.times.Fajr}</Text>
              <Text>{item.times.Dhuhr}</Text>
              <Text>{item.times.Asr}</Text>
              <Text>{item.times.Maghrib}</Text>
              <Text>{item.times.Isha}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default PrayerSchedule;
