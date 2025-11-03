import { View, Text, StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

export default function HomeScreen() {
  return (
    <LinearGradient
      colors={["#fef6f9", "#f0fff9"]} 
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Bem-vinda(o)!</Text>
        <Text style={styles.subtitle}>
          Vá até a aba <Text style={styles.highlight}>Perfil</Text> e edite ou visualize suas informações
        </Text>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 20,
    paddingVertical: 40,
    paddingHorizontal: 25,
    width: "85%",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "rgba(240, 210, 220, 0.4)",
  },
  title: {
    fontSize: 28,
    fontWeight: "600",
    color: "#d88ca1", 
    marginBottom: 12,
    letterSpacing: 0.5,
  },
  subtitle: {
    fontSize: 16,
    color: "#678f86", 
    textAlign: "center",
    lineHeight: 22,
  },
  highlight: {
    color: "#d88ca1",
    fontWeight: "500",
  },
});
