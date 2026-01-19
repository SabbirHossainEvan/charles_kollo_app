import { TrendingDown, TrendingUp } from "lucide-react-native";
import React from "react";
import { Text, View } from "react-native";

interface IndexCardProps {
  name: string;
  value: string;
  change: string;
  isPositive: boolean;
  isActive?: boolean;
}

const IndexCard: React.FC<IndexCardProps> = ({
  name,
  value,
  change,
  isPositive,
  isActive = false,
}) => {
  return (
    <View
      className={`w-[180px] p-4 rounded-2xl border ${
        isActive ? "border-[#c5a35d]" : "border-white/5"
      } bg-[#1a1a1a]`}
    >
      <Text className="text-white text-[14px] uppercase font-bold tracking-widest">
        {name}
      </Text>

      <Text className="text-white text-lg font-bold mt-1">${value}</Text>

      <View className="flex-row items-center mt-1">
        {isPositive ? (
          <TrendingUp size={12} color="#22c55e" />
        ) : (
          <TrendingDown size={12} color="#ef4444" />
        )}
        <Text
          className={`text-[11px] font-bold ml-1 ${
            isPositive ? "text-green-500" : "text-red-500"
          }`}
        >
          {change}%
        </Text>
      </View>
    </View>
  );
};

export default IndexCard;
