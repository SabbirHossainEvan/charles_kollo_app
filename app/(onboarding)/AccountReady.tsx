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

export default function AccountReady() {
  return (
    <View className="flex-1 ">
      <ImageBackground
        source={require("../../assets/images/bgImag.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1 px-6">
          <View className="flex-1 items-center justify-center">
            <View className="mb-10 items-center justify-center">
              <Image
                source={require("../../assets/images/Layer_1.png")}
                style={{ width: 120, height: 120 }}
                resizeMode="contain"
              />
            </View>

            {/* Success Text */}
            <Text className="text-white text-5xl font-semibold text-center mb-4 tracking-tight">
              Account Ready!
            </Text>

            <Text className="text-white/60 text-xl text-center font-medium leading-7 mb-10">
              Your virtual account is ready
            </Text>

            <View className="w-full ">
              <TouchableOpacity
                activeOpacity={0.8}
                className=" bg-[#D4B475] h-14 rounded-2xl items-center justify-center shadow-xl"
                onPress={() => router.push("/(tabs)/Home")}
              >
                <Text className="text-black text-lg font-bold">
                  Go to dashboard
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
