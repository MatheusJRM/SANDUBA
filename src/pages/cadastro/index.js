import React, { useState } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import { postProdutos } from '../../data/produto_db'
import { putProdutos } from '../../data/produto_db';



export default function Forms({ navigation }) {
  const [id, setID] = useState('');
  const [nome, setNome] = useState('');
  const [descricao, setDescricao] = useState('');
  const [preco, setPreco] = useState(0);

  function salvarProduto() {
    postProdutos(nome, descricao, preco);
  }

  function atualizarProduto() {
    putProdutos(id,nome,descricao,preco);
  }

  return (
    <View style={styles.inputs}>
      <TextInput
        style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
        onChangeText={nome => setNome(nome)}
      //value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descricao"
        autoCorrect={false}
        onChangeText={descricao => setDescricao(descricao)}
      //value={descricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Preco"
        autoCorrect={false}
        onChangeText={preco =>setPreco (parseFloat(preco))}
        keyboardType="numeric"
      //value={preco.number}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvarProduto}>
        <Text style={styles.textoBotao}>Cadastrar</Text>
      </TouchableOpacity>

      <TextInput
        style={styles.input}
        placeholder="ID"
        autoCorrect={false}
        onChangeText={id => setID(id)}
      //value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Nome"
        autoCorrect={false}
        onChangeText={nome => setNome(nome)}
      //value={nome}
      />
      <TextInput
        style={styles.input}
        placeholder="Descricao"
        autoCorrect={false}
        onChangeText={descricao => setDescricao(descricao)}
      //value={descricao}
      />
      <TextInput
        style={styles.input}
        placeholder="Preco"
        autoCorrect={false}
        onChangeText={preco =>setPreco (parseFloat(preco))}
        keyboardType="numeric"
      //value={preco.number}
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={atualizarProduto}>
        <Text style={styles.textoBotao}>Atualizar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.textoBotao}>Ir para a Home</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    backgroundColor: '#FFF',
    width: '70%',
    color: '#222',
    fontSize: 20,
    borderRadius: 10,
    padding: 10,
    marginLeft: "15%",
    marginTop: 20,
    borderColor: 'black',
    borderWidth: 1
  },
  inputs: {
    marginTop: 40,

  },
  botao: {
    backgroundColor: '#ff6000',
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: "#FF4500",
    borderWidth: 1.2,
    marginLeft: "15%",
    marginTop: 20
  },
  btn: {
    backgroundColor: '#ff6000',
    width: '70%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    borderColor: "#FF4500",
    borderWidth: 1.2,
    marginLeft: "15%",
    marginTop: 20
  },
  textoBotao: {
    fontSize: 20,
    color: 'white',
    fontWeight: "bold"

  }
})