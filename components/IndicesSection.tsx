import { ChevronRight } from "lucide-react-native";
import React from "react";
import {
  LayoutAnimation,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import IndexCard from "./IndexCard";

// Data gulo ekhane niye asha holo
const INITIAL_INDICES = [
  {
    id: "1",
    name: "NGX",
    value: "24,945.79",
    change: "0.13",
    isPositive: true,
  },
  {
    id: "2",
    name: "BRWVM",
    value: "24,945.79",
    change: "0.5",
    isPositive: false,
  },
  {
    id: "3",
    name: "JSE",
    value: "24,945.79",
    change: "0.13",
    isPositive: true,
  },
];

const EXTRA_INDICES = [
  {
    id: "4",
    name: "NASDAQ",
    value: "15,234.12",
    change: "1.2",
    isPositive: true,
  },
  {
    id: "5",
    name: "S&P 500",
    value: "4,789.00",
    change: "0.4",
    isPositive: false,
  },
];

interface IndicesSectionProps {
  activeId: string;
  setActiveId: (id: string) => void;
  showAll: boolean;
  toggleViewAll: () => void;
}

const IndicesSection: React.FC<IndicesSectionProps> = ({
  activeId,
  setActiveId,
  showAll,
  toggleViewAll,
}) => {
  const indicesToShow = showAll
    ? [...INITIAL_INDICES, ...EXTRA_INDICES]
    : INITIAL_INDICES;

  return (
    <View className="px-4 mt-8">
      {/* Header Row */}
      <View className="flex-row justify-between items-center mb-4">
        <Text
          className="text-white text-2xl font-bold"
          style={{ fontFamily: "Oswald-Regular" }}
        >
          Indices
        </Text>
        <TouchableOpacity
          onPress={toggleViewAll}
          className="flex-row items-center"
        >
          <Text className="text-white/60 text-lg mr-1">
            {showAll ? "Show less" : "View all"}
          </Text>
          <ChevronRight size={18} color="white" opacity={0.6} />
        </TouchableOpacity>
      </View>

      {showAll ? (
        /* View All Mode (Grid) */
        <View className="flex-row flex-wrap justify-between">
          {indicesToShow.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                LayoutAnimation.configureNext(
                  LayoutAnimation.Presets.easeInEaseOut
                );
                setActiveId(item.id);
              }}
              className="w-[50%] mb-4"
            >
              <IndexCard {...item} isActive={activeId === item.id} />
            </TouchableOpacity>
          ))}
        </View>
      ) : (
        /* Carousel Mode */
        <View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {indicesToShow.map((item) => (
              <TouchableOpacity
                key={item.id}
                onPress={() => {
                  LayoutAnimation.configureNext(
                    LayoutAnimation.Presets.easeInEaseOut
                  );
                  setActiveId(item.id);
                }}
                className="mr-2"
              >
                <IndexCard {...item} isActive={activeId === item.id} />
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Dynamic Carousel Indicator */}
          <View className="flex-row justify-center items-center mt-6">
            {INITIAL_INDICES.map((item) => (
              <View
                key={`dot-${item.id}`}
                className={`h-1.5 mx-1 rounded-full transition-all duration-300 ${
                  activeId === item.id ? "w-8 bg-[#c5a35d]" : "w-2 bg-white/20"
                }`}
              />
            ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default IndicesSection;
