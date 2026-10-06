import { ORANGE } from "@/constants/theme";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Text, View } from "react-native";

export default function TopBar() {
  return (
    <View className="flex-row items-center justify-between px-4">
      <View className="flex-row items-center gap-2">
        <Image
          source={require("@/assets/images/expo-logo.png")}
          className="h-9 w-9"
          contentFit="contain"
        />
        <Text className="text-xs font-semibold tracking-widest text-neutral-700">
          CENA
        </Text>
      </View>
      <View className="flex-row items-center gap-4">
        <View>
          <Ionicons name="notifications-outline" size={24} color={ORANGE} />
          <View className="absolute right-0 top-0 h-2 w-2 rounded-full bg-black" />
        </View>
        <Image
          source={{ uri: "https://i.pravatar.cc/100?img=47" }}
          style={{ width: 36, height: 36, borderRadius: 18 }}
        />
      </View>
    </View>
  );
}
