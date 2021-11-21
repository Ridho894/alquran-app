import React, { useEffect, useState } from "react";
import QuranKemenag from "quran-kemenag";
import { Verse } from "quran-kemenag/dist/intefaces";
import { View, Text, ScrollView, FlatList, SafeAreaView } from "react-native";
import { Color } from "../utils/Color";

interface DetailScreenProps {
  navigation: any;
  route: any;
}

interface VerseItemProps {
  data: Verse;
}

const VerseItem = (props: VerseItemProps) => {
  return (
    <View style={{ paddingBottom: 50 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text>{props.data.verse_number}</Text>
        <Text style={{ fontSize: 30 }}>{props.data.verse_arabic}</Text>
      </View>
      <Text>{props.data.verse_bahasa}</Text>
    </View>
  );
};

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
      <Text>{surah ? surah.surah_name_bahasa : ""}</Text>
      <Text>{surah ? `${surah.surah_verse_count} VERSES` : ""}</Text>
      <FlatList
        data={verses}
        keyExtractor={(v) => v.verse_id}
        renderItem={({ item, index }) => {
          return (
            <View
              style={{
                marginHorizontal: 20,
                // paddingVertical: 30,
                marginBottom: 20,
              }}
            >
              <VerseItem key={index} data={item} />
            </View>
          );
        }}
      />
    </View>
  );
};

export default DetailSurah;
