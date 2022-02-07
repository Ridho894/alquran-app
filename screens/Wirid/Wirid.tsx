import React from "react";
import { ScrollView, Text, View } from "react-native";
import data from "../../data/Wirid.json";
import { List } from "react-native-paper";
import { Color } from "../../utils/Color";

const Wirid = () => {
  return (
    <ScrollView>
      <View>
        {data.data.map((index) => (
          <View
            key={index.id}
            style={{
              backgroundColor: Color.darkRed,
              marginVertical: 10,
              margin: 20,
              paddingHorizontal: 10,
              paddingVertical: 20,
              borderRadius: 10,
            }}
          >
            <Text style={{ color: Color.lightWhite }}>{index.arabic}</Text>
            <Text style={{ color: Color.lightWhite }}>{index.times}X</Text>
            <Text style={{ color: Color.lightWhite }}>{index.tnc}</Text>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Wirid;
