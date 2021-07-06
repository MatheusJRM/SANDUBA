import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image } from "react-native";
import { DrawerActions } from '@react-navigation/native';

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={styles.btnV}>
        <TouchableOpacity
          style={styles.btn2}
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}>
          <View>
          <Image style={styles.img} source={{uri:'https://s2.glbimg.com/Vmx5laCFHLNBRnp_50VFAbCoVqk=/0x0:1600x1066/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_bc8228b6673f488aa253bbcb03c80ec5/internal_photos/bs/2021/3/f/MeNFFhS1AuiTPBShaiuw/hamburguer-da-bai-burger.jpg'}}></Image>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.center}>
        <Text>Página Home</Text>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Cadastro")}>
          <Text style={styles.txtBtn}>Ir para a Página Cadastro</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate("Sobre")}>
          <Text style={styles.txtBtn}>Ir para a Página Sobre</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginTop: "20%"
  },
  btn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: '#ff0000',
  },
  btn2: {
    width: 80,
    height: 80,
    backgroundColor:'#ff6000'
  },
  btnV:{
    justifyContent:'flex-start',
    alignItems:'flex-start'
  }
  ,
  txtBtn: {
    color: '#fff',
  },
  img:{
    width: 80,
    height: 80
  } 
});

export default Home;