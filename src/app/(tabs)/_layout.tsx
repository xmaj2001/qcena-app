import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ title: "Home" }} />
      <Tabs.Screen
        name="productdetails"
        options={{ title: "Product Details" }}
      />
    </Tabs>
  );
}
