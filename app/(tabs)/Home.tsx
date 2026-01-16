// import Header from "@/components/Header";
// import IndicesSection from "@/components/IndicesSection";
// import InsightBar from "@/components/InsightBar";
// import StocksSection from "@/components/StocksSection";
// import VirtualAccountCard from "@/components/VirtualAccountCard";
// import { LinearGradient } from "expo-linear-gradient";
// import React, { useState } from "react";
// import { LayoutAnimation, Platform, ScrollView, UIManager } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// // Android animation setup
// if (
//   Platform.OS === "android" &&
//   UIManager.setLayoutAnimationEnabledExperimental
// ) {
//   UIManager.setLayoutAnimationEnabledExperimental(true);
// }

// export default function Home() {
//   const [activeId, setActiveId] = useState("1");
//   const [showAll, setShowAll] = useState(false);

//   const toggleViewAll = () => {
//     LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//     setShowAll(!showAll);
//   };

//   return (
//     <LinearGradient colors={["#1a1a1a", "#000"]} className="flex-1">
//       <SafeAreaView className="flex-1" edges={["top"]}>
//         <ScrollView
//           showsVerticalScrollIndicator={false}
//           contentContainerStyle={{ paddingBottom: 100 }}
//         >
//           <Header userName="Noah" />

//           <InsightBar />

//           <VirtualAccountCard balance="24,945.79" change="2.4" />

//           <IndicesSection
//             activeId={activeId}
//             setActiveId={setActiveId}
//             showAll={showAll}
//             toggleViewAll={toggleViewAll}
//           />

//           {/* Stocks Section */}
//           <StocksSection />
//         </ScrollView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// }

import Header from "@/components/Header";
import IndicesSection from "@/components/IndicesSection";
import InsightBar from "@/components/InsightBar";
import StocksSection from "@/components/StocksSection";
import VirtualAccountCard from "@/components/VirtualAccountCard";
import { LinearGradient } from "expo-linear-gradient";
import React, { useState } from "react";
import { LayoutAnimation, Platform, ScrollView, UIManager } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// Android animation setup
if (
  Platform.OS === "android" &&
  UIManager.setLayoutAnimationEnabledExperimental
) {
  UIManager.setLayoutAnimationEnabledExperimental(true);
}

export default function Home() {
  const [activeId, setActiveId] = useState("1");
  const [showAll, setShowAll] = useState(false);

  const toggleViewAll = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setShowAll(!showAll);
  };

  return (
    <LinearGradient
      colors={["#5D5D5C", "#000000", "#313131"]}
      locations={[0, 0.46, 1]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView className="flex-1" edges={["top"]}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 100 }}
        >
          <Header userName="Noah" />

          <InsightBar />

          <VirtualAccountCard balance="24,945.79" change="2.4" />

          <IndicesSection
            activeId={activeId}
            setActiveId={setActiveId}
            showAll={showAll}
            toggleViewAll={toggleViewAll}
          />

          {/* Stocks Section */}
          <StocksSection />
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
}
