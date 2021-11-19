import React, { useEffect, useState } from "react";
import QuranKemenag from "quran-kemenag";
import { Verse } from "quran-kemenag/dist/intefaces";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";

interface DetailScreenProps {
  navigation: any;
  route: any;
}

interface VerseItemProps {
  data: Verse;
}

const DetailSurah = (props: DetailScreenProps) => {
  const [surah, setSurah]: [surah: any, setSurah: any] = useState(null);
  const [verses, setVerses]: [verses: any[], setVerses: any] = useState([]);
  useEffect(() => {
    const { surahNumber } = props.route.params;
    getData(surahNumber);
  }, []);

  const getData = async (surah_id: number) => {
    const quran = new QuranKemenag();
    const data = await quran.getSurah(surah_id);
    setSurah(data);
    setVerses(data.verses || []);
  };

  return (
    <View>
      <Text>{surah ? surah.surah_name : ""}</Text>
      <Text>{surah ? surah.surah_name : ""}</Text>
      <Text>{surah ? surah.surah_name_bahasa : ""}</Text>
      <Text>{surah ? `${surah.surah_verse_count} VERSES` : ""}</Text>
    </View>
  );
};

export default DetailSurah;
