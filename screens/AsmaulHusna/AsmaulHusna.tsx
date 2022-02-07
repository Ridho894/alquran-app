import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { Color } from "../../utils/Color";
import { Layouts } from "../../utils/Layouts";
import data from "../../data/Asmaul-Husna.json";
import { TextInput } from "react-native-paper";

const AsmaulHusna = () => {
  const [dataAsmaulHusna, setDataAsmaulHusna] = useState(data.data);
  const [search, setSearch] = useState("");
  // make search data asmaul husna
  const searchData = (search: any) => {
    const newData = data.data.filter((item) => {
      return item.translation_id.toLowerCase().includes(search.toLowerCase());
    });
    setDataAsmaulHusna(newData);
  };
  return (
    <ScrollView>
      <View style={{ margin: 20 }}>
        <TextInput
          placeholder="Search"
          mode="outlined"
          value={search}
          // searchable
          onChangeText={(text) => {
            setSearch(text);
            searchData(text);
          }}
        />
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            marginTop: 10,
          }}
        >
          {search ? (
            <>
              {dataAsmaulHusna.map((index) => (
                <View
                  key={index.index}
                  style={{
                    backgroundColor: Color.darkRed,
                    width: Layouts.WidthScreen / 2.3,
                    borderRadius: 20,
                    paddingVertical: 30,
                    marginVertical: 10,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {index.arabic}
                  </Text>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {index.latin}
                  </Text>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {index.translation_id}
                  </Text>
                </View>
              ))}
            </>
          ) : (
            <>
              {dataAsmaulHusna.map((index) => (
                <View
                  key={index.index}
                  style={{
                    backgroundColor: Color.darkRed,
                    width: Layouts.WidthScreen / 2.3,
                    borderRadius: 20,
                    paddingVertical: 30,
                    marginVertical: 10,
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {index.arabic}
                  </Text>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {index.latin}
                  </Text>
                  <Text style={{ color: "white", textAlign: "center" }}>
                    {index.translation_id}
                  </Text>
                </View>
              ))}
            </>
          )}
        </View>
      </View>
    </ScrollView>
  );
};

export default AsmaulHusna;
