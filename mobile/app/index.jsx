import { StyleSheet, View } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Link href="/(auth)/signup" style={styles.link}>
        Signup
      </Link>
      <Link href="/(auth)" style={styles.link}>
        Login
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    fontSize: 18,
    marginVertical: 15, 
    color: "blue",
  },
});
