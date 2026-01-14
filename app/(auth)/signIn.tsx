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

export default function AuthScreen({ isSignUp = true }) {
  const [email, setEmail] = useState("");
  const [extraField, setExtraField] = useState("");

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
              <View className="flex-1 px-8  ">
                {/* Header Section */}
                <View style={{ marginTop: height * 0.1 }}>
                  <Text className="text-white text-5xl font-bold tracking-tight mt-40 mb-10">
                    Sign In
                  </Text>

                  {/* Input Fields */}
                  <View className="gap-y-6">
                    {/* Email Field */}
                    <View>
                      <Text className="text-white/90 text-[16px] font-medium mb-3 ml-1">
                        Email
                      </Text>
                      <TextInput
                        className="w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border border-white/5"
                        placeholder="you@example.com"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                      />
                    </View>

                    {/* Dynamic Field (Phone or Password) */}
                    <View>
                      <Text className="text-white/90 text-[16px] font-medium mb-3 ml-1">
                        {isSignUp ? "Phone number" : "Password"}
                      </Text>
                      <TextInput
                        className="w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border border-white/5"
                        placeholder={
                          isSignUp ? "you@example.com" : "****************"
                        }
                        placeholderTextColor="#666"
                        secureTextEntry={!isSignUp}
                        keyboardType={isSignUp ? "phone-pad" : "default"}
                        value={extraField}
                        onChangeText={setExtraField}
                      />
                    </View>
                  </View>
                </View>

                {/* Bottom Section (Buttons) */}
                <View className="items-center mt-10">
                  <TouchableOpacity
                    activeOpacity={0.8}
                    className="w-full bg-[#c5a35d] h-14 rounded-2xl items-center justify-center mb-6 shadow-xl"
                  >
                    <Text className="text-black text-lg font-bold">
                      Sign In
                    </Text>
                  </TouchableOpacity>

                  <View className="flex-row items-center">
                    <Text className="text-white/70 text-base">
                      {isSignUp
                        ? "Already have an account? "
                        : "Don't have an account? "}
                    </Text>
                    <TouchableOpacity
                      onPress={() => router.push("/(auth)/signUp")}
                    >
                      <Text className="text-[#c5a35d] text-base font-bold">
                        Sign Up
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
