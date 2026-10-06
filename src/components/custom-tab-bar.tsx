import { Ionicons } from "@expo/vector-icons";
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const ORANGE = "#f97316";

const ICONS: Record<
  string,
  [keyof typeof Ionicons.glyphMap, keyof typeof Ionicons.glyphMap]
> = {
  index: ["home", "home-outline"],
  explore: ["compass", "compass-outline"],
  notifications: ["notifications", "notifications-outline"],
  account: ["person-circle", "person-circle-outline"],
};

export default function CustomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const renderTab = (route: (typeof state.routes)[number], index: number) => {
    const focused = state.index === index;
    const { options } = descriptors[route.key];
    const [on, off] = ICONS[route.name] ?? ["ellipse", "ellipse-outline"];

    return (
      <Pressable
        key={route.key}
        onPress={() => navigation.navigate(route.name)}
        className="flex-1 items-center justify-center gap-1"
      >
        <View>
          <Ionicons name={focused ? on : off} size={22} color="#fff" />
          {route.name === "notifications" && (
            <View className="absolute -right-2 -top-2 h-4 w-4 items-center justify-center rounded-full bg-pink-500">
              <Text className="text-[9px] font-bold text-white">2</Text>
            </View>
          )}
        </View>
        <Text
          className={`text-[10px] text-white ${focused ? "font-bold" : "opacity-90"}`}
        >
          {options.title ?? route.name}
        </Text>
      </Pressable>
    );
  };

  const half = Math.ceil(state.routes.length / 2);

  return (
    <View
      style={{
        position: "absolute",
        left: 16,
        right: 16,
        bottom: insets.bottom + 8,
      }}
      className="h-[60px] flex-row items-center rounded-full bg-[#f97316] px-2"
    >
      {state.routes.slice(0, half).map((r, i) => renderTab(r, i))}

      {/* Botão central */}
      <View className="-mt-8 h-[60px] w-[60px] items-center justify-center rounded-full bg-white/90 shadow-lg">
        <Pressable
          onPress={() => {}}
          className="h-11 w-11 items-center justify-center rounded-full border-[3px] border-[#f97316] bg-white active:opacity-80"
        >
          <View className="h-3.5 w-3.5 rounded-full border-2 border-[#f97316]" />
        </Pressable>
      </View>

      {state.routes.slice(half).map((r, i) => renderTab(r, i + half))}
    </View>
  );
}
