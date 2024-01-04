import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Text, Card } from 'react-native-elements';

import { useNavigation } from '@react-navigation/native';

export default function Menu(){

    const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('Financeiro')}>
                <Card>
                    <Card.Title>FINANCEIRO</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/contabilidade(1).png')}
                        resizeMode='contain'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                        Obter informações financeiras
                    </Text>
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => navigation.navigate('Chamados')}>
                <Card>
                    <Card.Title>INFORMAÇÕES</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/info.png')}
                        resizeMode='contain'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                        Memorando de informações
                    </Text>
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => navigation.navigate('Portaria')}>
                <Card>
                    <Card.Title>PORTARIA</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/porta-inteligente.png')}
                        resizeMode='contain'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                        Comunicado de visitantes
                    </Text>
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => navigation.navigate('Chamados')}>
                <Card>
                    <Card.Title>CHAMADOS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/bloco-de-anotacoes.png')}
                        resizeMode='contain'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                        Crie ou acompanhe seus chamados
                    </Text>
                    
                </Card>
            </TouchableOpacity>    

            <TouchableOpacity onPress={() => navigation.navigate('Reservas')}>
                <Card>
                    <Card.Title>RESERVAS</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/churrasqueira.png')}
                        resizeMode='contain'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                        Reserva de áreas comuns
                    </Text>
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => navigation.navigate('Contato')}>
                <Card>
                    <Card.Title> CONTATOS  </Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/contato.png')}
                        resizeMode='contain'
                    />
                    <Text style={{ marginBottom: 10, marginTop: 10, textAlign: 'center' }}>
                        Fale com o síndico
                    </Text>
                    
                  </Card>
            </TouchableOpacity>   

        </View>
      </ScrollView>
    </SafeAreaView>
    );
}  

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 10,
      backgroundColor: '#131549',
    },
  });


  /*
  <Button
              icon={
                <Icon
                  name="airplane-outline"
                  type="ionicon"
                  color="#ffffff"
                  iconStyle={{ marginRight: 10 }}
                />
              }
              title="RESERVE AGORA"
              onPress={() => {alert('Reservado!')}}
            />
*/