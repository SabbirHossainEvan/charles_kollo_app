import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { ArrowRight, Sparkles } from "lucide-react-native";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface InsightBarProps {
  text?: string;
  onPress?: () => void;
}

const InsightBar: React.FC<InsightBarProps> = ({
  text = "What happened in the markets in Senegal today?",
  onPress,
}) => {
  const handlePress = () => {
    if (onPress) {
      onPress();
    } else {
      router.push("/(screens)/AIAssistant");
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={handlePress}
      className="mx-4 mt-4 rounded-xl border border-white/10 overflow-hidden"
    >
      <LinearGradient
        colors={["#1a1a1a", "#111111"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="flex-row items-center justify-between px-4 py-[14px]"
      >
        <View className="flex-row items-center flex-1">
          {/* Gold Sparkle Icon */}
          <View className="mr-2.5">
            <Sparkles
              size={18}
              color="#c5a35d"
              fill="#c5a35d"
              fillOpacity={0.2}
            />
          </View>

          {/* Insight Text */}
          <Text
            numberOfLines={1}
            className="text-white/80 text-[13px] font-medium flex-1"
          >
            {text}
          </Text>
        </View>

        {/* Arrow Icon */}
        <ArrowRight size={18} color="white" opacity={0.6} />
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default InsightBar;
