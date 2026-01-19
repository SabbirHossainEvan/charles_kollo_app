import { countries, ICountry } from "countries-list";
import { router } from "expo-router";
import { ChevronDown, Search, X } from "lucide-react-native";
import React, { useMemo, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

const allWorldCountries = Object.keys(countries)
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
  const [selectedCountry, setSelectedCountry] = useState(allWorldCountries[0]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredCountries = useMemo(() => {
    return allWorldCountries.filter((c) =>
      c.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <View className="flex-1 bg-black">
      <ImageBackground
        source={require("../../assets/images/bgImag.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1 px-8">
          <View className="pt-10">
            <Text
              className="text-white text-4xl font-semibold mb-2"
              style={{ fontFamily: "Oswald-Regular" }}
            >
              Select your Country
            </Text>
            <Text className="text-white/60 text-lg mb-12">
              Market content may vary based on region.
            </Text>

            <TouchableOpacity
              onPress={() => setModalVisible(true)}
              activeOpacity={0.8}
              className="w-full bg-[#454545] h-16 rounded-2xl px-5 flex-row items-center justify-between border border-white/10"
            >
              <View className="flex-row items-center">
                <Image
                  source={{ uri: selectedCountry.flag }}
                  className="w-9 h-6 rounded-sm mr-4"
                />
                <Text className="text-white text-lg font-medium">
                  {selectedCountry.name}
                </Text>
              </View>
              <ChevronDown size={22} color="#c5a35d" />
            </TouchableOpacity>
          </View>

          <View className="flex-1 justify-end pb-12">
            <TouchableOpacity
              activeOpacity={0.9}
              className="w-full bg-[#c5a35d] h-14 rounded-2xl items-center justify-center"
              onPress={() => router.push("/(onboarding)/YourInterests")}
            >
              <Text className="text-black text-lg font-bold">Continue</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </ImageBackground>

      {modalVisible && (
        <View className="absolute inset-0 z-50 justify-end">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : undefined}
            className="w-full justify-end"
            style={{ flex: 1 }}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View
                className="bg-[#313131] rounded-t-[40px] px-6 pt-6"
                style={{ height: height * 0.9 }}
              >
                <View className="w-12 h-1 bg-white/10 self-center rounded-full mb-6" />

                <View className="flex-row justify-between items-center mb-6">
                  <Text
                    className="text-white text-xl font-bold"
                    style={{ fontFamily: "Oswald-Regular" }}
                  >
                    Select your Country
                  </Text>
                  <TouchableOpacity
                    onPress={() => {
                      setModalVisible(false);
                      setSearchQuery("");
                      Keyboard.dismiss();
                    }}
                  >
                    <X size={26} color="white" />
                  </TouchableOpacity>
                </View>

                <View className="flex-row items-center bg-[#2C2C2E] rounded-2xl px-4 py-3 mb-4 border border-white/10">
                  <Search size={20} color="#8E8E93" />
                  <TextInput
                    className="flex-1 text-white ml-3 text-base h-10"
                    placeholder="Search..."
                    placeholderTextColor="#8E8E93"
                    value={searchQuery}
                    onChangeText={setSearchQuery}
                    selectionColor="#c5a35d"
                    autoFocus={false}
                  />
                </View>

                <FlatList
                  data={filteredCountries}
                  className="rounded-3xl border border-[#232323] overflow-hidden"
                  keyExtractor={(item) => item.id}
                  showsVerticalScrollIndicator={false}
                  keyboardShouldPersistTaps="handled"
                  contentContainerStyle={{ paddingBottom: 50 }}
                  renderItem={({ item }) => {
                    const isSelected = selectedCountry.id === item.id;

                    return (
                      <TouchableOpacity
                        onPress={() => {
                          setSelectedCountry(item);
                          setModalVisible(false);
                          setSearchQuery("");
                          Keyboard.dismiss();
                        }}
                        className={`flex-row items-center px-4 py-6 border-b border-white/5 ${
                          isSelected ? "bg-[#c5a35d]" : "bg-[#232323]"
                        }`}
                      >
                        <Image
                          source={{ uri: item.flag }}
                          className="w-8 h-5 rounded-sm mr-4"
                        />
                        <Text
                          className={`text-lg flex-1 ${
                            isSelected
                              ? "text-black font-bold"
                              : "text-white/90"
                          }`}
                        >
                          {item.name}
                        </Text>
                      </TouchableOpacity>
                    );
                  }}
                />
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
        </View>
      )}
    </View>
  );
}
