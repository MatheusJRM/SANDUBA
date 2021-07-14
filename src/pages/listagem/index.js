import React, { useState } from 'react';
import { StyleSheet, Text, View, FlatList,TouchableOpacity,Dimensions } from 'react-native';
import { listarProdutos } from '../../data/produto_db';
import { deleteProdutos } from '../../data/produto_db';

export const Lista = () => {
    const [produtos, setProdutos] = useState(listarProdutos());

    const handleDelete = (id) => {
        return(
            deleteProdutos(id)
        );
    }
    return (
        <FlatList
            data={produtos}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item: produto }) => {
                return (
                    
                    <View style={styles.viewContainer}>
                        <Text style={styles.textoListagemID}>{produto.produto_id}</Text>
                        <Text style={styles.textoListagemNome}>{produto.produto_name}</Text>
                        <Text style={styles.textoListagemDescricao}>{produto.produto_descricao}</Text>
                        <Text style={styles.textoListagem}>{produto.produto_preco}</Text>
                        <TouchableOpacity
                            style={styles.botao}
                            onPress={() => { handleDelete(produto.produto_id) }}
                        ><Text style={styles.textoListagem}>DEL</Text></TouchableOpacity>
                    </View>
                );
            }
            }
        />
    );
}

const styles = StyleSheet.create({
    viewContainer: {
        flexDirection: 'row',
        borderWidth:1
    },

    textoListagem: {
        width: Dimensions.get('window').width / 5 - 20,
        textAlign:'center',
        fontSize:20,
    },
    textoListagemID: {
        width: Dimensions.get('window').width / 5 - 100,
        textAlign:'center',
        fontSize:20,
    },
    textoListagemNome: {
        width: Dimensions.get('window').width / 5,
        textAlign:'center',
        fontSize:20,
    },
    textoListagemDescricao: {
        width: Dimensions.get('window').width / 5 + 120,
        textAlign:'center',
        fontSize:20,
    },
    botao: {
        backgroundColor:'#FF5E5E'
    }
});

