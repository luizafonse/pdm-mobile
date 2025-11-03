import { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";

export default function ModalScreen() {
  const router = useRouter();
  const [prinome, setPriNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [idade, setIdade] = useState("");
  const [instituicao, setInstituicao] = useState("");
  const [curso, setCurso] = useState("");

  useEffect(() => {
    loadData();
  }, []);

  async function loadData() {
    const data = await AsyncStorage.getItem("userProfile");
    if (data) {
      const parsed = JSON.parse(data);
      setPriNome(parsed.prinome || "");
      setSobrenome(parsed.sobrenome || "");
      setIdade(parsed.idade || "");
      setInstituicao(parsed.instituicao || "");
      setCurso(parsed.curso || "");
    }
  }

  async function saveProfile() {
    const userData = { prinome, sobrenome, idade, instituicao, curso };
    await AsyncStorage.setItem("userProfile", JSON.stringify(userData));
    router.back();
  }

  return (
    <LinearGradient
      colors={["#fef6f9", "#f0fff9"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.form}>
          <Text style={styles.title}>Editar Perfil</Text>

          <View style={styles.inputGroup}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
              style={styles.input}
              value={prinome}
              onChangeText={setPriNome}
              placeholder="Insira o nome"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Sobrenome</Text>
            <TextInput
              style={styles.input}
              value={sobrenome}
              onChangeText={setSobrenome}
              placeholder="Insira o sobrenome"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Idade</Text>
            <TextInput
              style={styles.input}
              keyboardType="numeric"
              value={idade}
              onChangeText={setIdade}
              placeholder="Insira a idade"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Instituição</Text>
            <TextInput
              style={styles.input}
              value={instituicao}
              onChangeText={setInstituicao}
              placeholder="Insira a instituição"
              placeholderTextColor="#aaa"
            />
          </View>
          <View style={styles.inputGroup}>
            <Text style={styles.label}>Curso</Text>
            <TextInput
              style={styles.input}
              value={curso}
              onChangeText={setCurso}
              placeholder="Insira o nome do curso"
              placeholderTextColor="#aaa"
            />
          </View>

          <TouchableOpacity style={styles.saveButton} onPress={saveProfile}>
            <Text style={styles.saveText}>Salvar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.saveButton, styles.cancelButton]}
            onPress={() => router.back()}
          >
            <Text style={styles.saveText}>Cancelar</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  form: {
    flexGrow: 1,
    padding: 25,
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "600",
    color: "#d88ca1",
    textAlign: "center",
    marginBottom: 30,
    letterSpacing: 0.5,
  },
  inputGroup: { marginBottom: 18 },
  label: {
    color: "#678f86",
    fontWeight: "500",
    marginBottom: 6,
    fontSize: 14,
  },
  input: {
    backgroundColor: "rgba(255,255,255,0.8)",
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 14,
    fontSize: 16,
    borderWidth: 1,
    borderColor: "rgba(240, 210, 220, 0.5)",
    color: "#333",
  },
  saveButton: {
    backgroundColor: "#f3a8b6",
    paddingVertical: 14,
    borderRadius: 10,
    marginTop: 15,
  },
  cancelButton: {
    backgroundColor: "#a2d5c6",
  },
  saveText: {
    color: "#fff",
    fontWeight: "600",
    textAlign: "center",
    fontSize: 16,
    letterSpacing: 0.3,
  },
});
