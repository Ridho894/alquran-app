import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { Caption } from "react-native-paper";
import { Layouts } from "../../utils/Layouts";

const logo = require("../../assets/icon-64.png");

const About = () => {
  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <Image source={logo} style={{ alignSelf: "center" }} />
        <Text style={{ textAlign: "center", fontSize: 20, marginVertical: 30 }}>
          Baca Al-Qur'an dimana saja. Tanpa iklan, tanpa analitik dan GRATIS
          sepenuhnya...
        </Text>
        <Text style={{ textAlign: "center" }}>Sumber Data Web Ini:</Text>
        <View
          style={{
            flexDirection: "column",
            justifyContent: "space-between",
            height: Layouts.HeightScreen / 5,
            marginVertical: 20,
          }}
        >
          <Text>
            {"\u2022"} Quran.JSON oleh Rio Astamal untuk sumber data ayat-ayat
            Al Qur'an.
          </Text>
          <Text>{"\u2022"} Jagad.id untuk data Asmaul Husna Qur'an. </Text>
          <Text>
            {"\u2022"} Doa Harian Islami untuk data doa-doa harian Qur'an
          </Text>
          <Text>{"\u2022"} islam.nu.or.id untuk bacaan tahlil dan wirid</Text>
        </View>
        <Text style={{ textAlign: "center", fontWeight: "bold" }}>
          Bila Anda ingin menyampaikan saran, kritik atau menemukan kesalahan
          pada aplikasi ini, silahkan hubungi +62888-0644-6929
        </Text>
        <Caption style={{ textAlign: "center", marginTop: 100 }}>
          Dibuat oleh Muhamad Ridho Budikusuma
        </Caption>
      </View>
    </ScrollView>
  );
};

export default About;
