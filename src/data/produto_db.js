import Realm from 'realm';
import {Alert} from 'react-native';

class Produto2Schema extends Realm.Object { }
Produto2Schema.schema = {
    name: 'Produto2',
    properties: {
        produto_id: { type: 'int', default: 0 },
        produto_name: 'string',
        produto_descricao: 'string',
        produto_preco: 'double',
    },
    primaryKey: 'produto_id'
};
export const realm_produto = new Realm({ schema: [Produto2Schema], schemaVersion: 1 });

//MÉTODOS
export const listarProdutos = () => {
    //console.log(realm_produto.objects('Produto2'));
    return realm_produto.objects('Produto2');
}

export const postProdutos = (nome, descricao, preco) => {
    //vai dar erro
    //Pra conseguir ver no node/metro depois
    console.log(nome, descricao, preco);

    const ultimoId = realm_produto.objects('Produto2').sorted('produto_id', true)[0];
    const maiorId = ultimoId == null ? 0 : ultimoId.produto_id;
    const proximoId = maiorId == null ? 1 : maiorId + 1;

    realm_produto.write(() => {
        const prod = realm_produto.create('Produto2', {
            produto_id: proximoId,
            produto_name: nome,
            produto_descricao: descricao,
            produto_preco: preco,
        })
        Alert.alert("Sucesso","Cadastro efetuado !!!");
    });
}

export const putProdutos = (id, nome, descricao, preco) => {
    realm_produto.write(() => {
        const prod = realm_produto.objects("Produto2")[id -1];
        prod.produto_name = nome;
        prod.produto_descricao = descricao;
        prod.produto_preco = preco;
    });
    Alert.alert("Sucesso","Produto atualizado !!!");
}

export const deleteProdutos = (id) => {
    const identificacao = realm_produto.objectForPrimaryKey("Produto2", id)
    console.log(id);

    realm_produto.write(() => {
        realm_produto.delete(identificacao)
    });
    Alert.alert("Sucesso","Produto deletado !!!");
};


