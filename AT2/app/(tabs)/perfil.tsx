import { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Link } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function PerfilScreen() {
  const [profile, setProfile] = useState<any>(null);

  useEffect(() => {
    loadProfile();
  }, []);

  async function loadProfile() {
    const data = await AsyncStorage.getItem("userProfile");
    if (data) setProfile(JSON.parse(data));
  }

  return (
    <LinearGradient
      colors={["#fef6f9", "#f0fff9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.card}>
        <Text style={styles.title}>Perfil</Text>

        {profile ? (
          <>
            <View style={styles.field}>
              <Text style={styles.label}>Nome completo</Text>
              <Text style={styles.info}>
                {profile.prinome} {profile.sobrenome}
              </Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Idade</Text>
              <Text style={styles.info}>{profile.idade}</Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Instituição</Text>
              <Text style={styles.info}>{profile.instituicao}</Text>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Curso</Text>
              <Text style={styles.info}>{profile.curso}</Text>
            </View>
          </>
        ) : (
          <Text style={styles.emptyText}>Os dados ainda não foram salvos</Text>
        )}

        <Link href="/modal" asChild>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Alterar perfil</Text>
          </TouchableOpacity>
        </Link>
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
    width: "85%",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
    borderRadius: 18,
    paddingVertical: 35,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: "rgba(240, 210, 220, 0.4)",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#d88ca1",
    marginBottom: 25,
    textAlign: "center",
    letterSpacing: 0.5,
  },
  field: {
    marginBottom: 15,
  },
  label: {
    fontSize: 13,
    fontWeight: "500",
    color: "#7d8b88",
    marginBottom: 4,
  },
  info: {
    fontSize: 16,
    color: "#37413f",
  },
  emptyText: {
    textAlign: "center",
    color: "#7d8b88",
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#f3a8b6",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 25,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.3,
  },
});
