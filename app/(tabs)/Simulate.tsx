// import AccountBalanceCard from "@/components/AccountBalanceCard";
// import Header from "@/components/Header";
// import PerformanceChart from "@/components/PerformanceChart";
// import { LinearGradient } from "expo-linear-gradient";
// import React from "react";
// import { ScrollView } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// export default function Simulate() {
//   return (
//     <LinearGradient
//       colors={["#5D5D5C", "#000000", "#313131"]}
//       locations={[0, 0.46, 1]}
//       start={{ x: 0, y: 0 }}
//       end={{ x: 1, y: 1 }}
//       className="flex-1"
//     >
//       <SafeAreaView>
//         <ScrollView>
//           <Header userName="Noah" />
//           <AccountBalanceCard />
//           <PerformanceChart />
//         </ScrollView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// }

import AccountBalanceCard from "@/components/AccountBalanceCard";
import Header from "@/components/Header";
import PerformanceChart from "@/components/PerformanceChart";
import QuickTradeSection from "@/components/QuickTradeSection";
import { LinearGradient } from "expo-linear-gradient";
import React from "react";
import { ScrollView, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler"; // Import kora hoyeche
import { SafeAreaView } from "react-native-safe-area-context";

export default function Simulate() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <LinearGradient
        colors={["#5D5D5C", "#000000", "#313131"]}
        locations={[0, 0.46, 1]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        className="flex-1"
      >
        <SafeAreaView className="flex-1">
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 100 }} // Bottom space maintain korar jonno
          >
            <Header userName="Noah" />

            {/* Account Balance Section */}
            <View className="mt-2">
              <AccountBalanceCard />
            </View>

            {/* Performance Chart Section */}
            <View className="mt-4 px-4">
              <PerformanceChart />
            </View>
            <QuickTradeSection />
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </GestureHandlerRootView>
  );
}
