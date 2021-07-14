import React from "react";
import { SafeAreaView, StatusBar, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Lista } from '../listagem'



const Sobre = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>Listagem de Produtos</Text>
      <Text>{"\n\n"}</Text>
      <Lista />
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.txtBtn}>Ir para a Página Home</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  scrollView: {
    backgroundColor: 'pink',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 42,
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff0000',
  },
  txtBtn: {
    color: '#fff',
  },
  viewContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});


export default Sobre;