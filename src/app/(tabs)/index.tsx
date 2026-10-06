import TopBar from "@/components/top-bar";
import { CategoriesSession } from "@/features/categories/components/categories-session";
import { Recommendation } from "@/features/products/components/recommendation";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Pressable, ScrollView, Text, TextInput, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();

  return (
    <View className="flex-1">
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 8,
          paddingBottom: insets.bottom + 140, // espaço para a tab bar flutuante
        }}
      >
        {/* Header */}
        <TopBar />

        {/* Pesquisa */}
        <View className="mx-4 mt-4 h-11 flex-row items-center rounded-2xl bg-neutral-200/70 px-3">
          <Ionicons name="search-outline" size={18} color="#9ca3af" />
          <TextInput
            placeholder="Search for sneakers, brands..."
            placeholderTextColor="#9ca3af"
            className="ml-2 flex-1 text-sm"
          />
          <Ionicons name="scan-outline" size={18} color="#9ca3af" />
        </View>

        {/* Banner */}
        <LinearGradient
          colors={["#f97316", "#fb923c", "#f59e60"]}
          start={{ x: 0, y: 0.5 }}
          end={{ x: 1, y: 0.5 }}
          style={{
            marginHorizontal: 16,
            marginTop: 16,
            borderRadius: 20,
            padding: 20,
            height: 190,
            overflow: "hidden",
          }}
        >
          <Text className="text-[11px] uppercase tracking-widest text-white/80">
            Destaques
          </Text>
          <Text className="mt-2 text-[22px] font-bold leading-7 text-white">
            PC {`\n`}GAMER
          </Text>
          <Text className="mt-2 w-[55%] text-xs text-white/90">
            Descubra a última coleção de ténis.
          </Text>
          <Pressable className="mt-3 flex-row items-center self-start rounded-full bg-white px-4 py-2 active:opacity-80">
            <Text className="mr-1 text-sm font-semibold">Comprar Agora</Text>
            <Ionicons name="arrow-forward" size={14} />
          </Pressable>
          <Image
            source={require("@/assets/images/demo.png")}
            style={{
              position: "absolute",
              right: 8,
              top: 24,
              width: 130,
              height: 130,
            }}
            contentFit="contain"
          />
        </LinearGradient>

        {/* Categorias */}
        <CategoriesSession />

        {/* Recomendação */}
        <Recommendation />
      </ScrollView>
    </View>
  );
}
