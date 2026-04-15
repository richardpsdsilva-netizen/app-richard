import React from "react";
import { Image, ScrollView, Text, TouchableOpacity, View } from "react-native";


import { styles } from "./style";


export default function App() {
  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
      <Image source={require("../../assets/images/logo.png")} style={styles.logo} />
        <Text style={styles.headerTitle}>App SEDUC </Text>
      </View>

      {/* MENU */}
      <View style={styles.menu}>
        <Text style={styles.menuItem}>Home</Text>
        <Text style={styles.menuItem}>Perfil</Text>
        <Text style={styles.menuItem}>Config</Text>
      </View>

      {/* CONTEÚDO */}
      <ScrollView style={styles.content}>
        <Text style={styles.title}> Bem-vindo 🧑‍🎓</Text>

        {/* CARD 1 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}>Aula React Native</Text>
          <Text>Aprendendo a criar layouts modernos</Text>
        </View>

        {/* CARD 2 */}
        <View style={styles.card}>
          <Text style={styles.cardTitle}> Aula 1</Text>
          <Text>Layouts Modernos </Text>
        </View>

        {/* BOTÃO */}
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Clique aqui</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
