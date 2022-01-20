import React, { useEffect, useState } from "react";
import { Entypo, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import {
  View,
  Text,
  ScrollView,
  TouchableWithoutFeedback,
  FlatList,
} from "react-native";
import TimeBox from "../components/TimeBox";
import { Color } from "../utils/Color";
import * as Location from "expo-location";

interface HomeProps {
  navigation: any;
}

const Home = (props: HomeProps) => {
  const [location, setLocation] = useState<any>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync();
      let regionName = await Location.reverseGeocodeAsync({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
      });
      setLocation(regionName);
    })();
  }, []);

  let text = "Waiting..";
  if (errorMsg) {
    text = errorMsg;
  } else if (location) {
    text = JSON.stringify(location);
  }
  return (
    <ScrollView
      style={{ backgroundColor: "white" }}
      showsVerticalScrollIndicator={false}
    >
      <View style={{ margin: 20 }}>
        <FlatList
          data={location}
          renderItem={({ item }) => {
            return (
              <>
                <TimeBox
                  onPress={() => props.navigation.navigate("PrayerSchedule")}
                  regionName={item.city}
                />
              </>
            );
          }}
        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginVertical: 20,
          }}
        >
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: Color.lightBrown,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <Ionicons name={"md-time-outline"} size={50} color="white" />
            </View>
            <Text>PRAYER TIME</Text>
          </View>
          <TouchableWithoutFeedback
            onPress={() =>
              props.navigation.navigate("DoaStack", { screen: "DailyDoa" })
            }
          >
            <View style={{ flexDirection: "column", alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: Color.lightBrown,
                  padding: 10,
                  borderRadius: 10,
                }}
              >
                <Entypo name={"book"} size={50} color="white" />
              </View>
              <Text>DO'A</Text>
            </View>
          </TouchableWithoutFeedback>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: Color.lightBrown,
                padding: 10,
                borderRadius: 10,
              }}
            >
              <MaterialCommunityIcons
                name={"newspaper"}
                size={50}
                color="white"
              />
            </View>
            <Text>NEWS</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
