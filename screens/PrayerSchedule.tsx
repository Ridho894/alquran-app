import React, { useEffect, useState } from "react";
import { View, Text, FlatList } from "react-native";
import moment from "moment";
import { formatDateCompare, getHourAndMinutes, unixTime } from "../utils/Date";
import { Divider } from "react-native-paper";
import { Color } from "../utils/Color";

const PrayerSchedule = ({ dateNow }: any) => {
  const [time, setTime] = useState("");
  const [loading, setLoading] = useState(true);
  const date = new Date();
  const Hours = date.getHours();
  const Minutes = date.getMinutes();
  const [timeSchedule, setTimeSchedule] = useState<any>({});
  const getMyData = async () => {
    setLoading(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, [loading]);
  return (
    <View style={{ margin: 20 }}>
      <FlatList
        keyExtractor={(s) => `${s.date.timestamp}`}
        data={timeSchedule}
        renderItem={({ item }) => {
          const Shubuh = item.times.Fajr;
          const Dhuhur = item.times.Dhuhr;
          const Ashar = item.times.Asr;
          const Maghrib = item.times.Maghrib;
          const Isya = item.times.Isha;
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
                <Text>
                  {/* if time going to shubuh and after isya, print menuju Shubuh */}
                  {`${Hours}:${Minutes}` > Isya &&
                  `${Hours}:${Minutes}` < Shubuh
                    ? `Menuju Shubuh ${Shubuh}`
                    : Shubuh}{" "}
                  {/* then if time pass Shubuh, erase menuju Shubuh */}
                  {`${Hours}:${Minutes}` > Shubuh ? `${Shubuh} (WIB)` : ""}
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
                <Text>Dhuhur</Text>
                <Text>
                  {`${Hours}:${Minutes}` < Dhuhur
                    ? `Menuju Dhuhur ${Dhuhur}`
                    : Dhuhur}{" "}
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
                <Text>Ashar</Text>
                <Text>
                  {/* if time going to ashar, print menuju ashar */}
                  {`${Hours}:${Minutes}` < Ashar
                    ? `Menuju Ashar ${Ashar}`
                    : Ashar}{" "}
                  {/* then if time pass ashar, erase menuju ashar */}
                  {`${Hours}:${Minutes}` > Ashar ? `${Ashar} (WIB)` : ""}
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
                <Text>Maghrib</Text>
                <Text>
                  {/* if time going to maghrib and after ashar, print menuju Maghrib */}
                  {`${Hours}:${Minutes}` > Ashar &&
                  `${Hours}:${Minutes}` < Maghrib
                    ? `Menuju Maghrib ${Maghrib}`
                    : Maghrib}{" "}
                  {/* then if time pass Maghrib, erase menuju Maghrib */}
                  {`${Hours}:${Minutes}` > Maghrib ? `${Maghrib} (WIB)` : ""}
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
                <Text>
                  {/* if time going to isya and after maghrib, print menuju Isya */}
                  {`${Hours}:${Minutes}` > Maghrib &&
                  `${Hours}:${Minutes}` < Isya
                    ? `Menuju Isya ${Isya}`
                    : Isya}{" "}
                  {/* then if time pass Isya, erase menuju Isya */}
                  {`${Hours}:${Minutes}` > Isya ? `${Isya} (WIB)` : ""}
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
            </View>
          );
        }}
      />
    </View>
  );
};

export default PrayerSchedule;
