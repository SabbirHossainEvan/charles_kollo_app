import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, ScrollView, Text, View } from "react-native";

const StockDashboard = () => {
  const gradientColors: readonly [string, string, ...string[]] = [
    "#F6D697",
    "#C9A96A",
  ];

  const stockData = {
    totalValue: "24,945.79",
    percentageChange: "+2.4%",
    gainersCount: "1245",
    losersCount: "305",
  };

  return (
    <ScrollView className="flex-1 px-4  pt-4">
      {/* Total Stocks Card - */}
      <View className="mb-4 overflow-hidden rounded-[20px]">
        <LinearGradient
          colors={gradientColors}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="px-6 py-6 relative justify-center "
        >
          <Image
            source={require("../assets/images/Group 186.png")}
            className="absolute -right-2 top-0 w-44 h-full"
            resizeMode="contain"
          />

          <Text
            className="text-black text-xl font-semibold mb-1"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            Total Stocks
          </Text>
          <View className="flex-row items-center">
            <Text className="text-black text-4xl ">
              ${stockData.totalValue}
            </Text>
            <View className="bg-[#D1FAE5] px-2 py-0.5 rounded-[8px] ml-3">
              <Text className="text-[#065F46] font-bold text-xs">
                {stockData.percentageChange}
              </Text>
            </View>
          </View>
        </LinearGradient>
      </View>

      <View className="flex-row justify-between">
        <View className="w-[48%] overflow-hidden rounded-[20px]">
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="p-4  relative"
          >
            <View className="z-10">
              <Text
                className="text-black text-[18px] font-medium"
                style={{ fontFamily: "Oswald-Regular" }}
              >
                Gainers
              </Text>
              <Text className="text-black text-3xl font-semibold mt-2">
                {stockData.gainersCount}
              </Text>
            </View>
            <Image
              source={require("../assets/images/Group 1 (2).png")}
              className="absolute bottom-[10px] right-[-20px] w-[100%] h-[75%]"
              resizeMode="contain"
            />
          </LinearGradient>
        </View>

        <View className="w-[48%] overflow-hidden rounded-[20px]">
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="p-4  relative"
          >
            <View className="z-10">
              <Text
                className="text-black text-[18px] font-medium"
                style={{ fontFamily: "Oswald-Regular" }}
              >
                Losers
              </Text>
              <Text className="text-black text-3xl font-semibold mt-2">
                {stockData.losersCount}
              </Text>
            </View>
            <Image
              source={require("../assets/images/Group 1 (3).png")}
              className="absolute bottom-[10px] right-[-10px] w-[100%] h-[75%]"
              resizeMode="contain"
            />
          </LinearGradient>
        </View>
      </View>
    </ScrollView>
  );
};

export default StockDashboard;
