import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { Product } from "../types";

export const ProductCard = ({ product }: { product: Product }) => {
  const router = useRouter();
  const handlePress = () => {
    router.push(`/product/${product.id}`);
  };

  return (
    <Pressable
      key={product.id}
      className="mr-4 w-44 rounded-xl bg-white p-2.5 shadow-sm active:opacity-90"
      onPress={handlePress}
    >
      {/* Container da Imagem */}
      <View className="relative h-40 w-full overflow-hidden rounded-lg bg-neutral-100">
        <Image
          source={{ uri: product.image }}
          className="h-full w-full"
          contentFit="cover"
        />
        {/* Botão de Favorito */}
        <Pressable className="absolute right-2 top-2 h-8 w-8 items-center justify-center rounded-full bg-white/80 backdrop-blur-md active:opacity-70">
          <Ionicons name="heart-outline" size={18} color="#1f2937" />
        </Pressable>
      </View>

      {/* Informações do Produto */}
      <View className="mt-2.5 gap-0.5">
        <Text className="text-[11px] font-medium text-neutral-400 uppercase">
          {product.category}
        </Text>
        <Text
          numberOfLines={1}
          className="text-sm font-semibold text-neutral-800"
        >
          {product.name}
        </Text>

        <View className="mt-1 flex-row items-center justify-between">
          <Text className="text-base font-bold text-neutral-900">
            {product.price}
          </Text>
          <Pressable className="h-7 w-7 items-center justify-center rounded-full bg-primary active:opacity-70">
            <Ionicons name="add" size={16} color="#ffffff" />
          </Pressable>
        </View>
      </View>
    </Pressable>
  );
};
