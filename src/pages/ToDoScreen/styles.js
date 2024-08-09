import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
    backgroundColor: "#FFFF",
    marginTop: "0%",
    paddingTop: "10%",
    padding: 8,
  },
  title: {
    fontSize: 30,
    alignSelf: "center",
    fontWeight: "600",
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: "#555",
    borderRadius: 4,
    paddingVertical: 8,
    paddingHorizontal: 6,
    width: "90%",
  },
  containerInput: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
  },
  inputText: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "95%",
  },
  tarefa: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: "90%",
  },
  textoTarefa: {
    fontSize: 18,
  },
});
