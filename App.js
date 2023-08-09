import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { useFonts } from "expo-font";
import { Orienta_400Regular } from "@expo-google-fonts/orienta";
import { MetalMania_400Regular } from "@expo-google-fonts/metal-mania";
import Register from "./src/screens/register";
import HeadPage from "./src/components/headPage";
import Rotas from "./src/routes/rotas";


export default function App() {
  let [fontsLoaded] = useFonts({
    Orienta_400Regular,
    MetalMania_400Regular
  });

  if (!fontsLoaded) {
    return null;
  }

  return (
    <>
      <HeadPage />
      <Rotas />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
