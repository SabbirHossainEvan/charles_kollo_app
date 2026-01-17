import { LinearGradient } from "expo-linear-gradient";
import React, { useEffect, useRef } from "react";
import { Animated, Image, Text, View } from "react-native";

interface ProgressCardProps {
  percentage?: number;
  modulesStarted?: number;
  totalModules?: number;
  containerStyle?: string;
}

const ProgressCard: React.FC<ProgressCardProps> = ({
  percentage = 45,
  modulesStarted = 2,
  totalModules = 4,
  containerStyle = "",
}) => {
  const animatedWidth = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(animatedWidth, {
      toValue: percentage,
      friction: 8,
      tension: 40,
      useNativeDriver: false,
    }).start();
  }, [percentage]);

  const progressWidth = animatedWidth.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View className={`w-full p-4 ${containerStyle}`}>
      <LinearGradient
        colors={["#F6D697", "#C9A96A"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="rounded-2xl p-6 relative overflow-hidden shadow-sm"
      >
        <Image
          source={require("../assets/images/Group 186.png")}
          className="absolute right-0 top-0 h-full w-1/2 opacity-80"
          resizeMode="cover"
        />

        {/* Content Section */}
        <View className="z-10">
          <Text
            className="text-black text-lg font-bold opacity-70"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            Your progress
          </Text>

          <Text
            className="text-black text-4xl font-semibold my-2"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            {percentage}%
          </Text>

          <Text className="text-black text-base mb-4 opacity-80">
            {modulesStarted}/{totalModules} modules started
          </Text>

          {/* Progress Bar Track */}
          <View className="h-2.5 w-full bg-[#272A33] rounded-full overflow-hidden">
            <Animated.View
              style={{
                height: "100%",
                backgroundColor: "#00C441",
                width: progressWidth,
                borderRadius: 10,
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </View>
  );
};

export default ProgressCard;
