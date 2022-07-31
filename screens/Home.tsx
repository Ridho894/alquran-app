import React, { useState } from "react";
import { View, ImageBackground, Image } from "react-native";
import { Button } from "react-native-paper";
import { StackScreenProps } from "@react-navigation/stack";
import { Layouts } from "../utils/Layouts";
import Modal from "../components/Modal";

const Home = ({ navigation }: StackScreenProps<any>) => {
  const [showModal, setShowModal] = useState<boolean>(false);
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
          onPress={() => setShowModal(true)}
        >
          Terakhir Baca
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
      <View
        style={{
          width: Layouts.WidthScreen,
          height: Layouts.HeightScreen,
          position: "absolute",
        }}
      >
        <Modal
          onPress={() => console.log("first")}
          onClose={() => setShowModal(false)}
          visible={showModal}
          surahName="Al-Fatihah"
        />
      </View>
    </ImageBackground>
  );
};

export default Home;
