import { Plus } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const WatchlistHeader = () => {
  return (
    <SafeAreaView className="flex-1  px-4">
      <View className="flex-row items-center mb-3">
        <Image
          source={require("../assets/images/Logo.png")}
          style={{ width: 160, height: 35 }}
          resizeMode="contain"
        />
      </View>

      <View className="flex-row justify-between items-center">
        <View>
          <Text
            className="text-white text-3xl"
            style={{ fontFamily: "Oswald-Bold" }}
          >
            Watchlist
          </Text>
          <Text
            className="text-gray-400 text-base mt-1"
            style={{ fontFamily: "Inter-Regular" }}
          >
            Track stocks you re interested in
          </Text>
        </View>

        <TouchableOpacity
          activeOpacity={0.8}
          className="bg-[#D4B475] flex-row items-center px-5 py-2.5 rounded-xl shadow-lg"
        >
          <Plus size={20} color="black" strokeWidth={3} />
          <Text className="text-black font-bold text-lg ml-1">Add</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WatchlistHeader;
