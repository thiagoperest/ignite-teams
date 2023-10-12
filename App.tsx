import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Groups } from "@screens/Groups";
import { ThemeProvider } from "styled-components";
import theme from "@theme/index";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaView style={styles.safeArea}>
        <Groups />
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
