import React, {Component} from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/native";

class Chamados extends Component{

    constructor(props){
        super(props);
        this.state = {
            visualizarChamado:[
                {id: '1', descricao: 'Piso molhado', data: '10/01/23', status: 'Encerrado'},
                {id: '2', descricao: 'Dejetos de  pet', data: '09/01/23', status: 'Em execução'},
                {id: '3', descricao: 'Recolher lixo', data: '05/01/23', status: 'Encerrado'},
                {id: '4', descricao: 'Lâmpada queimada', data: '30/12/22', status: 'Encerrado'}
            ]
        }
        
    }

    abrirChamado = () => {
        this.props.navigation.navigate('AbrirChamado');
    };


    render(){

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Verificar chamados</Text>
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.text}>Número</Text>
                    <Text style={styles.text}>Descrição</Text>
                    <Text style={styles.text}>Data</Text>
                    <Text style={styles.text}>Status</Text>
                </View>
                <FlatList
                    data={this.state.visualizarChamado}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Visualizar data={item} />}
                />

                <OpenTicketButton />
                </ScrollView>
            </SafeAreaView>
           
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#131549'
    },
    titleArea:{
        alignItems: 'center'
    },
    title:{
        fontWeight: 'bold',
        fontSize: 25,
        color: '#FFF',
        padding: 30,
    },
    textArea:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    text:{
        color: '#FFF',
        fontSize: 18,
        marginBottom: 10
    },
    areaVisualizar:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        height: 70,
        marginBottom: 15,
        margin: 20
    },
    visualizar:{
        color: '#222',
        fontSize: 15,
        textAlign: 'center'
    },
    btnArea:{
        alignItems: 'center',
        marginTop: 20
    },
    btn:{
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontWeight: 'bold',
    }
})


const OpenTicketButton = () => {
    const navigation = useNavigation();
  
    const abrirChamado = () => {
      navigation.navigate('AbrirChamado');
    };
  
    return (
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={abrirChamado}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default Chamados;

class Visualizar extends Component {
    render(){
        return(
            <View style={styles.areaVisualizar}>
                <Text style={styles.visualizar}> {this.props.data.id} </Text>
                <Text style={styles.visualizar}> {this.props.data.descricao} </Text>
                <Text style={styles.visualizar}> {this.props.data.data} </Text>
                <Text style={styles.visualizar}> {this.props.data.status} </Text>
            </View>
        )
    }
}