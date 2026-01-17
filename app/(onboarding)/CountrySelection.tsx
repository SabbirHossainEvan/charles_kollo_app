// import { countries, ICountry } from "countries-list";
// import { router } from "expo-router";
// import { ChevronDown, Search, X } from "lucide-react-native";
// import React, { useMemo, useState } from "react";
// import {
//   Dimensions,
//   FlatList,
//   Image,
//   ImageBackground,
//   KeyboardAvoidingView,
//   Modal,
//   Platform,
//   Text,
//   TextInput,
//   TouchableOpacity,
//   View,
// } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";

// const { height } = Dimensions.get("window");

// interface CountryData {
//   id: string;
//   name: string;
//   code: string;
//   flag: string;
// }

// const allAfricanCountries: CountryData[] = Object.keys(countries)
//   .reduce((acc: CountryData[], key) => {
//     const country = (countries as any)[key] as ICountry;

//     if (country.continent === "AF") {
//       acc.push({
//         id: key,
//         name: country.name,
//         code: key,
//         flag: `https://flagcdn.com/w160/${key.toLowerCase()}.png`,
//       });
//     }
//     return acc;
//   }, [])
//   .sort((a, b) => a.name.localeCompare(b.name));

// export default function CountrySelection() {
//   const [modalVisible, setModalVisible] = useState(false);
//   const [selectedCountry, setSelectedCountry] = useState<CountryData>(
//     allAfricanCountries.find((c) => c.name === "Burkina Faso") ||
//       allAfricanCountries[0]
//   );
//   const [searchQuery, setSearchQuery] = useState("");

//   // 2. Optimized Search Logic
//   const filteredCountries = useMemo(() => {
//     return allAfricanCountries.filter((c) =>
//       c.name.toLowerCase().includes(searchQuery.toLowerCase())
//     );
//   }, [searchQuery]);

//   return (
//     <View className="flex-1 ">
//       <ImageBackground
//         source={require("../../assets/images/Get started.png")}
//         className="flex-1"
//         resizeMode="cover"
//       >
//         <KeyboardAvoidingView
//           behavior={Platform.OS === "ios" ? "padding" : "height"}
//           style={{ flex: 1 }}
//         >
//           <SafeAreaView className="flex-1 px-8 pt-10">
//             {/* Main Title */}
//             <Text
//               className="text-white text-4xl font-semibold mb-4 tracking-tight"
//               style={{ fontFamily: "Oswald-Regular" }}
//             >
//               Select your Country
//             </Text>
//             <Text
//               className="text-white/60 text-lg mb-12"
//               style={{ fontFamily: "Inter-Regular" }}
//             >
//               Market content may vary based on region.
//             </Text>

//             <Text
//               className="text-white/90 text-sm font-semibold mb-3 ml-1 tracking-widest"
//               style={{ fontFamily: "Inter-Regular" }}
//             >
//               Country
//             </Text>

//             {/* Dropdown Selector */}
//             <TouchableOpacity
//               onPress={() => setModalVisible(true)}
//               activeOpacity={0.8}
//               className="w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 flex-row items-center justify-between border border-white/10"
//             >
//               <View className="flex-row items-center">
//                 <Image
//                   source={{ uri: selectedCountry.flag }}
//                   className="w-9 h-6 rounded-sm mr-4"
//                   resizeMode="cover"
//                 />
//                 <Text
//                   className="text-white text-lg font-medium"
//                   style={{ fontFamily: "Inter-Regular" }}
//                 >
//                   {selectedCountry.name}
//                 </Text>
//               </View>
//               <ChevronDown size={22} color="#c5a35d" />
//             </TouchableOpacity>

//             {/* Continue Button */}
//             <View className="flex-1 justify-end pb-10">
//               <TouchableOpacity
//                 className="w-full bg-[#c5a35d] h-14 rounded-2xl items-center justify-center shadow-2xl"
//                 onPress={() => router.push("/(onboarding)/YourInterests")}
//               >
//                 <Text
//                   className="text-black text-lg font-bold"
//                   style={{ fontFamily: "Inter-Regular" }}
//                 >
//                   Continue
//                 </Text>
//               </TouchableOpacity>
//             </View>
//           </SafeAreaView>

//           {/* Dynamic Country Search Modal */}
//           <Modal
//             animationType="slide"
//             transparent={true}
//             visible={modalVisible}
//           >
//             <View className="flex-1  justify-end">
//               <View
//                 className=" bg-[#333333] rounded-t-[40px] px-6 pt-6"
//                 style={{
//                   height: height * 0.85,
//                   borderTopLeftRadius: 20,
//                   borderTopRightRadius: 20,
//                 }}
//               >
//                 <View className="flex-row items-center justify-between mb-6 px-2">
//                   <Text
//                     className="text-white text-2xl font-semibold"
//                     style={{ fontFamily: "Oswald-Regular" }}
//                   >
//                     Select your Country
//                   </Text>
//                   <TouchableOpacity
//                     onPress={() => {
//                       setModalVisible(false);
//                       setSearchQuery("");
//                     }}
//                   >
//                     <X size={24} color="white" />
//                   </TouchableOpacity>
//                 </View>

//                 {/* Search Bar */}
//                 <View className=" bg-[#1A1A1A] h-14 rounded-2xl flex-row items-center px-4 mb-6 border border-white/5">
//                   <Search size={20} color="#888" />
//                   <TextInput
//                     placeholder="Search..."
//                     placeholderTextColor="#666"
//                     className="flex-1 text-white ml-3 text-base"
//                     value={searchQuery}
//                     onChangeText={setSearchQuery}
//                   />
//                 </View>

//                 <View className="bg-[#1A1A1A] rounded-t-[30px]">
//                   <Text className="text-white mt-6  text-2xl font-bold  mx-4  tracking-widest">
//                     Africa
//                   </Text>
//                   <View className="w-full h-[1px] bg-white/10 my-4" />
//                   <FlatList
//                     data={filteredCountries}
//                     keyExtractor={(item) => item.id}
//                     showsVerticalScrollIndicator={false}
//                     renderItem={({ item }) => (
//                       <TouchableOpacity
//                         onPress={() => {
//                           setSelectedCountry(item);
//                           setModalVisible(false);
//                           setSearchQuery("");
//                         }}
//                         className={`flex-row items-center border-b border-gray-600 p-4   ${
//                           selectedCountry.id === item.id ? "bg-[#D4B475]" : ""
//                         }`}
//                       >
//                         <Image
//                           source={{ uri: item.flag }}
//                           className="w-8 h-5 rounded-sm mr-4"
//                         />
//                         <Text
//                           className={`text-lg ${selectedCountry.id === item.id ? "text-white/90 font-bold" : "text-white/90"}`}
//                         >
//                           {item.name}
//                         </Text>
//                       </TouchableOpacity>
//                     )}
//                   />
//                 </View>
//               </View>
//             </View>
//           </Modal>
//         </KeyboardAvoidingView>
//       </ImageBackground>
//     </View>
//   );
// }

import { countries, ICountry } from "countries-list";
import { router } from "expo-router";
import { ChevronDown, Search, X } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

interface CountryData {
  id: string;
  name: string;
  code: string;
  flag: string;
}

// বিশ্বের সকল দেশ বর্ণানুক্রমিকভাবে সাজানো
const allWorldCountries: CountryData[] = Object.keys(countries)
  .map((key) => {
    const country = (countries as any)[key] as ICountry;
    return {
      id: key,
      name: country.name,
      code: key,
      flag: `https://flagcdn.com/w160/${key.toLowerCase()}.png`,
    };
  })
  .sort((a, b) => a.name.localeCompare(b.name));

export default function CountrySelection() {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState<CountryData>(
    allWorldCountries.find((c) => c.name === "United States") ||
      allWorldCountries.find((c) => c.name === "Bangladesh") ||
      allWorldCountries[0]
  );
  const [searchQuery, setSearchQuery] = useState("");

  // Optimized Search Logic for all countries
  const filteredCountries = useMemo(() => {
    return allWorldCountries.filter((c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../../assets/images/Get started.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          style={{ flex: 1 }}
        >
          <SafeAreaView className="flex-1 px-8 pt-10">
            {/* Main Title */}
            <Text
              className="text-white text-4xl font-semibold mb-4 tracking-tight"
              style={{ fontFamily: "Oswald-Regular" }}
            >
              Select your Country
            </Text>
            <Text
              className="text-white/60 text-lg mb-12"
              style={{ fontFamily: "Inter-Regular" }}
            >
              Market content may vary based on region.
            </Text>

            <Text
              className="text-white/90 text-sm font-semibold mb-3 ml-1 tracking-widest"
              style={{ fontFamily: "Inter-Regular" }}
            >
              Country
            </Text>

            {/* Dropdown Selector */}
            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
              className="w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 flex-row items-center justify-between border border-white/10"
            >
              <View className="flex-row items-center">
                <Image
                  source={{ uri: selectedCountry.flag }}
                  className="w-9 h-6 rounded-sm mr-4"
                  resizeMode="cover"
                />
                <Text
                  className="text-white text-lg font-medium"
                  style={{ fontFamily: "Inter-Regular" }}
                >
                  {selectedCountry.name}
                </Text>
              </View>
              <ChevronDown size={22} color="#c5a35d" />
            </TouchableOpacity>

            {/* Continue Button */}
            <View className="flex-1 justify-end pb-10">
              <TouchableOpacity
                className="w-full bg-[#c5a35d] h-14 rounded-2xl items-center justify-center shadow-2xl"
                onPress={() => router.push("/(onboarding)/YourInterests")}
              >
                <Text
                  className="text-black text-lg font-bold"
                  style={{ fontFamily: "Inter-Regular" }}
                >
                  Continue
                </Text>
              </TouchableOpacity>
            </View>
          </SafeAreaView>

          {/* Dynamic Country Search Modal */}
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
          >
            <View className="flex-1 justify-end">
              <View
                className="bg-[#333333] px-6 pt-6"
                style={{
                  height: height * 0.85,
                  borderTopLeftRadius: 30,
                  borderTopRightRadius: 30,
                }}
              >
                <View className="flex-row items-center justify-between mb-6 px-2">
                  <Text
                    className="text-white text-2xl font-semibold"
                    style={{ fontFamily: "Oswald-Regular" }}
                  >
                    Select your Country
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      setSearchQuery("");
                    }}
                  >
                    <X size={24} color="white" />
                  </TouchableOpacity>
                </View>

                {/* Search Bar */}
                <View className="bg-[#1A1A1A] h-14 rounded-2xl flex-row items-center px-4 mb-6 border border-white/5">
                  <Search size={20} color="#888" />
                  <TextInput
                    placeholder="Search country..."
                    placeholderTextColor="#666"
                    className="flex-1 text-white ml-3 text-base"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                  />
                </View>

                <View className="bg-[#1A1A1A] rounded-t-[30px] flex-1">
                  <Text className="text-white mt-6 text-xl font-bold mx-4 tracking-widest">
                    World Wide
                  </Text>
                  <View className="w-full h-[1px] bg-white/10 my-4" />

                  <FlatList
                    data={filteredCountries}
                    keyExtractor={(item) => item.id}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ paddingBottom: 40 }}
                    renderItem={({ item }) => (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedCountry(item);
                          setModalVisible(false);
                          setSearchQuery("");
                        }}
                        className={`flex-row items-center border-b border-white/5 p-4 ${
                          selectedCountry.id === item.id
                            ? "bg-[#c5a35d]/20"
                            : ""
                        }`}
                      >
                        <Image
                          source={{ uri: item.flag }}
                          className="w-8 h-5 rounded-sm mr-4"
                        />
                        <Text
                          className={`text-lg ${
                            selectedCountry.id === item.id
                              ? "text-[#c5a35d] font-bold"
                              : "text-white/90"
                          }`}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                </View>
              </View>
            </View>
          </Modal>
        </KeyboardAvoidingView>
      </ImageBackground>
    </View>
  );
}
