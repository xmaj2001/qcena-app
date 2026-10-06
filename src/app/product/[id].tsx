import { Ionicons } from "@expo/vector-icons";
import { Image, ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

// Dados de exemplo do produto
const PRODUCT = {
  id: "1",
  name: "Nike Air Force 1 '07",
  price: "129.00 Kz",
  rating: 4.8,
  reviewsCount: 124,
  description:
    "A timeless classic, the Nike Air Force 1 '07 combines iconic style with everyday comfort. Perfect for any occasion.",
  colors: [
    { id: "white", name: "White", hex: "#FFFFFF" },
    { id: "light-bone", name: "Light Bone", hex: "#E3DFD5" },
    { id: "brown", name: "Brown", hex: "#7A5643" },
    { id: "black", name: "Black", hex: "#1F1F1F" },
  ],
  sizes: ["36", "37", "38", "39", "40", "41", "42", "43"],
  images: [
    "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=600&q=80",
    "https://images.unsplash.com/photo-1584917865442-de89df76afd3?w=300&q=80",
    "https://images.unsplash.com/photo-1524805444758-089113d48a6d?w=300&q=80",
    "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?w=300&q=80",
  ],
};

export default function ProductDetailsScreen() {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState("light-bone");
  const [selectedSize, setSelectedSize] = useState("38");
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);

  const selectedColorData = PRODUCT.colors.find((c) => c.id === selectedColor);
  const insets = useSafeAreaInsets();
  const router = useRouter();
  return (
    <View
      className="flex-1"
      // Apenas paddingTop no container principal
      style={{ paddingTop: insets.top }}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        // Adicionamos a altura do botão (~80px) + a margem de segurança inferior
        contentContainerStyle={{ paddingBottom: insets.bottom + 90 }}
      >
        {/* Banner Superior Laranja */}
        <ImageBackground
          source={{ uri: PRODUCT.images[selectedImage] }}
          contentFit="cover"
          imageStyle={{ borderRadius: 24 }} // Aplica o borderRadius diretamente à imagem interna
          className="relative mx-4 mt-2 h-[380px] overflow-hidden rounded-3xl p-4" // overflow-hidden garante o corte das bordas
        >
          <LinearGradient
            colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.1)", "transparent"]}
            locations={[0, 0.4, 1]}
            className="absolute left-0 right-0 top-0 h-32"
          />
          <View className="flex-row items-center justify-between">
            <Pressable
              onPress={() => router.back()}
              className="h-10 w-10 items-center justify-center rounded-full bg-white/90 active:opacity-80"
            >
              <Ionicons name="arrow-back" size={20} color="#1F1F1F" />
            </Pressable>

            <Text className="text-base font-bold text-white tracking-widest">
              DETALHES
            </Text>

            <Pressable
              onPress={() => setIsFavorite(!isFavorite)}
              className="h-10 w-10 items-center justify-center rounded-full bg-white/90 active:opacity-80"
            >
              <Ionicons
                name={isFavorite ? "heart" : "heart-outline"}
                size={20}
                color={isFavorite ? "#FF7315" : "#1F1F1F"}
              />
            </Pressable>
          </View>

          <View className="mt-4 flex-1 flex-row items-center justify-between">
            <View className="flex-1 items-center justify-center pr-2"></View>

            <View className="gap-2.5">
              {PRODUCT.images.map((img, index) => (
                <Pressable
                  key={index}
                  onPress={() => setSelectedImage(index)}
                  className={`h-12 w-12 overflow-hidden rounded-md bg-white/40 border-2 ${
                    selectedImage === index
                      ? "border-white"
                      : "border-transparent"
                  }`}
                >
                  <Image
                    source={{ uri: img }}
                    className="h-full w-full"
                    resizeMode="cover"
                  />
                </Pressable>
              ))}
            </View>
          </View>
        </ImageBackground>

        {/* Informações Principais do Produto */}
        <View className="px-5 mt-5">
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-neutral-900 flex-1 pr-2">
              {PRODUCT.name}
            </Text>

            <View className="flex-row items-center gap-3 rounded-2xl bg-neutral-200/60 p-1.5">
              <Pressable
                onPress={() => setQuantity((q) => Math.max(1, q - 1))}
                className="h-7 w-7 items-center justify-center rounded-xl bg-white shadow-sm active:opacity-70"
              >
                <Ionicons name="remove" size={16} color="#1F1F1F" />
              </Pressable>

              <Text className="text-sm font-semibold text-neutral-800">
                {quantity}
              </Text>

              <Pressable
                onPress={() => setQuantity((q) => q + 1)}
                className="h-7 w-7 items-center justify-center rounded-xl bg-primary shadow-sm active:opacity-70"
              >
                <Ionicons name="add" size={16} color="#FFFFFF" />
              </Pressable>
            </View>
          </View>

          <View className="mt-3 flex-row items-center justify-between">
            <Text className="text-2xl font-black text-neutral-900">
              {PRODUCT.price}
            </Text>

            <View className="flex-row items-center gap-1 rounded-full bg-neutral-100 px-3 py-1">
              <View className="flex-row">
                {[...Array(5)].map((_, i) => (
                  <Ionicons key={i} name="star" size={13} color="#FFC107" />
                ))}
              </View>
              <Text className="text-xs font-bold text-neutral-800 ml-1">
                {PRODUCT.rating}
              </Text>
              <Text className="text-xs text-neutral-400">
                ({PRODUCT.reviewsCount})
              </Text>
            </View>
          </View>

          <Text className="mt-3 text-xs leading-5 text-neutral-500">
            {PRODUCT.description}
          </Text>

          <View className="mt-5">
            <Text className="text-xs text-neutral-500 font-medium">
              Color:{" "}
              <Text className="font-semibold text-neutral-800">
                {selectedColorData?.name}
              </Text>
            </Text>

            <View className="mt-2.5 flex-row items-center gap-3">
              {PRODUCT.colors.map((color) => {
                const isSelected = selectedColor === color.id;
                return (
                  <Pressable
                    key={color.id}
                    onPress={() => setSelectedColor(color.id)}
                    className={`h-10 w-10 items-center justify-center rounded-full border-2 ${
                      isSelected ? "border-primary" : "border-transparent"
                    }`}
                  >
                    <View
                      className="h-8 w-8 rounded-full border border-neutral-300 shadow-sm"
                      style={{ backgroundColor: color.hex }}
                    />
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View className="mt-5">
            <View className="flex-row items-center justify-between">
              <Text className="text-xs font-bold text-primary">Size</Text>
              <Pressable>
                <Text className="text-xs font-medium text-neutral-500 underline">
                  Size Guide
                </Text>
              </Pressable>
            </View>

            <View className="mt-3 flex-row flex-wrap justify-between gap-y-3">
              {PRODUCT.sizes.map((size) => {
                const isSelected = selectedSize === size;
                return (
                  <Pressable
                    key={size}
                    onPress={() => setSelectedSize(size)}
                    className={`h-12 w-[22%] items-center justify-center rounded-xl border ${
                      isSelected
                        ? "border-2 border-primary bg-primary"
                        : "border-neutral-200 bg-neutral-100/80"
                    }`}
                  >
                    <Text
                      className={`text-sm font-semibold ${
                        isSelected ? "text-white" : "text-primary"
                      }`}
                    >
                      {size}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Botão Fixo de Encomendar com Padding Inferior Dinâmico */}
      <View
        className="absolute bottom-0 left-0 right-0 border-t border-neutral-100 bg-white/90 px-6 pt-4 backdrop-blur-md"
        style={{ paddingBottom: Math.max(insets.bottom, 16) }}
      >
        <Pressable className="flex-row items-center justify-center gap-2 rounded-2xl bg-primary py-4 shadow-lg active:opacity-90">
          <Ionicons name="bag-handle-outline" size={20} color="#FFFFFF" />
          <Text className="text-base font-bold tracking-wider text-white">
            ENCOMENDAR
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
