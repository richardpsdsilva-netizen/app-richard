import { StyleSheet } from "react-native";


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f4f7",
    padding: 20,
    justifyContent: "center",
  },

  /* HEADER */
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },

  logo: {
    width: 32,
    height: 32,
    marginRight: 10,
    borderRadius: 8,
  },

  title: {
    fontSize: 22,
    fontWeight: "bold",
  },

  /* GRID */
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },

  card: {
    width: "48%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15,
    marginBottom: 15,
    alignItems: "center",
  },

  number: {
    fontSize: 22,
    color: "#2f80ed",
    fontWeight: "bold",
  },

  label: {
    color: "#777",
  },

  /* BOTÕES */
  btnPrimary: {
    backgroundColor: "#2f80ed",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  btnSecondary: {
    backgroundColor: "#e5e7eb",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  btnGradient: {
    backgroundColor: "#7b00ff",
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },

  btnText: {
    color: "#fff",
    fontWeight: "bold",
  },

  btnTextDark: {
    color: "#333",
    fontWeight: "bold",
  },
});