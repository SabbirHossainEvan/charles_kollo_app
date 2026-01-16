import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface AccountBalanceProps {
  label?: string;
  totalValue?: string;
  percentageChange?: string;
  onPressMenu?: () => void;
}

const AccountBalanceCard: React.FC<AccountBalanceProps> = ({
  label = "VIRTUAL ACCOUNT",
  totalValue = "10245.67",
  percentageChange = "2.4",
  onPressMenu,
}) => {
  return (
    <View className="w-full p-4 items-end">
      {/* Top Tab Label */}
      <View className="bg-[#D9B97A] px-4 py-2 rounded-t-2xl">
        <Text className="text-[11px] font-bold tracking-[1px] text-black">
          {label}
        </Text>
      </View>

      {/* Main Card Body */}
      <View className="bg-[#D9B97A] w-full rounded-2xl rounded-tr-none p-6 shadow-sm">
        <View className="flex-row justify-between items-start mb-4">
          <Text className="text-gray-800 text-lg font-medium">Total Value</Text>

          {/* Menu Dots */}
          <TouchableOpacity
            onPress={onPressMenu}
            className="flex-row space-x-1 p-1 gap-1"
          >
            <View className="h-1 w-1 bg-black rounded-full" />
            <View className="h-1 w-1 bg-black rounded-full" />
            <View className="h-1 w-1 bg-black rounded-full" />
          </TouchableOpacity>
        </View>

        {/* Amount and Percentage */}
        <View className="flex-row items-center flex-wrap">
          <Text className="text-4xl font-bold text-black mr-3">
            ${totalValue}
          </Text>

          <View className="bg-[#E1F5EC] px-3 py-1 rounded-full border border-[#D0EBE0]">
            <Text className="text-[#27AE60] text-sm font-bold">
              +{percentageChange}%
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AccountBalanceCard;
