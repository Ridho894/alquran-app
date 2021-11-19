import React, { Fragment, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  ScrollView,
  TouchableNativeFeedback,
} from "react-native";
import QuranKemenag from "quran-kemenag";
import { Surah } from "quran-kemenag/dist/intefaces";

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
          <View>
            <Text>{props.data.surah_id}</Text>
            <View>
              <Text>{props.data.surah_name_arabic}</Text>
              <Text>{props.data.surah_name}</Text>
            </View>
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  };

  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
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
              <View>
                <SurahItem key={index} data={item} onPress={onPress} />
              </View>
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default DashboardSurah;

const styles = StyleSheet.create({});
