import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
  },

  /* HEADER */
  header: {
    backgroundColor: "#6200ee",
    paddingTop: 20,
    paddingBottom: 20,
    alignItems: "center",
  },

  logo: {
    width: 60,
    height: 60,
    marginBottom: 10,
  },

  headerTitle: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  /* MENU */
  menu: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#3700b3",
    paddingVertical: 10,
  },

  menuItem: {
    color: "#fff",
    fontWeight: "bold",
  },

  /* CONTEÚDO */
  content: {
    padding: 20,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 20,
  },

  /* CARD */
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    elevation: 3, // sombra Android
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },

  /* BOTÃO */
  button: {
    backgroundColor: "#6200ee",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
});