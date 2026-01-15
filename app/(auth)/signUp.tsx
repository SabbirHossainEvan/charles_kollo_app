import { router } from "expo-router";
import React, { useState } from "react";
import {
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

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  return (
    <View className="flex-1 ">
      {/* Background Texture */}
      <ImageBackground
        source={require("../../assets/images/Get started.png")}
        className="flex-1"
        resizeMode="cover"
      >
        <SafeAreaView className="flex-1 ">
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
          >
            <ScrollView
              contentContainerStyle={{ flexGrow: 1 }}
              showsVerticalScrollIndicator={false}
            >
              <View className="flex-1 px-6 ">
                <View>
                  {/* Header Title */}
                  <Text className="text-white text-5xl mt-40 font-bold mb-12">
                    Sign up
                  </Text>
                  {/* Input Fields Container */}
                  <View className="">
                    {/* Email Field */}
                    <View>
                      <Text className="text-white/90 text-lg mb-2 ml-1">
                        Email
                      </Text>
                      <TextInput
                        className="w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border border-white/5"
                        placeholder="you@example.com"
                        placeholderTextColor="#666"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        value={email}
                        onChangeText={setEmail}
                      />
                    </View>

                    {/* Phone Number Field */}
                    <View className="mt-6">
                      <Text className="text-white/90 text-lg mb-2 ml-1">
                        Phone number
                      </Text>
                      <TextInput
                        className="w-full bg-[#2A2A2A] h-16 rounded-2xl px-5 text-white text-base border border-white/5"
                        placeholder="you@example.com"
                        placeholderTextColor="#666"
                        keyboardType="phone-pad"
                        value={phone}
                        onChangeText={setPhone}
                      />
                    </View>
                  </View>
                  {/* Action Buttons */}
                  <View className="mt-10 items-center">
                    {/* Sign Up Button */}
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() =>
                        router.push("/(onboarding)/CountrySelection")
                      }
                      className="w-full bg-[#c5a35d] h-14 rounded-2xl items-center justify-center mb-6 shadow-md"
                    >
                      <Text className="text-black text-lg font-bold">
                        Sign up
                      </Text>
                    </TouchableOpacity>

                    {/* Footer Link */}
                    <View className="flex-row items-center">
                      <Text className="text-white/70 text-base">
                        Already have an account?{" "}
                      </Text>
                      <TouchableOpacity
                        onPress={() => router.push("/(auth)/signIn")}
                      >
                        <Text className="text-[#D4B475] text-base font-bold">
                          Sign in
                        </Text>
                      </TouchableOpacity>
                    </View>
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
