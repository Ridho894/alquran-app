import React, { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import data from "../../data/Daily-Doa.json";
import { List } from "react-native-paper";
import { Color } from "../../utils/Color";
import { TextInput } from "react-native-paper";

const DailyDoa = () => {
  const [dataDoa, setDataDoa] = useState(data.data);
  const [search, setSearch] = useState("");
  // make search data asmaul husna
  const searchData = (search: any) => {
    const newData = data.data.filter((item) => {
      return item.title.toLowerCase().includes(search.toLowerCase());
    });
    setDataDoa(newData);
  };
  return (
    <ScrollView>
      <View>
        <TextInput
          placeholder="Search"
          mode="outlined"
          value={search}
          style={{ margin: 20 }}
          // searchable
          onChangeText={(text) => {
            setSearch(text);
            searchData(text);
          }}
        />
        {search ? (
          <>
            {dataDoa.map((index) => (
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
          </>
        ) : (
          <>
            {dataDoa.map((index) => (
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
          </>
        )}
      </View>
    </ScrollView>
  );
};

export default DailyDoa;
