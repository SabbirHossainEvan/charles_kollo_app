import ProfileHeader from "@/components/ProfileHeader";
import ProfileScreen from "@/components/ProfileScreen";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function More() {
  return (
    <LinearGradient
      colors={["#5D5D5C", "#000000", "#313131"]}
      locations={[0, 0.46, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView>
        <ScrollView>
          <ProfileHeader />
          <ProfileScreen />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
