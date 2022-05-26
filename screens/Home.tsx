import React from "react";
import { View, ImageBackground, Image } from "react-native";
import { Button } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { Layouts } from "../utils/Layouts";

const Home = ({ navigation }: StackScreenProps<any>) => {
  return (
    <ImageBackground
      source={require("../assets/bg.jpg")}
      style={{
        width: Layouts.WidthScreen,
        height: Layouts.HeightScreen,
      }}
    >
      <View
        style={{
          width: Layouts.WidthScreen,
          height: Layouts.HeightScreen,
          backgroundColor: "black",
          position: "absolute",
          opacity: 0.5,
        }}
      />
      <View style={{ alignItems: "center", justifyContent: "center", flex: 1 }}>
        <Image
          source={require("../assets/quran.png")}
          style={{ width: 50, height: 50, marginBottom: 30 }}
        />
        <Button
          color="white"
          labelStyle={{ color: "white" }}
          style={{
            borderColor: "white",
            borderWidth: 2,
            marginVertical: 10,
            width: Layouts.WidthScreen / 1.5,
          }}
          onPress={() =>
            navigation.navigate("SurahStack", {
              screen: "DashboardSurah",
            })
          }
        >
          Baca Quran
        </Button>
        <Button
          color="white"
          labelStyle={{ color: "white" }}
          style={{
            borderColor: "white",
            borderWidth: 2,
            marginVertical: 10,
            width: Layouts.WidthScreen / 1.5,
          }}
          onPress={() =>
            navigation.navigate("DoaStack", { screen: "DailyDoa" })
          }
        >
          Doa Harian
        </Button>
        <Button
          color="white"
          labelStyle={{ color: "white" }}
          style={{
            borderColor: "white",
            borderWidth: 2,
            marginVertical: 10,
            width: Layouts.WidthScreen / 1.5,
          }}
          onPress={() =>
            navigation.navigate("AsmaulHusnaStack", {
              screen: "AsmaulHusna",
            })
          }
        >
          Asmaul Husna
        </Button>
        <Button
          color="white"
          labelStyle={{ color: "white" }}
          style={{
            borderColor: "white",
            borderWidth: 2,
            marginVertical: 10,
            width: Layouts.WidthScreen / 1.5,
          }}
          onPress={() =>
            navigation.navigate("HomeStack", { screen: "PrayerSchedule" })
          }
        >
          Jadwal Sholat
        </Button>
        <Button
          color="white"
          labelStyle={{ color: "white" }}
          style={{
            borderColor: "white",
            borderWidth: 2,
            marginVertical: 10,
            width: Layouts.WidthScreen / 1.5,
          }}
          onPress={() =>
            navigation.navigate("DoaStack", { screen: "DailyDoa" })
          }
        >
          Tahlil & Wirid
        </Button>
      </View>
    </ImageBackground>
  );
};

export default Home;
