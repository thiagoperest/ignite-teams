import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Players } from "@screens/Players";
import { ThemeProvider } from "styled-components";
import {
  useFonts,
  Roboto_400Regular,
  Roboto_700Bold,
} from "@expo-google-fonts/roboto";
import theme from "@theme/index";
import { Loading } from "@components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_700Bold,
  });

  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />
      <SafeAreaView style={styles.safeArea}>
        {fontsLoaded ? <Players /> : <Loading />}
      </SafeAreaView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#131016",
  },
});
