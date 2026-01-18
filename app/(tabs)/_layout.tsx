import { Tabs } from "expo-router";
import {
  BookOpen,
  Home,
  MoreVertical,
  PieChart,
  Star,
} from "lucide-react-native";
import React from "react";
import { Platform, Text, View } from "react-native";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: "#1A1A1A",
          borderTopWidth: 0,
          height: Platform.OS === "ios" ? 90 : 70,
          paddingBottom: Platform.OS === "ios" ? 30 : 10,
          paddingTop: 10,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          position: "absolute",
          left: 0,
          right: 0,
          bottom: 0,
          elevation: 0,
          borderTopColor: "transparent",
        },
      }}
    >
      <Tabs.Screen
        name="Home"
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              className={`p-2 rounded-2xl ${focused ? "bg-[#c5a35d]/20" : ""}`}
            >
              <Home size={24} color={focused ? "#c5a35d" : "#888"} />
            </View>
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-[12px] font-bold ${focused ? "text-[#c5a35d]" : "text-[#888]"}`}
            >
              Home
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="Learn"
        options={{
          tabBarIcon: ({ focused }) => (
            <BookOpen size={24} color={focused ? "#c5a35d" : "#888"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-[12px] font-bold ${focused ? "text-[#c5a35d]" : "text-[#888]"}`}
            >
              Learn
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="Simulate"
        options={{
          tabBarIcon: ({ focused }) => (
            <PieChart size={24} color={focused ? "#c5a35d" : "#888"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-[12px] font-bold ${focused ? "text-[#c5a35d]" : "text-[#888]"}`}
            >
              Simulate
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="Watchlist"
        options={{
          tabBarIcon: ({ focused }) => (
            <Star size={24} color={focused ? "#c5a35d" : "#888"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-[12px] font-bold ${focused ? "text-[#c5a35d]" : "text-[#888]"}`}
            >
              Watchlist
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="More"
        options={{
          tabBarIcon: ({ focused }) => (
            <MoreVertical size={24} color={focused ? "#c5a35d" : "#888"} />
          ),
          tabBarLabel: ({ focused }) => (
            <Text
              className={`text-[12px] font-bold ${focused ? "text-[#c5a35d]" : "text-[#888]"}`}
            >
              More
            </Text>
          ),
        }}
      />

      <Tabs.Screen
        name="Account"
        options={{
          href: null,
        }}
      />

      <Tabs.Screen
        name="Notifications"
        options={{
          href: null,
          tabBarItemStyle: { display: "none" },
        }}
      />
      <Tabs.Screen
        name="Profile"
        options={{
          href: null,
          tabBarItemStyle: { display: "none" },
        }}
      />
    </Tabs>
  );
}
