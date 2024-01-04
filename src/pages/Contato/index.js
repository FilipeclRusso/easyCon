import React from 'react';
import { SafeAreaView, View, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { Card } from 'react-native-elements';


export default function Contato(){

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.container}>
            <TouchableOpacity onPress={() => {}}>
                <Card>
                    <Card.Title>Fale pelo What's App</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/whatsapp.png')}
                        resizeMode='contain'
                    />
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => {}}>
                <Card>
                    <Card.Title>Fale pelo telefone</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/telefone-fixo.png')}
                        resizeMode='contain'
                    />
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => {}}>
                <Card>
                    <Card.Title>Fale por e-mail</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/email.png')}
                        resizeMode='contain'
                    />
                    
                  </Card>
            </TouchableOpacity>   

            <TouchableOpacity onPress={() => {}}>
                <Card>
                    <Card.Title>Fale pelo Instagram</Card.Title>
                    <Card.Divider />
                    <Card.Image
                        style={{ padding: 0, width: '100%', height: 80 }}
                        source={require('../../assets/instagram.png')}
                        resizeMode='contain'
                    />
                    
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

