import React from "react";
import { SafeAreaView, ScrollView, StatusBar, Text, StyleSheet, TouchableOpacity } from "react-native";

const Sobre= ({ navigation }) => {
  return (
    <SafeAreaView>
      <ScrollView>
        <Text>Página/Screen Informações</Text>
        <Text>{"\n\n"}</Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus libero augue, aliquet id maximus ac, facilisis sed libero. Nunc dolor nibh, finibus et lectus a, interdum consequat velit. Nulla nec orci auctor, blandit mi id, consectetur sem. Donec dolor dui, pharetra tincidunt egestas eget, maximus quis nibh. Curabitur lobortis rutrum magna, quis auctor urna ultrices nec. In id nisl eget nunc egestas malesuada eget nec elit. Fusce iaculis lorem a viverra egestas. Morbi tristique felis et euismod mattis. Phasellus ipsum massa, egestas sed ante eu, finibus aliquam dolor. Nunc ut tellus tellus.

          Vestibulum non dignissim urna. Sed pharetra sollicitudin odio, sit amet cursus massa ullamcorper eget. Vivamus eget nunc nec lorem venenatis aliquam. Mauris in ligula nec ante consequat sollicitudin. Aenean euismod eros lacus, nec varius justo iaculis ac. Aenean sollicitudin lacinia faucibus. Vivamus eget lacus id lorem aliquam dignissim. Vivamus sed aliquet sapien. In non mattis sem, id lacinia tortor. Duis tempus massa at orci consequat euismod. Nullam nec ipsum lacus. Mauris eget felis eu enim accumsan lacinia vel ullamcorper sem. Fusce ornare at leo vel finibus. Donec vel enim et tellus facilisis aliquet sit amet ut dui. Nunc ligula dolor, imperdiet id egestas vel, bibendum nec felis. Duis at neque at ipsum hendrerit finibus in et lorem.

          In quis ipsum vehicula, dapibus magna quis, suscipit ex. Sed malesuada varius nisi. Sed tincidunt pretium purus eu rhoncus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus convallis nibh sed aliquet mattis. Suspendisse potenti. Praesent non arcu nulla. Praesent blandit nisl consequat lacinia malesuada. Aenean porta turpis velit, efficitur sollicitudin urna auctor bibendum. Fusce mattis tincidunt mauris ac interdum. In efficitur nulla non lacus rutrum interdum.
        </Text>
        <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate("Home")}>
        <Text style={styles.txtBtn}>Ir para a Página Home</Text>
      </TouchableOpacity>
      </ScrollView>
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
  }
});


export default Sobre;