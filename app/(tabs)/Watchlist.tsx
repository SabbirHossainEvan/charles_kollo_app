import StockDashboard from "@/components/StockDashboard";
import WatchlistHeader from "@/components/WatchlistHeader";
import WatchlistSection from "@/components/WatchlistSection";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
export default function Watchlist() {
  return (
    <LinearGradient
      colors={["#5D5D5C", "#000000", "#313131"]}
      locations={[0, 0.46, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1" edges={["top"]}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <WatchlistHeader />
          <StockDashboard />
          <WatchlistSection />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
