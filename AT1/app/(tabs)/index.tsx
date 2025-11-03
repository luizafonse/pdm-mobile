import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity, Pressable, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { WebView } from "react-native-webview";

export default function HomeScreen() {
  const [showWebView, setShowWebView] = useState(false);

  const githubUrl = "https://github.com/luizafonse";
  const githubPhoto = "https://github.com/luizafonse.png";

  if (showWebView) {
    return <WebView source={{ uri: githubUrl }} />;
  }

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={["#ff9eb5", "#ffc1f3"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.gradientBorder}
      >
        <View style={styles.imageContainer}>
          <Image source={{ uri: githubPhoto }} style={styles.image} />
        </View>
      </LinearGradient>

      <Text style={styles.name}>Afonso Luiz Soares Batista</Text>

      <TouchableOpacity
        style={styles.githubButton}
        onPress={() => setShowWebView(true)}
      >
        <Text style={styles.githubButtonText}>Open my GitHub</Text>
      </TouchableOpacity>

      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.touchable} onPress={() => alert("Isso é um TouchableOpacity")}>
          <Text style={styles.buttonText}>TouchableOpacity</Text>
        </TouchableOpacity>

        <Pressable
          style={({ pressed }) => [
            styles.pressable,
            { backgroundColor: pressed ? "#f9bcd5" : "#f48fb1" },
          ]}
          onPress={() => alert("Isso é um Pressable")}
        >
          <Text style={styles.pressableText}>Pressable</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  gradientBorder: {
    padding: 4,
    borderRadius: 100,
  },
  imageContainer: {
    backgroundColor: "#fff",
    borderRadius: 100,
    padding: 4,
  },
  image: {
    width: 140,
    height: 140,
    borderRadius: 100,
  },
  name: {
    marginTop: 15,
    fontSize: 22,
    fontWeight: "600",
    color: "#333",
  },
  githubButton: {
    marginTop: 25,
    backgroundColor: "#f06292",
    paddingVertical: 12,
    borderRadius: 30,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  githubButtonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  touchable: {
    flex: 2, 
    backgroundColor: "#ffe6f2",
    paddingVertical: 12,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#ffcce0",
    alignItems: "center",
    marginRight: 10,
  },
  pressable: {
    flex: 1,
    paddingVertical: 12,
    borderRadius: 25,
    alignItems: "center",
  },
  buttonText: {
    color: "#ff5c8d",
    fontWeight: "600",
    fontSize: 16,
  },
  pressableText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});
