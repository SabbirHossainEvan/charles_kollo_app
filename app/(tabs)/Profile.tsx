import { Feather } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StatusBar,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { width } = Dimensions.get("window");

const ProfileScreen = () => {
  const router = useRouter();

  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  );
  const [userData, setUserData] = useState({
    username: "John doe",
    email: "John@gmail.com",
    phone: "XX-XXX-XXXX",
    country: "Benin",
  });

  const bgGradientColors = ["#5D5D5C", "#000000", "#313131"] as const;
  const bgLocations = [0, 0.46, 1] as const;

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setProfileImage(result.assets[0].uri);
    }
  };

  const InputField = ({ label, value, field, placeholder }: any) => (
    <View className="mb-5">
      <Text className="text-white/60 text-sm mb-2 ml-1">{label}</Text>
      <View className="bg-[#1C1C1E] rounded-2xl h-14 justify-center px-4 border border-white/5">
        <TextInput
          value={value}
          onChangeText={(text) => setUserData({ ...userData, [field]: text })}
          editable={isEditing}
          placeholder={placeholder}
          placeholderTextColor="#444"
          className={`text-white text-base ${!isEditing ? "opacity-60" : "opacity-100"}`}
          style={{ fontFamily: "Inter-Regular" }}
        />
      </View>
    </View>
  );

  return (
    <LinearGradient
      colors={bgGradientColors}
      locations={bgLocations}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      className="flex-1"
    >
      <SafeAreaView
        className="flex-1"
        style={{
          paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        }}
      >
        <StatusBar barStyle="light-content" />

        {/* --- Header --- */}
        <View className="px-6 py-4 flex-row items-center justify-between">
          <View className="flex-row items-center">
            <TouchableOpacity onPress={() => router.back()}>
              <Feather name="chevron-left" size={28} color="white" />
            </TouchableOpacity>
            <Text
              className="text-white text-2xl font-semibold ml-4"
              style={{ fontFamily: "Oswald-Regular" }}
            >
              Profile
            </Text>
          </View>

          <TouchableOpacity
            onPress={() => setIsEditing(!isEditing)}
            className={`p-2 rounded-full ${isEditing ? "bg-[#c5a35d]" : ""}`}
          >
            <Feather
              name="edit-3"
              size={22}
              color={isEditing ? "black" : "white"}
            />
          </TouchableOpacity>
        </View>

        <KeyboardAvoidingView
          behavior={Platform.OS === "ios" ? "padding" : "height"}
          className="flex-1"
        >
          <ScrollView
            className="flex-1 px-6"
            showsVerticalScrollIndicator={false}
          >
            {/* --- Profile Image Section --- */}
            <View className="items-center mt-6 mb-10">
              <View className="relative">
                <View className="w-32 h-32 rounded-full border-4 border-[#c5a35d]/20 overflow-hidden bg-[#1C1C1E]">
                  <Image
                    source={{ uri: profileImage }}
                    className="w-full h-full"
                    resizeMode="cover"
                  />
                </View>

                <TouchableOpacity
                  onPress={pickImage}
                  className="absolute bottom-0 right-0 bg-white w-10 h-10 rounded-full items-center justify-center border-2 border-black"
                >
                  <Feather name="edit-2" size={18} color="black" />
                </TouchableOpacity>
              </View>
            </View>

            {/* --- Input Fields --- */}
            <InputField
              label="User name"
              value={userData.username}
              field="username"
            />
            <InputField
              label="Email address"
              value={userData.email}
              field="email"
            />
            <InputField
              label="Phone number"
              value={userData.phone}
              field="phone"
              placeholder="XX-XXX-XXXX"
            />

            <View className="mb-5">
              <Text className="text-white/60 text-sm mb-2 ml-1">Country</Text>
              <TouchableOpacity
                disabled={!isEditing}
                className="bg-[#1C1C1E] rounded-2xl h-14 flex-row items-center px-4 border border-white/5"
              >
                <Image
                  source={{ uri: "https://flagcdn.com/w160/bj.png" }} // Benin flag
                  className="w-8 h-5 rounded-sm mr-3"
                />
                <Text className="text-white text-base flex-1">
                  {userData.country}
                </Text>
                {isEditing && (
                  <Feather name="chevron-down" size={20} color="#666" />
                )}
              </TouchableOpacity>
            </View>

            {isEditing && (
              <TouchableOpacity
                onPress={() => setIsEditing(false)}
                className="bg-[#c5a35d] h-14 rounded-2xl items-center justify-center mt-6 shadow-lg"
              >
                <Text className="text-black text-lg font-bold">
                  Save Changes
                </Text>
              </TouchableOpacity>
            )}

            <View className="h-20" />
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default ProfileScreen;
