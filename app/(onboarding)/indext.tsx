import { router } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, Image, ImageBackground, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

export default function Onboarding() {
  useEffect(() => {
    const timer = setTimeout(() => {
      router.replace("/(onboarding)/getStarted");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../../assets/images/bgImag.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1">
          <View className="flex-1 items-center justify-center px-6">
            <View className="mb-8">
              <Image
                source={require("../../assets/images/image 3.png")}
                style={{ width: width * 0.45, height: width * 0.45 }}
                resizeMode="contain"
              />
            </View>

            <View className="items-center">
              <Text
                className="text-white text-5xl font-bold text-center tracking-tight"
                style={{
                  fontFamily: "Oswald-Regular",
                  includeFontPadding: false,
                }}
              >
                Charles Kollo
              </Text>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
