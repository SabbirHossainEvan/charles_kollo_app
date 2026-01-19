import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";
import { Defs, LinearGradient, Path, Stop, Svg } from "react-native-svg";

interface StockCardProps {
  name: string;
  symbol: string;
  country: string;
  price: string;
  percentage: string;
  isPositive: boolean;
  showButton?: boolean;
}

const StockCard: React.FC<StockCardProps> = ({
  name,
  symbol,
  country,
  price,
  percentage,
  isPositive,
  showButton,
}) => {
  return (
    <View className="bg-[#242424] p-5 rounded-[14px] mb-5 w-full shadow-2xl">
      <View className="flex-row justify-between items-start mb-2">
        <View className="flex-row items-center">
          <View className="w-12 h-12 bg-white rounded-full overflow-hidden items-center justify-center mr-3">
            <Image
              source={{ uri: "https://logo.clearbit.com/dangote-group.com" }}
              className="w-10 h-10 rounded-full"
              resizeMode="contain"
            />
          </View>
          <View>
            <Text
              className="text-white  text-lg"
              style={{ fontFamily: "Oswald-Regular" }}
            >
              {name}
            </Text>
            <Text className="text-white text-sm font-medium">
              {symbol} · {country}
            </Text>
          </View>
        </View>
        <Text
          className="text-white text-2xl"
          style={{ fontFamily: "Oswald-Regular" }}
        >
          ${price}
        </Text>
      </View>

      <View className="h-40 w-full mt-2 relative">
        <Svg height="100%" width="100%" viewBox="0 0 100 60">
          <Defs>
            <LinearGradient id="grad" x1="0" y1="0" x2="0" y2="1">
              <Stop
                offset="0%"
                stopColor={isPositive ? "#00c853" : "#ff1744"}
                stopOpacity="0.2"
              />
              <Stop
                offset="100%"
                stopColor={isPositive ? "#00c853" : "#ff1744"}
                stopOpacity="0"
              />
            </LinearGradient>
          </Defs>

          <Path
            d={
              isPositive
                ? "M0 45 Q 10 40, 20 42 T 40 30 T 60 35 T 80 20 T 100 10 L 100 60 L 0 60 Z"
                : "M0 10 Q 10 15, 20 12 T 40 25 T 60 20 T 80 40 T 100 50 L 100 60 L 0 60 Z"
            }
            fill="url(#grad)"
          />

          <Path
            d={
              isPositive
                ? "M0 45 Q 10 40, 20 42 T 40 30 T 60 35 T 80 20 T 100 10"
                : "M0 10 Q 10 15, 20 12 T 40 25 T 60 20 T 80 40 T 100 50"
            }
            fill="none"
            stroke={isPositive ? "#00ff00" : "#ff4444"}
            strokeWidth="1"
            strokeLinejoin="round"
          />
        </Svg>
      </View>

      <View className="items-center justify-center mt-2 relative">
        <View className="flex-row items-center">
          <Text
            className={`text-base font-bold ${isPositive ? "text-green-500" : "text-red-500"}`}
          >
            {isPositive ? "↗" : "↘"} {percentage}%
          </Text>
        </View>

        {showButton && (
          <TouchableOpacity className="absolute right-0 bg-[#d4b57e] px-4 py-2 rounded-md">
            <Text className="text-black font-bold text-base">Trade</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

const StockChart = () => {
  return (
    <ScrollView className="flex-1  px-4 pt-10">
      <StockCard
        name="Dangote Cement"
        symbol="DANGCEM"
        country="Nigeria"
        price="12,566"
        percentage="0.13"
        isPositive={true}
        showButton={true}
      />

      <StockCard
        name="Dangote Cement"
        symbol="DANGCEM"
        country="Nigeria"
        price="12,566"
        percentage="0.13"
        isPositive={false}
        showButton={false}
      />
    </ScrollView>
  );
};

export default StockChart;
