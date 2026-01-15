import { router } from "expo-router";
import React, { useState } from "react";
import {
  FlatList,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Dynamic Data based on Figma
const interestData = [
  {
    id: "1",
    country: "South Africa",
    exchange: "JSE – Johannesburg Stock Exchange",
    companies: "435+ listed companies",
    flag: "https://flagcdn.com/w160/za.png",
  },
  {
    id: "2",
    country: "Nigeria",
    exchange: "NGX – Nigerian Exchange Group",
    companies: "~151+ listed companies",
    flag: "https://flagcdn.com/w160/ng.png",
  },
  {
    id: "3",
    country: "Egypt",
    exchange: "EGX – Egyptian Exchange",
    companies: "~239+ listed companies",
    flag: "https://flagcdn.com/w160/eg.png",
  },
  {
    id: "4",
    country: "Mauritius",
    exchange: "SEM – Stock Exchange of Mauritius",
    companies: "~89+ listed companies",
    flag: "https://flagcdn.com/w160/mu.png",
  },
  {
    id: "5",
    country: "Tunisia",
    exchange: "BVMT – Bourse de Tunis",
    companies: "~89+ listed companies",
    flag: "https://flagcdn.com/w160/tn.png",
  },
  {
    id: "6",
    country: "Morocco",
    exchange: "CSE – Casablanca Stock Exchange",
    companies: "~75+ listed companies",
    flag: "https://flagcdn.com/w160/ma.png",
  },
  {
    id: "7",
    country: "Kenya",
    exchange: "NSE – Nairobi Securities Exchange",
    companies: "~59+ listed companies",
    flag: "https://flagcdn.com/w160/ke.png",
  },
  {
    id: "8",
    country: "Ghana",
    exchange: "GSE – Ghana Stock Exchange",
    companies: "~37+ listed companies",
    flag: "https://flagcdn.com/w160/gh.png",
  },
  {
    id: "9",
    country: "Ivory Coast",
    exchange: "BRVM – Regional Securities Exchange",
    companies: "~45+ listed companies",
    flag: "https://flagcdn.com/w160/ci.png",
  },
  {
    id: "10",
    country: "Tanzania",
    exchange: "DSE – Dar es Salaam Stock Exchange",
    companies: "~28+ listed companies",
    flag: "https://flagcdn.com/w160/tz.png",
  },
  {
    id: "11",
    country: "Uganda",
    exchange: "USE – Uganda Securities Exchange",
    companies: "~17+ listed companies",
    flag: "https://flagcdn.com/w160/ug.png",
  },
  {
    id: "12",
    country: "Botswana",
    exchange: "BSE – Botswana Stock Exchange",
    companies: "~32+ listed companies",
    flag: "https://flagcdn.com/w160/bw.png",
  },
  {
    id: "13",
    country: "Namibia",
    exchange: "NSX – Namibia Stock Exchange",
    companies: "~40+ listed companies",
    flag: "https://flagcdn.com/w160/na.png",
  },
  {
    id: "14",
    country: "Zambia",
    exchange: "LuSE – Lusaka Securities Exchange",
    companies: "~24+ listed companies",
    flag: "https://flagcdn.com/w160/zm.png",
  },
];

export default function YourInterests() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);

  const toggleSelection = (id: string) => {
    if (selectedIds.includes(id)) {
      setSelectedIds(selectedIds.filter((item) => item !== id));
    } else {
      setSelectedIds([...selectedIds, id]);
    }
  };

  return (
    <View className="flex-1 ">
      {/* Background Texture */}
      <ImageBackground
        source={require("../../assets/images/Get started.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1">
          <View className="flex-1 px-6 pt-6">
            {/* Header Section */}
            <Text className="text-white text-5xl font-bold mb-4 tracking-tight">
              Your Interests
            </Text>
            <Text className="text-white/60 text-lg leading-6 mb-8">
              Choose African countries stock exchanges you d like to follow.
            </Text>

            {/* Dynamic Card List */}
            <FlatList
              data={interestData}
              keyExtractor={(item) => item.id}
              showsVerticalScrollIndicator={false}
              contentContainerStyle={{ paddingBottom: 100 }}
              renderItem={({ item }) => {
                const isSelected = selectedIds.includes(item.id);
                return (
                  <TouchableOpacity
                    onPress={() => toggleSelection(item.id)}
                    activeOpacity={0.9}
                    // Selection color change
                    className={`py-4 px-3 rounded-[10px] mb-4 flex-row items-center border ${
                      isSelected
                        ? "bg-[#c5a35d] border-[#c5a35d]"
                        : "bg-[#1E1E1E] border-white/5"
                    }`}
                  >
                    {/* Flag Icon */}
                    <Image
                      source={{ uri: item.flag }}
                      className="w-10 h-7 rounded-sm mr-4"
                      resizeMode="cover"
                    />

                    {/* Text Content */}
                    <View className="flex-1">
                      <View className="flex-row justify-between items-start">
                        <Text
                          className={`text-lg font-bold ${isSelected ? "text-black" : "text-white"}`}
                        >
                          {item.country}
                        </Text>
                        <Text
                          className={`text-[10px] ${isSelected ? "text-black/60" : "text-white/40"}`}
                        >
                          {item.companies}
                        </Text>
                      </View>
                      <Text
                        className={`text-sm mt-1 leading-4 ${isSelected ? "text-black/80" : "text-white/60"}`}
                      >
                        {item.exchange}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              }}
            />
          </View>

          {/* Bottom Fixed Button */}
          <View className="absolute bottom-10 left-6 right-6">
            <TouchableOpacity
              onPress={() => router.push("/(onboarding)/AccountReady")}
              activeOpacity={0.8}
              className={`w-full h-14 rounded-2xl items-center justify-center shadow-2xl ${
                selectedIds.length > 0 ? "bg-[#c5a35d]" : "bg-[#2A2A2A]"
              }`}
            >
              <Text
                className={`text-lg font-bold ${selectedIds.length > 0 ? "text-black" : "text-white/40"}`}
              >
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
