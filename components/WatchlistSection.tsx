import { Star } from "lucide-react-native";
import React from "react";
import { FlatList, Text, TouchableOpacity, View } from "react-native";

interface StockItem {
  id: string;
  symbol: string;
  price: string;
  change: string;
  isPositive: boolean;
}

const WatchlistSection = () => {
  const stocks: StockItem[] = [
    {
      id: "1",
      symbol: "SCOM",
      price: "4850.00",
      change: "0.13",
      isPositive: true,
    },
    {
      id: "2",
      symbol: "NPN",
      price: "4850.00",
      change: "0.13",
      isPositive: false,
    },
    {
      id: "3",
      symbol: "SBK",
      price: "4850.00",
      change: "0.13",
      isPositive: true,
    },
    {
      id: "4",
      symbol: "DANGCEM",
      price: "4850.00",
      change: "0.13",
      isPositive: true,
    },
    {
      id: "5",
      symbol: "NPN",
      price: "4850.00",
      change: "0.13",
      isPositive: false,
    },
  ];

  const renderItem = ({ item }: { item: StockItem }) => (
    <TouchableOpacity
      activeOpacity={0.7}
      className="bg-[#232323] mb-3 p-5 rounded-[15px] flex-row justify-between items-center border border-[#2A2A2A]"
    >
      <View className="flex-row items-center">
        <Star size={22} color="#888" strokeWidth={1.5} />
        <Text
          className="text-white text-lg font-semibold ml-4"
          style={{ fontFamily: "Oswald-Regular" }}
        >
          {item.symbol}
        </Text>
      </View>

      <View className="items-end">
        <Text className="text-white text-lg font-bold">${item.price}</Text>
        <View className="flex-row items-center mt-1">
          <Text
            className={`font-medium ml-1 ${item.isPositive ? "text-[#10B981]" : "text-[#EF4444]"}`}
          >
            {item.isPositive ? "↗" : "↘"} {item.change}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <View className="flex-1 mt-6 px-4">
      <FlatList
        data={stocks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        scrollEnabled={false}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default WatchlistSection;
