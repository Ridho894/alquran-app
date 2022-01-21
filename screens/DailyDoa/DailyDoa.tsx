import React from "react";
import { ScrollView, Text, View } from "react-native";
import data from "../../data/Daily-Doa.json";
import { List } from "react-native-paper";

const DailyDoa = () => {
  console.log(data, "INI DOANYA");
  return (
    <ScrollView>
      <View>
        {data.data.map((index) => (
            <List.Accordion title={index.title}>
              <List.Item title={index.arabic} titleNumberOfLines={10} />
              <List.Item title={index.translation} titleNumberOfLines={10} />
            </List.Accordion>
        ))}
      </View>
    </ScrollView>
  );
};

export default DailyDoa;
