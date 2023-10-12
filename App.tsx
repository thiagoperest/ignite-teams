import React from "react";
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { Groups } from "@screens/Groups";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" translucent />
      <SafeAreaView style={styles.safeArea}>
        <Groups />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: "#131016",
  },
});
