import { Ionicons } from "@expo/vector-icons";
import { Pressable, Text, View } from "react-native";

// Estrutura com id, nome e ícone específico para cada categoria
const CATEGORIES = [
  { id: "all", label: "Todas", icon: "grid-outline" },
  { id: "beauty", label: "Beleza", icon: "sparkles-outline" }, // Perfumes e Cremes
  { id: "accessories", label: "Acessórios", icon: "watch-outline" }, // Bolsas, Relógios e Acessórios
  { id: "footwear", label: "Calçados", icon: "footsteps-outline" }, // Tênis
] as const;

export const CategoriesSession = () => {
  return (
    <View className="mt-4 flex-row justify-between px-4">
      {CATEGORIES.map((category) => (
        <Pressable
          key={category.id}
          className="items-center gap-1 active:opacity-70"
        >
          <View className="h-[74px] w-[74px] items-center justify-center rounded-md bg-white shadow-sm">
            <Ionicons name={category.icon} size={22} color="#1f2937" />
          </View>
          <Text className="text-[11px] text-neutral-800">{category.label}</Text>
        </Pressable>
      ))}
    </View>
  );
};
