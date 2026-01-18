import { Check, ChevronRight, Filter, X } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  LayoutAnimation,
  Modal,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  UIManager,
  View,
} from "react-native";
import StockItem from "./StockItem"; // Path thik kore niben

// Android Animation Enable
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

// Mock Data
const ALL_STOCKS = [
  {
    id: "1",
    name: "Dangote Cement",
    symbol: "DANGCEM",
    country: "Nigeria",
    price: "12,566",
    change: "0.13",
    category: "Popular",
    isPositive: true,
  },
  {
    id: "2",
    name: "MTN Nigeria",
    symbol: "MTNN",
    country: "Nigeria",
    price: "245.50",
    change: "1.2",
    category: "Trending",
    isPositive: true,
  },
  {
    id: "3",
    name: "Safaricom",
    symbol: "SCOM",
    country: "Kenya",
    price: "20.15",
    change: "0.8",
    category: "Popular",
    isPositive: false,
  },
  {
    id: "4",
    name: "Sonatel",
    symbol: "SNTS",
    country: "Senegal",
    price: "14,500",
    change: "2.1",
    category: "Trending",
    isPositive: true,
  },
];

const COUNTRIES = [
  "Algeria",
  "Angola",
  "Benin",
  "Botswana",
  "Burkina Faso",
  "Nigeria",
  "Kenya",
  "Senegal",
  "Ghana",
];

export default function StocksSection() {
  const [activeTab, setActiveTab] = useState("All");
  const [showFilterModal, setShowFilterModal] = useState(false);
  const [filterStep, setFilterStep] = useState("main");
  const [selectedCountries, setSelectedCountries] = useState<string[]>([]);
  const [selectedDate, setSelectedDate] = useState("1D");

  // Filter Notification Count
  const filterCount =
    (selectedCountries.length > 0 ? 1 : 0) + (selectedDate !== "1D" ? 1 : 0);

  // Filter Logic
  const filteredStocks = useMemo(() => {
    return ALL_STOCKS.filter((stock) => {
      const matchTab = activeTab === "All" || stock.category === activeTab;
      const matchCountry =
        selectedCountries.length === 0 ||
        selectedCountries.includes(stock.country);
      return matchTab && matchCountry;
    });
  }, [activeTab, selectedCountries]);

  const toggleModal = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowFilterModal(!showFilterModal);
    setFilterStep("main");
  };

  const renderFilterContent = () => {
    if (filterStep === "country") {
      return (
        <View className="bg-[#121212] p-6 rounded-t-[40px] h-[80%]">
          <View className="flex-row justify-between items-center mb-6">
            <TouchableOpacity onPress={() => setFilterStep("main")}>
              <Text className="text-[#c5a35d] font-bold">← Back</Text>
            </TouchableOpacity>
            <Text className="text-white text-xl font-bold">Country</Text>
            <TouchableOpacity onPress={toggleModal}>
              <X color="white" />
            </TouchableOpacity>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
            {COUNTRIES.map((c) => (
              <TouchableOpacity
                key={c}
                onPress={() =>
                  setSelectedCountries((prev) =>
                    prev.includes(c)
                      ? prev.filter((i) => i !== c)
                      : [...prev, c]
                  )
                }
                className="flex-row justify-between py-5 border-b border-white/5"
              >
                <Text
                  className={`text-lg ${selectedCountries.includes(c) ? "text-white" : "text-white/40"}`}
                >
                  {c}
                </Text>
                {selectedCountries.includes(c) && (
                  <Check color="#c5a35d" size={24} />
                )}
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TouchableOpacity
            className="bg-[#c5a35d] p-5 rounded-2xl mt-4"
            onPress={() => setFilterStep("main")}
          >
            <Text className="text-center font-bold text-lg">
              Apply Selection ({selectedCountries.length})
            </Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (filterStep === "date") {
      return (
        <View className="bg-[#121212] p-6 rounded-t-[40px]">
          <View className="flex-row justify-between items-center mb-8">
            <Text className="text-white text-2xl font-bold">Date period</Text>
            <TouchableOpacity onPress={toggleModal}>
              <X color="white" />
            </TouchableOpacity>
          </View>
          <View className="flex-row flex-wrap justify-between">
            {["1D", "1W", "1M", "3M", "6M", "YTD", "ALL"].map((d) => (
              <TouchableOpacity
                key={d}
                onPress={() => {
                  setSelectedDate(d);
                  setFilterStep("main");
                }}
                className={`w-[23%] aspect-square mb-4 rounded-2xl items-center justify-center border ${selectedDate === d ? "bg-[#c5a35d] border-[#c5a35d]" : "bg-white/5 border-white/10"}`}
              >
                <Text
                  className={`font-bold ${selectedDate === d ? "text-black" : "text-white"}`}
                >
                  {d}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      );
    }

    return (
      <View className="bg-[#121212] p-6 rounded-t-[40px] pb-12">
        <View className="flex-row justify-between items-center mb-8">
          <Text className="text-white text-2xl font-bold">Filter by</Text>
          <TouchableOpacity
            onPress={toggleModal}
            className="bg-white/10 p-2 rounded-full"
          >
            <X color="white" size={20} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          onPress={() => setFilterStep("country")}
          className="flex-row justify-between p-5 bg-white/5 rounded-2xl mb-4 border border-white/5"
        >
          <Text className="text-white text-lg">Country</Text>
          <View className="flex-row items-center">
            <Text className="text-[#c5a35d] mr-2">
              {selectedCountries.length || "All"}
            </Text>
            <ChevronRight color="white" opacity={0.3} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setFilterStep("date")}
          className="flex-row justify-between p-5 bg-white/5 rounded-2xl  border border-white/5"
        >
          <Text className="text-white text-lg">Date period</Text>
          <View className="flex-row items-center">
            <Text className="text-[#c5a35d] mr-2">{selectedDate}</Text>
            <ChevronRight color="white" opacity={0.3} />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          className="bg-[#c5a35d] p-5 rounded-2xl"
          onPress={toggleModal}
        >
          <Text className="text-center font-bold text-lg text-black">
            Apply Filters
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View className="px-4 mt-8 pb-24">
      <View className="flex-row justify-between items-center mb-5">
        <Text className="text-white text-xl font-bold ">Stocks</Text>
        <Text className="text-white/40 text-sm">View all ›</Text>
      </View>

      <View className="flex-row items-center justify-between mb-6">
        <View className="flex-row  p-1 flex-1 mr-4">
          {["All", "Popular", "Trending"].map((tab) => (
            <TouchableOpacity
              key={tab}
              onPress={() => setActiveTab(tab)}
              className={`flex-1 py-2.5 rounded-full ${activeTab === tab ? "bg-[#c5a35d]" : ""}`}
            >
              <Text
                className={`text-center font-bold text-[13px] ${activeTab === tab ? "text-black" : "text-white/40"}`}
              >
                {tab}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity onPress={toggleModal} className="relative p-2">
          <Filter color="white" size={24} />
          {filterCount > 0 && (
            <View className="absolute top-0 right-0 bg-[#c5a35d] w-4 h-4 rounded-full items-center justify-center border border-black">
              <Text className="text-black text-[9px] font-bold">
                {filterCount}
              </Text>
            </View>
          )}
        </TouchableOpacity>
      </View>

      {filteredStocks.map((stock) => (
        <StockItem key={stock.id} {...stock} />
      ))}

      <Modal visible={showFilterModal} transparent animationType="slide">
        <View className="flex-1 justify-end bg-black/70">
          {renderFilterContent()}
        </View>
      </Modal>
    </View>
  );
}
