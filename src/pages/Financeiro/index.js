import React, {Component} from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity, ScrollView, SafeAreaView } from "react-native";



class Financeiro extends Component{

    constructor(props){
        super(props);
        this.state = {
            visualizarCobranca:[
                {id: '1', mes: 'Mar/23', cobranca: 'Taxa condomínio', status: 'Em aberto'},
                {id: '2', mes: 'Fev/23', cobranca: 'Taxa condomínio', status: 'Pago'},
                {id: '3', mes: 'Jan/23', cobranca: 'Taxa extra', status: 'Vencido'}
            ]
        }
        
    }


    render(){

        return(
            <SafeAreaView style={styles.container}>
                <ScrollView>
                <View style={styles.titleArea}>
                    <Text style={styles.title}>Meus títulos</Text>
                </View>
                <View style={styles.textArea}>
                    <Text style={styles.text}>Mês</Text>
                    <Text style={styles.text}>Cobrança</Text>
                    <Text style={styles.text}>Status</Text>
                </View>
                <FlatList
                    data={this.state.visualizarCobranca}
                    keyExtractor={(item) => item.id}
                    renderItem={({item}) => <Visualizar data={item} />}
                />

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
        justifyContent: 'space-between',
        backgroundColor: '#FFF',
        height: 70,
        marginBottom: 15,
        margin: 20
    },
    visualizar:{
        color: '#222',
        fontSize: 15,
        textAlign: 'justify'
    }
})


export default Financeiro;

class Visualizar extends Component {
    render(){
        return(
            <View style={styles.areaVisualizar}>
                <Text style={styles.visualizar}> {this.props.data.id} </Text>
                <Text style={styles.visualizar}> {this.props.data.mes} </Text>
                <Text style={styles.visualizar}> {this.props.data.cobranca} </Text>
                <Text style={styles.visualizar}> {this.props.data.status} </Text>
            </View>
        )
    }
}