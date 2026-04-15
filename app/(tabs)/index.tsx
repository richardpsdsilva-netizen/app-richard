import { Image, Text, TouchableOpacity, View } from "react-native";
import { styles } from "./style";

export default function HomeScreen() {
  return (
    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require("../../assets/images/foto.png")} // coloque sua imagem aqui
          style={styles.logo}
        />
        <Text style={styles.title}>Painel SEDUC</Text>
      </View>

      {/* CARDS */}
      <View style={styles.grid}>
        <View style={styles.card}>
          <Text style={styles.number}>12</Text>
          <Text style={styles.label}>Aulas</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>30</Text>
          <Text style={styles.label}>Alunos</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>5</Text>
          <Text style={styles.label}>Projetos</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.number}>2</Text>
          <Text style={styles.label}>Pendentes</Text>
        </View>
      </View>

      {/* BOTÕES */}
      <TouchableOpacity style={styles.btnPrimary}>
        <Text style={styles.btnText}>📊 Conteúdos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnSecondary}>
        <Text style={styles.btnTextDark}>⚙️ Configurações</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.btnGradient}>
        <Text style={styles.btnText}>Ver Detalhes</Text>
      </TouchableOpacity>

    </View>
  );
}

