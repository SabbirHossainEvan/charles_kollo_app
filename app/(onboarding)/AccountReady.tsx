import { router } from "expo-router";
import { CheckCircle2 } from "lucide-react-native";
import React from "react";
import {
  Dimensions,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function AccountReady() {
  return (
    <View className="flex-1 bg-black">
      {/* Background Texture */}
      <ImageBackground
        source={require("../../assets/images/Get started.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1 px-8">
          <View className="flex-1 items-center justify-center">
            {/* Success Badge Icon */}
            <View className="mb-8">
              {/* Figma onujayi golden badge icon logic */}
              <View className="bg-[#c5a35d] p-6 rounded-[30px] shadow-2xl">
                <CheckCircle2 size={60} color="black" strokeWidth={2.5} />
              </View>
            </View>

            {/* Success Text */}
            <Text className="text-white text-5xl font-bold text-center mb-4 tracking-tight">
              Account Ready!
            </Text>

            <Text className="text-white/60 text-xl text-center font-medium leading-7">
              Your virtual account is ready
            </Text>
          </View>

          {/* Bottom Action Button */}
          <View className="pb-12">
            <TouchableOpacity
              activeOpacity={0.8}
              className="w-full bg-[#c5a35d] h-14 rounded-2xl items-center justify-center shadow-xl"
              onPress={() => router.push("/(onboarding)/getStarted")}
            >
              <Text className="text-black text-lg font-bold">
                Go to dashboard
              </Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
