import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Platform,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const AccountSettingsScreen = () => {
  const router = useRouter();

  const [isVirtual, setIsVirtual] = useState(true);
  const [isLive, setIsLive] = useState(false);

  const bgGradientColors = ["#5D5D5C", "#000000", "#313131"] as const;
  const bgLocations = [0, 0.46, 1] as const;

  return (
    <LinearGradient
      colors={bgGradientColors}
      locations={bgLocations}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView
        className="flex-1"
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar barStyle="light-content" />

        {/* Header Section */}
        <View className="px-6 py-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()} className="mr-4">
              <Feather name="chevron-left" size={28} color="white" />
            </TouchableOpacity>
            <Text
              className="text-white text-2xl font-semibold"
              style={{ fontFamily: "Inter-Regular" }}
            >
              Account
            </Text>
          </View>

          <TouchableOpacity>
            <Feather
              name="tag"
              size={24}
              color="white"
              style={{ transform: [{ rotate: "90deg" }] }}
            />
          </TouchableOpacity>
        </View>

        {/* Settings Content */}
        <View className="px-6 mt-8">
          <Text
            className="text-white text-lg mb-4 ml-1 opacity-80"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            Account
          </Text>

          <View className="bg-[#1C1C1E]/80 rounded-[15px] overflow-hidden">
            <View className="flex-row items-center justify-between px-5 py-5 border-b border-white/5">
              <Text className="text-white text-lg font-medium">
                Virtual account
              </Text>
              <Switch
                value={isVirtual}
                onValueChange={setIsVirtual}
                trackColor={{ false: "#3e3e3e", true: "#F6D697" }}
                thumbColor="#FFFFFF"
              />
            </View>

            <View className="flex-row items-center justify-between px-5 py-5">
              <Text className="text-white/50 text-lg font-medium">
                Live trading account
              </Text>
              <Switch
                value={isLive}
                onValueChange={setIsLive}
                trackColor={{ false: "#3e3e3e", true: "#F6D697" }}
                thumbColor="#FFFFFF"
              />
            </View>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default AccountSettingsScreen;
