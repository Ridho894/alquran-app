import React, { Fragment, useEffect, useState } from "react";
import QuranKemenag from "quran-kemenag";
import { Verse } from "quran-kemenag/dist/intefaces";
import {
  View,
  Text,
  ScrollView,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import { Color } from "../../utils/Color";
import Modal from "../../components/Modal";

interface DetailScreenProps {
  navigation: any;
  route: any;
}

interface VerseItemProps {
  data: Verse;
}

const VerseItem = (props: VerseItemProps) => {
  const [visible, setVisible] = useState<boolean>(false);
  const [idSurah, setIdSurah] = useState<number>(0);
  const handleOpenModal = () => {
    setVisible(true);
  };
  return (
    <Fragment>
      <TouchableOpacity
        onPress={() => {
          setIdSurah(props.data.verse_number);
          handleOpenModal();
        }}
      >
        <View style={{ paddingBottom: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                backgroundColor: Color.lightBrown,
                padding: 5,
                height: 30,
                width: 30,
                textAlign: "center",
                borderRadius: 20,
                color: "white",
              }}
            >
              {props.data.verse_number}
            </Text>
            <Text style={{ fontSize: 20, margin: 10 }}>
              {props.data.verse_arabic}
            </Text>
          </View>
          <Text>{props.data.verse_bahasa}</Text>
        </View>
      </TouchableOpacity>
      <Modal visible={visible} onClose={() => setVisible(false)} />
    </Fragment>
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
      <Text style={{ textAlign: "center" }}>
        {surah ? surah.surah_name : ""}
      </Text>
      <Text style={{ textAlign: "center" }}>
        {surah ? surah.surah_name_bahasa : ""}
      </Text>
      <Text style={{ textAlign: "center" }}>
        {surah ? `${surah.surah_verse_count} VERSES` : ""}
      </Text>
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
