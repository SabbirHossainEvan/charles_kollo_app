import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";

import React, { useState } from "react";
import {
  Platform,
  ScrollView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const Notification = () => {
  const router = useRouter();

  const [settings, setSettings] = useState({
    platformUpdates: true,
    aiAlerts: true,
    buyAlerts: true,
    priceAlerts: true,
    percentageAlerts: true,
    volumeSpikes: false,
    lessonReminders: true,
    quizAvailability: false,
  });

  const toggleSwitch = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const bgGradientColors = ["#5D5D5C", "#000000", "#313131"] as const;
  const bgLocations = [0, 0.46, 1] as const;

  const SettingRow = ({ label, value, onToggle, isLast = false }: any) => (
    <View
      className={`flex-row items-center justify-between px-5 py-5 ${!isLast ? "border-b border-white/5" : ""}`}
    >
      <Text className="text-white text-lg font-medium flex-1 mr-2">
        {label}
      </Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        trackColor={{ false: "#3e3e3e", true: "#F6D697" }}
        thumbColor="#FFFFFF"
      />
    </View>
  );

  const SectionHeader = ({ title }: { title: string }) => (
    <Text
      className="text-white/60 text-base mb-3 mt-6 ml-1"
      style={{ fontFamily: "Oswald-Regular" }}
    >
      {title}
    </Text>
  );

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

        {/* --- Header Section --- */}
        <View className="px-6 py-4 flex-row items-center">
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Feather name="chevron-left" size={28} color="white" />
          </TouchableOpacity>
          <Text
            className="text-white text-2xl font-semibold"
            style={{ fontFamily: "Oswald-Regular" }}
          >
            Notifications & Alerts
          </Text>
        </View>

        <ScrollView
          className="px-6 flex-1"
          showsVerticalScrollIndicator={false}
        >
          <SectionHeader title="System & Account" />
          <View className="bg-[#1C1C1E]/80 rounded-[20px] overflow-hidden">
            <SettingRow
              label="Platform Updates"
              value={settings.platformUpdates}
              onToggle={() => toggleSwitch("platformUpdates")}
              isLast={true}
            />
          </View>

          <SectionHeader title="Alerts" />
          <View className="bg-[#1C1C1E]/80 rounded-[20px] overflow-hidden">
            <SettingRow
              label="Allow AI to set alerts"
              value={settings.aiAlerts}
              onToggle={() => toggleSwitch("aiAlerts")}
            />
            <SettingRow
              label="Buy alerts"
              value={settings.buyAlerts}
              onToggle={() => toggleSwitch("buyAlerts")}
              isLast={true}
            />
          </View>

          <SectionHeader title="Market & Price Alerts" />
          <View className="bg-[#1C1C1E]/80 rounded-[20px] overflow-hidden">
            <SettingRow
              label="Price Alerts"
              value={settings.priceAlerts}
              onToggle={() => toggleSwitch("priceAlerts")}
            />
            <SettingRow
              label="Percentage Change Alerts"
              value={settings.percentageAlerts}
              onToggle={() => toggleSwitch("percentageAlerts")}
            />
            <SettingRow
              label="Volume Spikes"
              value={settings.volumeSpikes}
              onToggle={() => toggleSwitch("volumeSpikes")}
              isLast={true}
            />
          </View>

          <SectionHeader title="Learning & Education" />
          <View className="bg-[#1C1C1E]/80 rounded-[20px] overflow-hidden">
            <SettingRow
              label="Lesson Reminders"
              value={settings.lessonReminders}
              onToggle={() => toggleSwitch("lessonReminders")}
            />
            <SettingRow
              label="Quiz Availability"
              value={settings.quizAvailability}
              onToggle={() => toggleSwitch("quizAvailability")}
              isLast={true}
            />
          </View>

          <View className="h-20" />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default Notification;
