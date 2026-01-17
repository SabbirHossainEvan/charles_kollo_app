import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProfileScreen = () => {
  const gradientColors = ["#F6D697", "#C9A96A"] as const;

  const SettingItem = ({
    icon,
    title,
    showArrow = true,
    onPress,
    className,
  }: any) => (
    <TouchableOpacity
      onPress={onPress}
      className={`flex-row items-center bg-[#232323] py-7 px-4 mb-2 rounded-2xl ${className}`}
      activeOpacity={0.7}
    >
      <View className="mr-4">{icon}</View>
      <Text
        className="flex-1 text-white text-lg font-medium"
        style={{ fontFamily: "Oswald-Regular" }}
      >
        {title}
      </Text>
      {showArrow && <Feather name="chevron-right" size={20} color="#666" />}
    </TouchableOpacity>
  );

  const SectionTitle = ({ title }: { title: string }) => (
    <Text
      className="text-white text-lg mb-3 mt-5 ml-1"
      style={{ fontFamily: "Oswald-Regular" }}
    >
      {title}
    </Text>
  );

  return (
    <ScrollView className="flex-1 px-4 ">
      <SectionTitle title="Account" />

      <SettingItem
        title="Account setting"
        icon={<Feather name="user" size={22} color="white" />}
        onPress={() => router.push("/(tabs)/Account")}
      />

      <SettingItem
        title="Membership"
        icon={
          <MaterialCommunityIcons name="card-outline" size={22} color="white" />
        }
        onPress={() => console.log("Membership Clicked")}
      />

      <SectionTitle title="Tools" />
      <SettingItem
        title="AI assistance"
        icon={
          <MaterialCommunityIcons name="creation" size={22} color="white" />
        }
      />
      <SettingItem
        title="Community"
        icon={<Feather name="users" size={22} color="white" />}
      />

      <SectionTitle title="Settings" />
      <SettingItem
        title="Profile"
        icon={<Feather name="user" size={22} color="white" />}
      />
      <SettingItem
        title="Notifications & Alerts"
        icon={<Feather name="bell" size={22} color="white" />}
        onPress={() => router.push("/(tabs)/Notifications")}
      />
    </ScrollView>
  );
};

export default ProfileScreen;
