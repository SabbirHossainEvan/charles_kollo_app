import CourseList from "@/components/CourseList";
import Header from "@/components/Header";
import InsightBar from "@/components/InsightBar";
import ProgressCard from "@/components/ProgressCard";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, Text, View } from "react-native";
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
      <SafeAreaView className="flex-1" edges={["top"]}>
        <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
          <Header userName="Noah" />
          <InsightBar />
          <ProgressCard />
          <View className="">
            <Text className="text-2xl px-4 text-white font-bold mb-5 mt-2">
              Courses
            </Text>
            <CourseList />
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
