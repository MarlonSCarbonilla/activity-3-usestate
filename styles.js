
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  head: {
    flexDirection: "row",
    gap: 20,
    justifyContent: "center",
    paddingVertical: 20,
  },
  heads: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  number: {
    fontSize: 100,
  },
  main: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 400,
  },
  btnmain: {
    flexDirection: "row",
    gap: 20,
  },
  btn: {
    width: 100,
    paddingVertical: 20,
  },
});
