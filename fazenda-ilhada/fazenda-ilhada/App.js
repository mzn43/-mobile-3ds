import React from 'react';
import { StyleSheet, Text, View, FlatList, Image } from 'react-native';

const cesta = {
  nome: "Cesta de Verduras",
  fazenda: "Fazenda BLACK STONE",
  preco: "R$ 40,00",
  imagemFazenda: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsdNAroV55xIZ4S8_Zzfmt9RsbJ0NfwKH_ZA&s", // imagem ilustrativa
  itens: [
    { id: "1", nome: "Alface", imagem: "https://images.tcdn.com.br/img/img_prod/799330/sementes_de_alface_moana_503_1_b81379581f0d2d2b728c6d52db420924.jpg"},
    { id: "2", nome: "Tomate", imagem: "https://i0.wp.com/masterplanti.com.br/wp-content/uploads/2023/01/Imagem3tomates.png?fit=456%2C301&ssl=1" },
    { id: "3", nome: "Cenoura", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqPU6pF6quRpe_ZnyA8nJ47YGkAJVzbPB8Zw&s"
 },
    { id: "4", nome: "Batata", imagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_gV4BS67eeQAiY9YbaVYS_lK9vfTUZyc-cQ&s" },
  ],
};

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{cesta.nome}</Text>
      <Text style={styles.subtitulo}>{cesta.fazenda}</Text>
      <Image source={{ uri: cesta.imagemFazenda }} style={styles.imagemFazenda} />
      <Text style={styles.preco}>{cesta.preco}</Text>

      <Text style={styles.itensTitulo}>Itens da cesta:</Text>
      <FlatList
        data={cesta.itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={{ uri: item.imagem }} style={styles.itemImagem} />
            <Text style={styles.item}>{item.nome}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 5,
  },
  subtitulo: {
    fontSize: 18,
    color: "#555",
    marginBottom: 5,
  },
  preco: {
    fontSize: 18,
    color: "green",
    marginBottom: 15,
  },
  imagemFazenda: {
    width: "100%",
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  itensTitulo: {
    fontSize: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  itemImagem: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 5,
  },
  item: {
    fontSize: 16,
  },
});
