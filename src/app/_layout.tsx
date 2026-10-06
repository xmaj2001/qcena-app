import SplashOverlay from "@/components/splash-overlay";
import { useFonts } from "expo-font";
import { Image, ImageBackground } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import * as Updates from "expo-updates";
import { cssInterop } from "nativewind";
import { useEffect } from "react";
import { Alert, View } from "react-native";
import "../global.css";

cssInterop(Image, { className: "style" });
cssInterop(LinearGradient, { className: "style" });
cssInterop(ImageBackground, { className: "style" });

SplashScreen.preventAutoHideAsync();

export default function StackLayout() {
  const [fontsLoaded, fontError] = useFonts({
    // ajusta para as tuas fontes
    // "Display": require("@/assets/fonts/Display.ttf"),
    // "Sans": require("@/assets/fonts/Sans.ttf"),
  });
  const ready = fontsLoaded || !!fontError;

  const { isUpdatePending } = Updates.useUpdates();

  useEffect(() => {
    if (isUpdatePending) {
      Alert.alert(
        "Atualização Pronta",
        "Uma nova versão foi descarregada. Deseja aplicar agora?",
        [
          { text: "Mais tarde", style: "cancel" },
          { text: "Reiniciar", onPress: () => Updates.reloadAsync() },
        ],
      );
    }
  }, [isUpdatePending]);

  return (
    <View
      className="flex-1 bg-background"
      style={{ backgroundColor: "#FBF5E9" }}
    >
      {ready && (
        <Stack screenOptions={{ headerShown: false }}>
          <Stack.Screen name="index" />
          <Stack.Screen name="(tabs)" options={{ gestureEnabled: false }} />
          <Stack.Screen name="product/[id]" />
        </Stack>
      )}
      <SplashOverlay ready={ready} />
    </View>
  );
}
