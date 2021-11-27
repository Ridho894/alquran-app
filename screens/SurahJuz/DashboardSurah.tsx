import React, { Fragment, useEffect, useState } from "react";
import { Text, View, FlatList, TouchableNativeFeedback } from "react-native";
import QuranKemenag from "quran-kemenag";
import { Surah } from "quran-kemenag/dist/intefaces";
import { Color } from "../../utils/Color";

interface HomeScreenProps {
  navigation: any;
}

interface SurahItemProps {
  data: Surah;
  onPress: () => void;
}

const DashboardSurah = (props: HomeScreenProps) => {
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

  const SurahItem = (props: SurahItemProps) => {
    return (
      <View style={{ paddingVertical: 20 }}>
        <TouchableNativeFeedback onPress={props.onPress}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  backgroundColor: Color.lightBrown,
                  height: 40,
                  width: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 50,
                }}
              >
                <Text style={{ color: Color.lightWhite }}>
                  {props.data.surah_id}
                </Text>
              </View>
              <View style={{ left: 20 }}>
                <Text>{props.data.surah_name}</Text>
                <Text>{`${props.data.surah_name_bahasa} ${props.data.surah_verse_count}`}</Text>
              </View>
            </View>
            <View>
              <Text style={{ fontSize: 25 }}>
                {props.data.surah_name_arabic}
              </Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <View>
      <FlatList
        data={listOfSurah}
        keyExtractor={(s) => `${s.surah_id}`}
        renderItem={({ item, index }) => {
          const onPress = () => {
            props.navigation.navigate("DetailSurah", {
              surahNumber: item.surah_id,
            });
          };
          return (
            <View style={{ marginHorizontal: 20 }}>
              <SurahItem key={index} data={item} onPress={onPress} />
            </View>
          );
        }}
        nestedScrollEnabled={false}
      />
    </View>
  );
};

export default DashboardSurah;
