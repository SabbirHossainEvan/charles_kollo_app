import { router } from "expo-router";
import React, { useState } from "react";
import {
  Dimensions,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height } = Dimensions.get("window");

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // ✅ Focus states for Border Color change
  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isPhoneFocused, setIsPhoneFocused] = useState(false);

  return (
    <View className="flex-1">
      <ImageBackground
        source={require("../../assets/images/Get started.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
              keyboardShouldPersistTaps="handled"
            >
              <View className="flex-1 px-8 items-center justify-center">
                <View
                  className="w-full mb-10"
                  style={{ marginTop: height * 0.15 }}
                >
                  <Text
                    className="text-white text-4xl font-bold tracking-tight text-left self-start -mt-20"
                    style={{ fontFamily: "Oswald-Bold" }}
                  >
                    Sign up
                  </Text>
                </View>

                <View className="w-full gap-y-8 -mt-10">
                  <View className="w-full">
                    <Text
                      className="text-white/90 text-sm font-medium mb-3 ml-1 text-left"
                      style={{ fontFamily: "Inter-Regular" }}
                    >
                      Email
                    </Text>
                    <TextInput
                      className={`w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border ${
                        isEmailFocused ? "border-[#c5a35d]" : "border-white/5"
                      }`}
                      placeholder="you@example.com"
                      style={{ fontFamily: "Inter-Regular" }}
                      placeholderTextColor="#666"
                      keyboardType="email-address"
                      autoCapitalize="none"
                      value={email}
                      onChangeText={setEmail}
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                    />
                  </View>

                  {/* Phone Number Field */}
                  <View className="w-full">
                    <Text
                      className="text-white/90 text-[16px] font-medium mb-3 ml-1 text-left"
                      style={{ fontFamily: "Inter-Regular" }}
                    >
                      Phone number
                    </Text>
                    <TextInput
                      className={`w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border ${
                        isPhoneFocused ? "border-[#c5a35d]" : "border-white/5"
                      }`}
                      placeholder="+221 70 000 0000"
                      style={{ fontFamily: "Inter-Regular" }}
                      placeholderTextColor="#666"
                      keyboardType="phone-pad"
                      value={phone}
                      onChangeText={setPhone}
                      onFocus={() => setIsPhoneFocused(true)}
                      onBlur={() => setIsPhoneFocused(false)}
                    />
                  </View>
                </View>

                <View className="mt-12 items-center w-full">
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() =>
                      router.push("/(onboarding)/CountrySelection")
                    }
                    className="w-full bg-[#D4B475] h-14 rounded-2xl items-center justify-center mb-6 shadow-xl"
                  >
                    <Text className="text-black text-lg font-bold">
                      Sign up
                    </Text>
                  </TouchableOpacity>

                  <View className="flex-row items-center justify-center">
                    <Text
                      className="text-white/70 text-base"
                      style={{ fontFamily: "Inter-Regular" }}
                    >
                      Already have an account?{" "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/(auth)/signIn")}
                    >
                      <Text
                        className="text-[#D4B475] text-base font-bold"
                        style={{ fontFamily: "Inter-Regular" }}
                      >
                        Sign in
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </ScrollView>
          </KeyboardAvoidingView>
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
}
