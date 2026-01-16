import { TrendingDown, TrendingUp } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface StockItemProps {
  name: string;
  symbol: string;
  country: string;
  price: string;
  change: string;
  isPositive?: boolean;
  logoUrl?: string; // Optional image URL
  onPress?: () => void;
}

const StockItem: React.FC<StockItemProps> = ({
  name,
  symbol,
  country,
  price,
  change,
  isPositive = true,
  logoUrl,
  onPress,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      className="flex-row items-center justify-between p-4 bg-[#1a1a1a] rounded-2xl mb-3 border border-white/5"
    >
      <View className="flex-row items-center flex-1">
        {/* Stock Logo/Avatar */}
        <View className="w-12 h-12 bg-[#262626] rounded-full items-center justify-center mr-3 overflow-hidden">
          {logoUrl ? (
            <Image
              source={{ uri: logoUrl }}
              className="w-full h-full"
              resizeMode="cover"
            />
          ) : (
            // Fallback logo placeholder
            <View className="bg-red-900/20 w-full h-full items-center justify-center">
              <Text className="text-red-500 font-bold text-xs">
                {symbol.substring(0, 2)}
              </Text>
            </View>
          )}
        </View>

        {/* Stock Info */}
        <View className="flex-1">
          <Text className="text-white font-bold text-base" numberOfLines={1}>
            {name}
          </Text>
          <Text className="text-white/40 text-xs mt-0.5 uppercase">
            {symbol} • {country}
          </Text>
        </View>
      </View>

      {/* Price and Change Section */}
      <View className="items-end">
        <Text className="text-white font-bold text-base">${price}</Text>
        <View className="flex-row items-center mt-1">
          {isPositive ? (
            <TrendingUp size={12} color="#22c55e" />
          ) : (
            <TrendingDown size={12} color="#ef4444" />
          )}
          <Text
            className={`text-xs font-bold ml-1 ${isPositive ? "text-green-500" : "text-red-500"}`}
          >
            {isPositive ? "+" : ""}
            {change}%
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default StockItem;
