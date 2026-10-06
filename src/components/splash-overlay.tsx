import { Image } from "expo-image";
import * as SplashScreen from "expo-splash-screen";
import { useEffect, useState } from "react";
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

type Props = { ready: boolean };

export default function SplashOverlay({ ready }: Props) {
  const [visible, setVisible] = useState(true);
  const [imageLoaded, setImageLoaded] = useState(false);
  const opacity = useSharedValue(1);
  const scale = useSharedValue(0.7);

  const containerStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
    backgroundColor: "#FBF5E9",
  }));
  const logoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  // Segurança: se a imagem falhar ou demorar, arranca na mesma ao fim de 2s
  useEffect(() => {
    const t = setTimeout(() => setImageLoaded(true), 2000);
    return () => clearTimeout(t);
  }, []);

  // Só arranca quando fontes + imagem estão prontas
  useEffect(() => {
    if (!ready || !imageLoaded) return;

    SplashScreen.hideAsync().catch(() => {});

    scale.value = withTiming(1, {
      duration: 700,
      easing: Easing.out(Easing.back(1.5)),
    });

    opacity.value = withDelay(
      1500,
      withTiming(0, { duration: 400 }, (finished) => {
        if (finished) runOnJS(setVisible)(false);
      }),
    );
  }, [ready, imageLoaded, opacity, scale]);

  if (!visible) return null;

  return (
    <Animated.View
      className="absolute inset-0 z-[1000] items-center justify-center bg-background"
      style={containerStyle}
    >
      <Animated.View style={logoStyle}>
        <Image
          source={require("@/assets/images/expo-logo.png")}
          className="h-32 w-32"
          contentFit="contain"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageLoaded(true)}
        />
      </Animated.View>
    </Animated.View>
  );
}
