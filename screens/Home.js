import { useState } from "react";
import { View, SafeAreaView, FlatList } from "react-native";

import { COLORS, IData } from "../constants";
import { HomeHeader, FocusedStatusBar, ICard } from "../components";

import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const [iData, setIData] = useState(IData);

  const handleSearch = (value) => {
    if (value.length === 0) {
      setIData(IData);
    }

    const filteredData = IData.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length === 0) {
      setIData(IData);
    } else {
      setIData(filteredData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar backgroundColor={COLORS.primary} />
      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={iData}
            renderItem={({ item }) => <ICard data={item} />}
            keyExtractor={(item) => uuidv4()}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
