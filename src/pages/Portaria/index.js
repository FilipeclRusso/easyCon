import React, {Component} from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";

import { useNavigation } from "@react-navigation/native";

class Portaria extends Component{

    constructor(props){
        super(props);
        this.state = {
            visualizarPortaria:[
                {id: '1', nome: 'Messi', bloco: 'A', apto: '101', visitante: 'Neymar', dataAcesso: '20/04/2023'},
                {id: '2', nome: 'Rodrygo', bloco: 'B', apto: '102', visitante: 'Vini Jr', dataAcesso: '15/02/2023'},
                {id: '3', nome: 'Cristiano', bloco: 'C', apto: '302', visitante: 'Zidane', dataAcesso: '10/01/2023'},
                {id: '4', nome: 'Antony', bloco: 'B', apto: '202', visitante: 'Casemiro', dataAcesso: '31/12/2022'}
            ]
        }
        
    }

    liberarAcesso = () => {
        this.props.navigation.navigate('LiberarAcesso');
    };


    render(){

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Verificar Portaria</Text>
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.text}>Nome</Text>
                    <Text style={styles.text}>Bloco</Text>
                    <Text style={styles.text}>Apto</Text>
                    <Text style={styles.text}>Visitante</Text>
                    <Text style={styles.text}>Data de acesso</Text>
                </View>
                <FlatList
                    data={this.state.visualizarPortaria}
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
        fontSize: 22,
        marginBottom: 10
    },
    areaVisualizar:{
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',
        backgroundColor: '#FFF',
        height: 70,
        marginBottom: 15,
        margin: 20
    },
    visualizar:{
        color: '#222',
        fontSize: 20,
        textAlign: 'justify'
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
  
    const liberarAcesso = () => {
      navigation.navigate('LiberarAcesso');
    };
  
    return (
      <View style={styles.btnArea}>
        <TouchableOpacity style={styles.btn} onPress={liberarAcesso}>
          <Text style={styles.btnText}>+</Text>
        </TouchableOpacity>
      </View>
    );
  };

export default Portaria;

class Visualizar extends Component {
    render(){
        return(
            <View style={styles.areaVisualizar}>
                <Text style={styles.visualizar}> {this.props.data.id} </Text>
                <Text style={styles.visualizar}> {this.props.data.nome} </Text>
                <Text style={styles.visualizar}> {this.props.data.bloco} </Text>
                <Text style={styles.visualizar}> {this.props.data.apto} </Text>
                <Text style={styles.visualizar}> {this.props.data.visitante} </Text>
                <Text style={styles.visualizar}> {this.props.data.dataAcesso} </Text>
            </View>
        )
    }
}