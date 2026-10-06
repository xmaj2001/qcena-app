import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

export default function HomeScreen() {
  const insets = useSafeAreaInsets();
  const router = useRouter();

  return (
    <View className="flex-1" style={{ paddingTop: insets.top }}>
      {/* Imagem de fundo: encosta no topo, sem paddingTop */}
      <View className="h-[65%] w-full">
        <Image
          source={require("@/assets/images/bg.png")}
          className="h-full w-full"
          contentFit="cover"
        />
      </View>

      {/* Conteúdo: sobe um bocado por cima do fade */}
      <View className="-mt-20 items-center px-8">
        <View className="flex items-center gap-4">
          <Text className="font-display text-[44px] text-primary">Qcena</Text>
          <View className="h-[2px] w-[200px] bg-primary" />
        </View>
        <Text className="mt-4 text-center text-[15px] leading-6 text-black">
          Conectamos clientes a prestadores de serviços verificados. Pagamentos
          seguros, acompanhamento em tempo real.
        </Text>
      </View>

      {/* Botão fixo em baixo, respeitando a safe area */}
      <View
        className="absolute left-0 right-0 items-center px-8"
        style={{ bottom: insets.bottom + 24 }}
      >
        <Pressable
          onPress={() => router.push("/(tabs)")}
          className="h-[56px] w-full items-center justify-center rounded-2xl bg-primary active:opacity-80"
        >
          <Text className="font-sans text-base text-white">INICIAR SESSÃO</Text>
        </Pressable>
      </View>
    </View>
  );
}
