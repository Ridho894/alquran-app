import React from "react";
import { ScrollView, Text, View } from "react-native";
import data from "../../data/Daily-Doa.json";
import { List } from "react-native-paper";
import { Color } from "../../utils/Color";

const DailyDoa = () => {
  return (
    <ScrollView>
      <View>
        {data.data.map((index) => (
          <List.Accordion
            title={index.title}
            style={{
              marginTop: 10,
              margin: 20,
              backgroundColor: Color.lightBrown,
              borderRadius: 10,
            }}
            titleStyle={{ color: Color.lightWhite }}
          >
            <List.Item title={index.arabic} titleNumberOfLines={10} />
            <List.Item title={index.translation} titleNumberOfLines={10} />
          </List.Accordion>
        ))}
      </View>
    </ScrollView>
  );
};

export default DailyDoa;
