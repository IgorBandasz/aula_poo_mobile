import Cachorro from "@/components/Cachorro";
import Gato from "@/components/Gato";
import { StyleSheet, Text, View } from "react-native";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text>Boa noite.</Text>
      <Gato/>
      <Cachorro nome="Totó"/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center",
  },
});
