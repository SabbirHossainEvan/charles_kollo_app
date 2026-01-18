import { router } from "expo-router";
import {
  ChevronLeft,
  Info,
  MoreVertical,
  Send,
  Sparkles,
} from "lucide-react-native";
import React, { useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AIAssistant() {
  const [messages, setMessages] = useState<any[]>([]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollViewRef = useRef<ScrollView>(null);

  const suggestions = [
    "Explain NGX MARKET",
    "Stock index",
    "How trading works?",
    "Differentiate NDX and JDX",
  ];

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMsg = { id: Date.now(), text: text, sender: "user" };
    setMessages([...messages, userMsg]);
    setInputText("");
    setIsTyping(true);

    setTimeout(() => {
      const aiMsg = {
        id: Date.now() + 1,
        title: "AI assistance",
        text: "A stock index is a measurement of the performance of a group of stocks. Think of it like a thermometer for the stock market! Key points: • It tracks price changes of selected stocks • Helps gauge overall market health • Examples: NGX All-Share, JSE All-Share You can explore these indices in the Home tab of Nub Trade.",
        sender: "ai",
      };
      setMessages((prev) => [...prev, aiMsg]);
      setIsTyping(false);
    }, 2000);
  };

  return (
    <SafeAreaView className="flex-1 bg-[#121212]">
      <View className="flex-row items-center justify-between px-4 py-4 border-b border-white/5">
        <View className="flex-row items-center">
          <TouchableOpacity onPress={() => router.back()}>
            <ChevronLeft color="white" size={28} />
          </TouchableOpacity>
          <View className="ml-3">
            <Text className="text-white text-lg font-bold">AI Assistant</Text>
            <Text className="text-white/40 text-xs">
              Learn • Explore markets
            </Text>
          </View>
        </View>
        <TouchableOpacity>
          {messages.length > 0 ? (
            <MoreVertical color="white" size={20} />
          ) : (
            <Info color="white" size={20} />
          )}
        </TouchableOpacity>
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        className="flex-1"
      >
        <ScrollView
          ref={scrollViewRef}
          className="flex-1 px-4"
          contentContainerStyle={{ paddingVertical: 20 }}
          onContentSizeChange={() =>
            scrollViewRef.current?.scrollToEnd({ animated: true })
          }
        >
          {messages.length === 0 ? (
            <View className="flex-1 items-center justify-center mt-20">
              <View className="w-16 h-16 bg-[#c5a35d]/20 rounded-full items-center justify-center mb-6">
                <Sparkles color="#c5a35d" size={32} />
              </View>
              <Text className="text-white text-center text-lg px-10 leading-6 opacity-80">
                Hi! I can help you understand markets, concepts, and how Nub
                Trade works.
              </Text>
            </View>
          ) : (
            messages.map((item) => (
              <View
                key={item.id}
                className={`mb-6 ${item.sender === "user" ? "items-end" : "items-start"}`}
              >
                {item.sender === "user" ? (
                  <View className="flex-row items-center">
                    <View className="bg-[#c5a35d] px-4 py-3 rounded-2xl rounded-tr-none max-w-[80%]">
                      <Text className="text-black font-medium">
                        {item.text}
                      </Text>
                    </View>
                    <View className="w-8 h-8 bg-red-600 rounded-full items-center justify-center ml-2">
                      <Text className="text-white text-xs font-bold">AT</Text>
                      <View className="absolute bottom-0 right-0 w-2 h-2 bg-green-500 rounded-full border border-black" />
                    </View>
                  </View>
                ) : (
                  <View className="bg-[#1c1c1e] p-4 rounded-2xl w-full border border-white/5">
                    <View className="flex-row items-center mb-2">
                      <Sparkles color="#888" size={14} />
                      <Text className="text-white/50 text-xs ml-2 uppercase tracking-widest">
                        {item.title}
                      </Text>
                    </View>
                    <Text className="text-white/90 leading-6 text-[15px]">
                      {item.text}
                    </Text>
                  </View>
                )}
              </View>
            ))
          )}

          {isTyping && (
            <View className="flex-row mb-4">
              <View className="flex-row space-x-1">
                {[1, 2, 3, 4].map((i) => (
                  <View
                    key={i}
                    className="w-2 h-2 bg-[#c5a35d] rounded-full opacity-60"
                  />
                ))}
              </View>
            </View>
          )}
        </ScrollView>

        <View className="px-4 pb-6">
          {messages.length === 0 && (
            <View className="flex-row flex-wrap mb-4">
              {suggestions.map((s, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleSend(s)}
                  className="bg-[#1c1c1e] px-4 py-2 rounded-lg mr-2 mb-2 border border-white/10"
                >
                  <Text className="text-white/70 text-sm">{s}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <View className="flex-row items-center bg-[#1c1c1e] rounded-2xl px-4 py-2 border border-white/10">
            <TextInput
              placeholder="Ask About trading, markets..."
              placeholderTextColor="#555"
              className="flex-1 text-white h-12"
              value={inputText}
              onChangeText={setInputText}
              onSubmitEditing={() => handleSend(inputText)}
            />
            <TouchableOpacity
              onPress={() => handleSend(inputText)}
              className="bg-[#c5a35d] w-10 h-10 rounded-xl items-center justify-center"
            >
              <Send size={18} color="black" fill="black" />
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
