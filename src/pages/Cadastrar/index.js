import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { CheckBox } from 'react-native-elements';

import { Picker } from "@react-native-community/picker";
import { useNavigation } from "@react-navigation/native";

const Cadastrar = () => {
  const [checked, setChecked] = useState(false);

  const selecinado = () => {
    setChecked(!checked);
  };
  
  const navigation = useNavigation();

  return (
    <ScrollView>
      <View style={styles.container}>
      <Text style={styles.title}>CADASTRO</Text>

      <View style={styles.textArea}>
        <Text style={styles.text}>E-mail:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Nome:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>CPF:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Telefone:</Text>
        <TextInput style={styles.input} />

        <Text style={styles.text}>Apartamento:</Text>
        <TextInput style={styles.input} />

        <Picker style={styles.areaPicker}>
            <Picker.Item key={1} value={1} label="Bloco A"/>
            <Picker.Item key={2} value={2} label="Bloco B"/>
            <Picker.Item key={3} value={3} label="Bloco C"/>
        </Picker>

        <CheckBox
          style={styles.CheckBox}
          title='Concordo com os termos de uso'
          checked={checked}
          onPress={selecinado}
        />

        <TouchableOpacity style={styles.btn} onPress={() => navigation.navigate('Login')}>
            <Text style={styles.btnText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
    </ScrollView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#131549',
    padding: 100
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFF',
    marginTop: 20,
    marginBottom: 20,
  },
  textArea: {
    alignItems: 'flex-start'
  },
  text: {
    fontSize: 16,
    color: '#FFF',
    marginBottom: 10,
  },
  input: {
    width: 200,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    paddingLeft: 7
  },
  areaPicker: {
    width: 200,
    height: 40,
    backgroundColor: '#FFF',
    borderRadius: 5,
    marginBottom: 10,
    marginTop: 20
  },
  CheckBox: {
    backgroundColor: 'transparent',
    borderWidth: 0
  },
  btn:{
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e90ff',
    height: 40,
    width: 200,
    borderRadius: 10,
    marginTop: 20
  },
  btnText:{
    fontSize: 18,
    fontWeight: 'bold',
    color: "#FFF"
  }
});

export default Cadastrar;
