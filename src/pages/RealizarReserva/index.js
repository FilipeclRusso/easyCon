import React, {Component} from "react";
import {View, Text, StyleSheet, TouchableOpacity, TextInput} from 'react-native';

import { useNavigation } from "@react-navigation/native";

import { Picker } from "@react-native-community/picker";


class RealizarReserva extends Component{

    constructor(props){
        super(props);
        this.state = {
            apt: 0,
            apts: [
                {key: 1, apartamento: '101', numero: 101},
                {key: 2, apartamento: '102', numero: 102},
                {key: 3, apartamento: '201', numero: 201},
                {key: 4, apartamento: '202', numero: 202},
                {key: 5, apartamento: '301', numero: 301},
                {key: 6, apartamento: '302', numero: 302}
            ],
            blc: 0,
            oco: 0
        };
    }

    render(){

        let aptsItem = this.state.apts.map((v, k) => {
            return <Picker.Item key={k} value={k} label={v.apartamento}/>
        })

        return(
            <View style={styles.container}>
                <Text style={styles.title}>Reserva de áreas comuns</Text>

                <View style={styles.textArea}>
                    <Text style={styles.text}>nome do morador:</Text>
                    <TextInput
                        style={styles.input}
                    />

                    <Text style={styles.text}>Apartamento:</Text>
                    <Picker 
                        selectedValue={this.state.apt}
                        onValueChange={(itemValue, itemIndex) => this.setState({apt: itemValue})}
                        style={styles.picker}
                    >
                        {aptsItem}
                    </Picker>
                    <Text style={styles.text}>Bloco:</Text>
                    <Picker style={styles.picker}>
                        <Picker.Item key={1} value={1} label="Bloco A"/>
                        <Picker.Item key={2} value={2} label="Bloco B"/>
                        <Picker.Item key={3} value={3} label="Bloco C"/>
                    </Picker>
                    <Text style={styles.text}>Área comum:</Text>
                    <Picker style={styles.picker }> 
                        <Picker.Item key={1} value={1} label="Piscina"/>
                        <Picker.Item key={2} value={2} label="Salão de festa"/>
                        <Picker.Item key={3} value={3} label="Campo de futebol"/>
                        <Picker.Item key={3} value={3} label="Parquinho"/>
                    </Picker>

                    <Text style={styles.text}>Data de acesso:</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="00/00/0000"
                    />

                    <Enviar/>
                    
                </View>
            </View>
        )
    }
}
    

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#a9a9a9'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#222',
        padding: 30
    },
    textArea:{
        padding: 20
    },
    text:{
        color: '#222',
        fontSize: 18,
        marginBottom: 10,
        marginTop: 10
    },
    input:{
        width: '100%',
        height: 30,
        backgroundColor: '#FFF',
        padding: 7,
        paddingTop: 5,
        borderRadius: 8,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10
    },
    inputDescricao:{
        height: 120,
        width: '100%',
        borderWidth: 1,
        borderColor: '#FFF',
        backgroundColor: '#FFF',
        borderRadius: 8,
        marginBottom: 16,
    },
    picker:{
        fontSize: 18,
        height: 40,
        width: 150,
        borderRadius: 8,
        padding: 7
    },
    btnArea:{
        alignItems: 'center',
        marginTop: 20
    },
    btn:{
        flex: 1,
        width: 100,
        height: 50,
        borderRadius: 8,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
        padding: 7
    }
})

const Enviar = () => {
    const navigation = useNavigation();
  
    const Menu = () => {
      alert('Reserva realizada com sucesso!');
      navigation.navigate('Menu');
    };
  
    return (
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={Menu}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default RealizarReserva;