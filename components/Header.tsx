import { Bell } from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface HeaderProps {
  userName: string;
}

const Header: React.FC<HeaderProps> = ({ userName }) => {
  return (
    <View className="px-4 py-4">
      {/* 1. Logo Section */}
      <View className="flex-row items-center mb-4">
        <Image
          source={require("../assets/images/Logo.png")}
          style={{ width: 160, height: 35 }}
          resizeMode="contain"
        />
      </View>

      {/* 2. Welcome & Notification Row */}
      <View className="flex-row items-center justify-between">
        <View className="flex-1">
          <Text
            className="text-white text-3xl"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            Welcome back {userName}!
          </Text>
          <Text
            className="text-white/40 text-[15px] mt-1"
            style={{ fontFamily: "Inter-Regular" }}
          >
            Here s your snapshot for today.
          </Text>
        </View>

        {/* Bell Icon Button */}
        <TouchableOpacity
          className="bg-[#2A2A2A] p-3 rounded-full ml-4"
          activeOpacity={0.7}
        >
          <Bell color="white" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;
