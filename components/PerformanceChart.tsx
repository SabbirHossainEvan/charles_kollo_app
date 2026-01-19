import React, { useEffect, useState } from "react";
import { Dimensions, Text, TouchableOpacity, View } from "react-native";
import { LineChart } from "react-native-wagmi-charts";

const { width: screenWidth } = Dimensions.get("window");

type TimeFrame = "1W" | "1M" | "3M" | "1Y";

const PerformanceChart = () => {
  const [selectedFrame, setSelectedFrame] = useState<TimeFrame>("1W");
  const [chartData, setChartData] = useState<any[]>([]);

  const getLabels = () => {
    switch (selectedFrame) {
      case "1W":
        return ["Mon", "Tue", "Wed", "Thur", "Fri", "Sat", "Sun"];
      case "1M":
        return ["1", "8", "15", "22", "30"];
      case "3M":
        return ["Oct", "Nov", "Dec"];
      case "1Y":
        return [
          "Jan",
          "Feb",
          "Mar",
          "Apr",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ];
      default:
        return [];
    }
  };

  const generateData = (frame: TimeFrame) => {
    const points = frame === "1Y" ? 60 : 40;
    return Array.from({ length: points }, (_, i) => ({
      timestamp: i,
      value: 500 + Math.sin(i / 1.5) * 80 + i * 3 + Math.random() * 40,
    }));
  };

  useEffect(() => {
    setChartData(generateData(selectedFrame));
  }, [selectedFrame]);

  if (chartData.length === 0) return null;

  return (
    <View className="bg-[#242424] p-5 rounded-[13px] w-full">
      <View className="flex-row justify-between items-center mb-6">
        <Text
          className="text-white text-xl font-semibold tracking-tight"
          style={{ fontFamily: "Oswald-Regular" }}
        >
          Performance
        </Text>
        <View className="flex-row rounded-xl p-1">
          {(["1W", "1M", "3M", "1Y"] as TimeFrame[]).map((frame) => (
            <TouchableOpacity
              key={frame}
              onPress={() => setSelectedFrame(frame)}
              activeOpacity={0.7}
              className={`px-3 py-1.5 rounded-lg ${selectedFrame === frame ? "bg-[#D9B97A]" : "bg-transparent"}`}
            >
              <Text
                className={`text-[10px] font-bold ${selectedFrame === frame ? "text-black" : "text-[#8E8E93]"}`}
              >
                {frame}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      <View className="flex-row">
        <View className="justify-between h-[180px] py-1">
          {[...Array(6)].map((_, i) => (
            <Text key={i} className="text-[#cacaca] text-[10px] font-medium">
              1,000
            </Text>
          ))}
        </View>

        {/* Chart Section */}
        <View className="flex-1 ml-2">
          <LineChart.Provider data={chartData}>
            <LineChart height={180} width={screenWidth - 110}>
              <LineChart.Path color="#FDCE4C" width={2.5}>
                <LineChart.Gradient color="#FDCE4C" opacity={0.3} />
              </LineChart.Path>
            </LineChart>
          </LineChart.Provider>
        </View>
      </View>

      <View className="flex-row justify-between ml-10 mt-4 px-1">
        {getLabels().map((label) => (
          <Text
            key={label}
            className="text-[#d6d6d6] font-medium "
            style={{ fontSize: selectedFrame === "1Y" ? 9 : 10 }}
          >
            {label}
          </Text>
        ))}
      </View>
    </View>
  );
};

export default PerformanceChart;
