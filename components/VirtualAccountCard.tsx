// import { LinearGradient } from "expo-linear-gradient";
// import {
//   ArrowUpRight,
//   MoreHorizontal,
//   Repeat,
//   RotateCcw,
// } from "lucide-react-native";
// import React from "react";
// import { ImageBackground, Text, TouchableOpacity, View } from "react-native";

// interface VirtualAccountCardProps {
//   balance: string;
//   change: string;
//   onPressMore?: () => void;
// }

// const VirtualAccountCard: React.FC<VirtualAccountCardProps> = ({
//   balance,
//   change,
//   onPressMore,
// }) => {
//   return (
//     <View className="mx-4 mt-6">
//       {/* Top Tab "VIRTUAL ACCOUNT" */}
//       <View className="flex-row justify-end">
//         <ImageBackground
//           source={require("../assets/images/Group 186.png")}
//           className="overflow-hidden rounded-t-2xl"
//           resizeMode="cover"
//         >
//           {/* Glass Effect Layer (Optional Overlay) */}
//           <View className="bg-[#c5a35d]/90 px-4 py-1.5 items-center justify-center">
//             <Text className="text-black text-[10px] font-bold tracking-tighter">
//               VIRTUAL ACCOUNT
//             </Text>
//           </View>
//         </ImageBackground>
//       </View>

//       {/* Main Golden Card */}
//       <LinearGradient
//         // Premium Golden Gradient colors
//         colors={["#E5C07B", "#D4AF37", "#B8860B"]}
//         start={{ x: 0, y: 0 }}
//         end={{ x: 1, y: 1 }}
//         className="p-6 rounded-3xl rounded-tr-none shadow-xl"
//       >
//         {/* Header Info */}
//         <View className="flex-row justify-between items-start">
//           <View>
//             <Text className="text-black/60 text-xs font-medium uppercase">
//               Market overview
//             </Text>
//             <View className="flex-row items-center mt-2">
//               <Text className="text-black text-3xl font-bold tracking-tight">
//                 ${balance}
//               </Text>
//               <View className="bg-[#e6fff2] px-2 py-1 rounded-full ml-3">
//                 <Text className="text-[#00c076] text-[11px] font-bold">
//                   +{change}%
//                 </Text>
//               </View>
//             </View>
//           </View>
//           <TouchableOpacity onPress={onPressMore}>
//             <MoreHorizontal color="black" size={24} />
//           </TouchableOpacity>
//         </View>

//         {/* Action Buttons Section */}
//         <View className="flex-row justify-between mt-8">
//           {[
//             { icon: ArrowUpRight, id: "send" },
//             { icon: Repeat, id: "swap" },
//             { icon: RotateCcw, id: "history" },
//             { icon: MoreHorizontal, id: "more" },
//           ].map((item, index) => (
//             <TouchableOpacity
//               key={index}
//               activeOpacity={0.8}
//               className="bg-black/90 w-[22%] h-12 rounded-2xl items-center justify-center shadow-sm"
//             >
//               <item.icon color="#C5A35D" size={20} strokeWidth={2.5} />
//             </TouchableOpacity>
//           ))}
//         </View>
//       </LinearGradient>
//     </View>
//   );
// };

// export default VirtualAccountCard;

import { LinearGradient } from "expo-linear-gradient";
import {
  ArrowUpRight,
  MoreHorizontal,
  Repeat,
  RotateCcw,
} from "lucide-react-native";
import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface VirtualAccountCardProps {
  balance: string;
  change: string;
  onPressMore?: () => void;
}

const VirtualAccountCard: React.FC<VirtualAccountCardProps> = ({
  balance,
  change,
  onPressMore,
}) => {
  return (
    <View className="mx-4 mt-6">
      {/* 1. Top Tab Section */}
      <View className="flex-row justify-end">
        <View className="bg-[#C9A96A] px-6 py-2 rounded-t-[20px]">
          <Text className="text-black text-[11px] font-bold tracking-tight">
            VIRTUAL ACCOUNT
          </Text>
        </View>
      </View>

      {/* 2. Main Card with Linear Gradient */}
      <View className="overflow-hidden rounded-3xl rounded-tr-none shadow-2xl">
        <LinearGradient
          colors={["#F6D697", "#C9A96A"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          className="p-6 relative"
        >
          {/* Glass Image with Limited Width (Right Side) */}
          <Image
            source={require("../assets/images/Group 186.png")}
            style={{
              position: "absolute",
              right: 0,
              top: 0,
              width: "50%",
              height: "100%",
              opacity: 1.3,
            }}
            resizeMode="cover"
          />

          {/* Header Info & Balance */}
          <View className="flex-row justify-between items-start">
            <View>
              <Text className="text-black/80 text-lg font-semibold">
                Market overview
              </Text>
              <View className="flex-row items-center mt-3">
                <Text className="text-black text-4xl font-bold tracking-tighter">
                  ${balance}
                </Text>

                {/* Percentage Badge */}
                <View className="bg-[#E6FFF2] px-3 py-1 rounded-full ml-4">
                  <Text className="text-[#00C076] text-[12px] font-bold">
                    +{change}%
                  </Text>
                </View>
              </View>
            </View>

            <TouchableOpacity onPress={onPressMore} className="mt-1">
              <MoreHorizontal color="black" size={28} />
            </TouchableOpacity>
          </View>

          {/* Action Buttons */}
          <View className="flex-row justify-between mt-6">
            {[
              { icon: ArrowUpRight, id: "send" },
              { icon: Repeat, id: "swap" },
              { icon: RotateCcw, id: "history" },
              { icon: MoreHorizontal, id: "more" },
            ].map((item, index) => (
              <TouchableOpacity
                key={index}
                activeOpacity={0.9}
                className="bg-[#1A1A1A] w-[22%] h-14 rounded-[18px] items-center justify-center"
              >
                <item.icon color="#C5A35D" size={24} strokeWidth={2} />
              </TouchableOpacity>
            ))}
          </View>
        </LinearGradient>
      </View>
    </View>
  );
};

export default VirtualAccountCard;
