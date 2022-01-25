import React, { Fragment, useEffect, useState } from "react";
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
          keyExtractor={(s) => `${s.postalCode}`}
          renderItem={({ item }) => {
            return (
              <Fragment>
                <TimeBox regionName={item.city} />
              </Fragment>
            );
          }}
        />
        {/* Section 1 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
            marginVertical: 20,
          }}
        >
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate("PrayerSchedule")}
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
              <Text style={{ textAlign: "center" }}>PRAYER{"\n"}TIME</Text>
            </View>
          </TouchableWithoutFeedback>
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
        {/* Section 2 */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <TouchableWithoutFeedback
            onPress={() =>
              props.navigation.navigate("TahlilStack", {
                screen: "Tahlil",
              })
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
                <Ionicons name={"md-time-outline"} size={50} color="white" />
              </View>
              <Text>TAHLIL</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              props.navigation.navigate("AsmaulHusnaStack", {
                screen: "AsmaulHusna",
              })
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
              <Text style={{ textAlign: "center" }}>ASMAUL{"\n"}HUSNA</Text>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback
            onPress={() =>
              props.navigation.navigate("WiridStack", {
                screen: "Wirid",
              })
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
                <MaterialCommunityIcons
                  name={"newspaper"}
                  size={50}
                  color="white"
                />
              </View>
              <Text>WIRID</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
