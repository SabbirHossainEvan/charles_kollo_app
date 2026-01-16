import { router } from "expo-router";
import React from "react";
import {
  Dimensions,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={require("../../assets/images/Get started.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1 px-8">
          <View className="flex-1 items-center justify-center">
            <View className="items-center justify-center">
              <View className="mb-6">
                <Image
                  source={require("../../assets/images/image 3.png")}
                  style={{ width: width * 0.42, height: width * 0.42 }}
                  resizeMode="contain"
                />
              </View>

              {/* Main Title */}
              <Text
                className="text-white text-4xl font-bold text-center tracking-tight mb-3"
                style={{ fontFamily: "Oswald-Regular" }}
              >
                Charles Kollo
              </Text>

              <Text
                className="text-white/90 text-[18px] text-center font-medium leading-6 px-4 mt-3"
                style={{ fontFamily: "Inter-Regular" }}
              >
                Learn. Simulate. Understand
              </Text>
              <Text
                className="text-white/90 text-[18px] text-center font-medium leading-6 px-4"
                style={{ fontFamily: "Inter-Regular" }}
              >
                African Markets.
              </Text>
            </View>

            <View className="pb-12 mt-8 w-full items-center">
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => router.push("/(auth)/signUp")}
                className="w-full bg-[#D4B475] h-14 rounded-2xl items-center justify-center mb-6 shadow-lg"
              >
                <Text
                  className="text-black text-lg font-bold"
                  style={{ fontFamily: "Inter-Bold" }}
                >
                  Get started
                </Text>
              </TouchableOpacity>

              {/* Login Link */}
              <View className="flex-row items-center">
                <Text
                  className="text-white/70 text-base"
                  style={{ fontFamily: "Inter-Regular" }}
                >
                  Already have an account?{" "}
                </Text>
                <TouchableOpacity onPress={() => router.push("/(auth)/signIn")}>
                  <Text
                    className="text-[#D4B475] text-base font-bold"
                    style={{ fontFamily: "Inter-Regular" }}
                  >
                    Sign in
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
