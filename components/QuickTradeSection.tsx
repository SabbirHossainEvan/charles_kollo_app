import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

const TRADE_DATA = [
  {
    id: "1",
    name: "Dangote Cement",
    ticker: "DANGCEM • Nigeria",
    price: "$12,566",
    change: "0.13%",
    trend: "up",

    image: require("../assets/images/avatar.png"),
  },
  {
    id: "2",
    name: "MTN Nigeria",
    ticker: "MTNN • Nigeria",
    price: "$2,450",
    change: "1.50%",
    trend: "up",
    image: require("../assets/images/avatar.png"),
  },
  {
    id: "3",
    name: "Access Bank",
    ticker: "ACCESS • Nigeria",
    price: "$890.20",
    change: "0.45%",
    trend: "down",
    image: require("../assets/images/avatar.png"),
  },
];

const QuickTradeSection = () => {
  return (
    <View className="px-4 mt-6 pb-10">
      <Text className="text-white text-2xl font-bold mb-4">Quick Trade</Text>

      {TRADE_DATA.map((item) => (
        <TouchableOpacity
          key={item.id}
          activeOpacity={0.8}
          className="bg-[#1C1C1E] p-4 rounded-[14px] flex-row items-center justify-between mt-3 border border-[#2A2A2A]"
        >
          {/* Left Side: Icon and Name */}
          <View className="flex-row items-center flex-1">
            <View className="w-12 h-12  rounded-full items-center justify-center overflow-hidden mr-3">
              <Image
                source={item.image}
                className="w-10 h-10 rounded-full"
                resizeMode="cover"
              />
            </View>
            <View>
              <Text className="text-white text-lg font-bold tracking-tight">
                {item.name}
              </Text>
              <Text className="text-gray-500 text-[11px]  tracking-widest">
                {item.ticker}
              </Text>
            </View>
          </View>

          {/* Right Side: Price and Change */}
          <View className="items-end">
            <Text className="text-white text-lg font-bold">{item.price}</Text>
            <View className="flex-row items-center mt-1">
              <Text
                className={`text-[12px] font-bold mr-1 ${item.trend === "down" ? "text-[#EB5757]" : "text-[#27AE60]"}`}
              >
                {item.trend === "down" ? "↘" : "↗"}
              </Text>
              <Text
                className={`text-sm font-bold ${item.trend === "down" ? "text-[#EB5757]" : "text-[#27AE60]"}`}
              >
                {item.change}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default QuickTradeSection;
