import { Pressable, ScrollView, Text, View } from "react-native";
import { ProductCard } from "./product-card";

// Dados de exemplo mapeados com produtos da primeira fase
const RECOMMENDED_PRODUCTS = [
  {
    id: "1",
    name: "Perfume Dior Sauvage 100ml",
    category: "Beleza",
    price: "680,00 Kz",
    image:
      "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&q=80",
  },
  {
    id: "2",
    name: "Tênis Nike Air Force 1",
    category: "Calçados",
    price: "799,90 Kz",
    image:
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=300&q=80",
  },
  {
    id: "3",
    name: "Bolsa Couro Elegance",
    category: "Acessórios",
    price: "349,00 Kz",
    image:
      "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80",
  },
  {
    id: "4",
    name: "Relógio Prata Minimalista",
    category: "Acessórios",
    price: "450,00 Kz",
    image:
      "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&q=80",
  },
];

export const Recommendation = () => {
  return (
    <View className="mt-6">
      {/* Cabeçalho da Seção */}
      <View className="flex-row items-center justify-between px-4">
        <Text className="font-display text-lg font-semibold text-neutral-900">
          Recomendação
        </Text>
        <Pressable className="opacity-5">
          <Text className="text-sm font-medium text-neutral-500">
            Ver Todos
          </Text>
        </Pressable>
      </View>

      {/* Carrossel de Cards */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 16 }}
        className="mt-3"
      >
        {RECOMMENDED_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </ScrollView>
    </View>
  );
};
