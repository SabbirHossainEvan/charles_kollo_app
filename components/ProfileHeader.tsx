import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { Image, Text, View } from "react-native";

const ProfileHeader = () => {
  const gradientColors = ["#F6D697", "#C9A96A"] as const;

  return (
    <View className="flex-1 justify-center items-center  p-4">
      <LinearGradient
        colors={gradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="w-full px-6 py-6 relative flex-row items-center rounded-[15px]  overflow-hidden"
      >
        <Image
          source={require("../assets/images/Group 186.png")}
          className="absolute -right-5 top-0 w-48 h-full opacity-90"
          resizeMode="contain"
        />

        <View className="z-10 bg-[#24262B] w-20 h-20 rounded-full justify-center items-center mr-4 shadow-xl">
          <Image
            source={{
              uri: "https://cdn-icons-png.flaticon.com/512/1144/1144760.png",
            }}
            className="w-10 h-10"
            style={{ tintColor: "#ffffff" }}
          />
        </View>

        <View className="z-10 flex-1">
          <Text
            className="text-black text-[25px] font-semibold tracking-tight"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            John Doe
          </Text>
          <Text
            className="text-black/70 text-lg  -mt-1"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            Doe example@gmail.com
          </Text>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProfileHeader;
