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

export default function SignInScreen({ isSignUp = false }) {
  const [email, setEmail] = useState("");
  const [extraField, setExtraField] = useState("");

  const [isEmailFocused, setIsEmailFocused] = useState(false);
  const [isExtraFocused, setIsExtraFocused] = useState(false);

  return (
    <View className="flex-1 bg-black">
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
                {/* Header Section */}
                <View
                  className="items-center w-full mb-10"
                  style={{ marginTop: height * 0.05 }}
                >
                  <Text
                    className="text-white text-4xl font-bold tracking-tight text-left self-start"
                    style={{ fontFamily: "Oswald-Regular" }}
                  >
                    Sign In
                  </Text>
                </View>

                <View className="w-full gap-y-8">
                  {/* Email Field */}
                  <View className="w-full">
                    <Text
                      className="text-white/90 text-sm font-medium mb-3 ml-1"
                      style={{ fontFamily: "Inter-Regular" }}
                    >
                      Email
                    </Text>
                    <TextInput
                      className={`w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border ${
                        isEmailFocused ? "border-[#c5a35d]" : "border-white/5"
                      }`}
                      onFocus={() => setIsEmailFocused(true)}
                      onBlur={() => setIsEmailFocused(false)}
                      placeholder="you@example.com"
                      placeholderTextColor="#666"
                      keyboardType="email-address"
                      style={{ fontFamily: "Inter-Regular" }}
                      autoCapitalize="none"
                      value={email}
                      onChangeText={setEmail}
                    />
                  </View>

                  <View className="w-full">
                    <Text
                      className="text-white/90 text-sm font-medium mb-3 ml-1"
                      style={{ fontFamily: "Inter-Regular" }}
                    >
                      {isSignUp ? "Phone number" : "Password"}
                    </Text>
                    <TextInput
                      className={`w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border ${
                        isExtraFocused ? "border-[#c5a35d]" : "border-white/5"
                      }`}
                      onFocus={() => setIsExtraFocused(true)}
                      onBlur={() => setIsExtraFocused(false)}
                      placeholder={
                        isSignUp ? "you@example.com" : "****************"
                      }
                      placeholderTextColor="#666"
                      secureTextEntry={!isSignUp}
                      keyboardType={isSignUp ? "phone-pad" : "default"}
                      style={{ fontFamily: "Inter-Regular" }}
                      value={extraField}
                      onChangeText={setExtraField}
                    />
                  </View>
                </View>

                {/* Bottom Section */}
                <View className="items-center mt-10 w-full">
                  <TouchableOpacity
                    activeOpacity={0.8}
                    className="w-full bg-[#D4B475] h-14 rounded-2xl items-center justify-center mb-6 shadow-xl"
                    onPress={() =>
                      !isSignUp &&
                      router.replace("/(onboarding)/CountrySelection")
                    }
                  >
                    <Text className="text-black text-lg font-bold">
                      {isSignUp ? "Sign up" : "Sign In"}
                    </Text>
                  </TouchableOpacity>

                  <View className="flex-row items-center justify-center">
                    <Text className="text-white/70 text-sm">
                      {isSignUp
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/(auth)/signUp")}
                    >
                      <Text className="text-[#D4B475] text-sm font-bold">
                        Sign up
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
