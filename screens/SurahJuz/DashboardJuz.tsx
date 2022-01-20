import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TouchableNativeFeedback } from "react-native";
import { Surah, Verse } from "quran-kemenag/dist/intefaces";
import QuranKemenag from "quran-kemenag";

interface HomeScreenProps {
  navigation: any;
}

interface JuzItemProps {
  data: Verse;
  onPress: () => void;
}

const DashboardJuz = (props: HomeScreenProps) => {
  const [listOfSurah, setListOfSurah]: [
    listOfSurah: Surah[],
    setListOfSurah: (value: any) => void
  ] = useState([]);

  const getData = async () => {
    const quran = new QuranKemenag();
    const data = await quran.getListSurah();
    setListOfSurah(data);
  };

  useEffect(() => {
    getData();
  }, []);

  const JuzItem = (props: JuzItemProps) => {
    return (
      <View>
        <Text>{props.data.juz_id}</Text>
      </View>
    );
  };
  return (
    <View>
      <Text>DashboardJuz</Text>
    </View>
  );
};

export default DashboardJuz;
