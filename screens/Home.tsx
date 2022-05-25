import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ImageBackground, Image } from "react-native";
import { Button } from "react-native-paper";
import { Layouts } from "../utils/Layouts";

const menus = [
  { id: 1, title: "Baca Quran", href: "BacaQuran" },
  { id: 2, title: "Asmaul Husna", href: "BacaQuran" },
  { id: 3, title: "Doa Harian", href: "BacaQuran" },
  { id: 4, title: "Tahlil", href: "BacaQuran" },
  { id: 5, title: "Wirid", href: "BacaQuran" },
];

const Home = (props: any) => {
  const navigation = useNavigation();
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
        {menus.map((menu) => (
          <Button
            color="white"
            key={menu.id}
            labelStyle={{ color: "white" }}
            style={{
              borderColor: "white",
              borderWidth: 2,
              marginVertical: 10,
              width: Layouts.WidthScreen / 1.5,
            }}
            onPress={() =>
              props.navigation.navigate("DoaStack", { screen: "DailyDoa" })
            }
          >
            {menu.title}
          </Button>
        ))}
      </View>
    </ImageBackground>
  );
};

export default Home;
