import { Feather } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

interface Course {
  id: string;
  title: string;
  description: string;
  level: string;
  completedLessons: number;
  totalLessons: number;
  isBookmarked: boolean;
}

const CourseCard = ({ item }: { item: Course }) => {
  const progress = (item.completedLessons / item.totalLessons) * 100;

  return (
    <View className="rounded-2xl p-6 mb-4 border border-gray-800 bg-[#232323]">
      <View className="flex-row justify-between items-start mb-2">
        <Text
          className="text-white text-xl font-semibold flex-1 mr-4 leading-7"
          style={{ fontFamily: "Oswald-Regular" }}
        >
          {item.title}
        </Text>
        <TouchableOpacity activeOpacity={0.7}>
          <Feather
            name="bookmark"
            size={24}
            color={item.isBookmarked ? "#F6D697" : "#9CA3AF"}
          />
        </TouchableOpacity>
      </View>

      <Text className="text-gray-400 text-sm mb-5 leading-5">
        {item.description}
      </Text>

      <View className="flex-row justify-between items-center mb-4">
        <View className="border border-green-500/50 rounded-full px-4 py-1">
          <Text className="text-green-500 text-[12px] tracking-widest ">
            {item.level}
          </Text>
        </View>
        <Text className="text-gray-500 text-xs">
          {item.completedLessons}/{item.totalLessons} lessons
        </Text>
      </View>

      <View className="h-2 w-full bg-gray-800/50 rounded-full overflow-hidden">
        <View
          className="h-full bg-[#FDCE4C]"
          style={{ width: `${progress}%` }}
        />
      </View>
    </View>
  );
};

const CourseList = () => {
  const courses: Course[] = [
    {
      id: "1",
      title: "How Stocks Work",
      description: "Understanding the basics of stock markets and trading",
      level: "Beginner",
      completedLessons: 6,
      totalLessons: 8,
      isBookmarked: false,
    },
    {
      id: "2",
      title: "Understanding the basics of African stocks markets and trading",
      description: "Learn about NGX, JSE, BRVM and other African markets",
      level: "Beginner",
      completedLessons: 6,
      totalLessons: 8,
      isBookmarked: true,
    },
    {
      id: "3",
      title: "Reading Financial Statements",
      description: "Learn how to analyze balance sheets and income statements",
      level: "Intermediate",
      completedLessons: 2,
      totalLessons: 10,
      isBookmarked: false,
    },
    {
      id: "4",
      title: "Crypto Investment 101",
      description: "The fundamentals of blockchain and digital assets",
      level: "Beginner",
      completedLessons: 8,
      totalLessons: 8,
      isBookmarked: false,
    },
    {
      id: "5",
      title: "Risk Management Strategies",
      description: "How to protect your portfolio from market volatility",
      level: "Advanced",
      completedLessons: 1,
      totalLessons: 5,
      isBookmarked: true,
    },
  ];

  return (
    <View>
      {courses.map((item) => (
        <View key={item.id} className="px-4">
          <CourseCard item={item} />
        </View>
      ))}
    </View>
  );
};

export default CourseList;
