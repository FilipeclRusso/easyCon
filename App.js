import React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";

import Acessar from "./src/pages/Acessar";
import Login from "./src/pages/Login";
import Menu from "./src/pages/Menu";
import Cadastrar from "./src/pages/Cadastrar";
import RecuperarSenha from "./src/pages/RecuperarSenha";
import Chamados from "./src/pages/Chamados";
import AbrirChamado from "./src/pages/AbrirChamado";
import Contato from "./src/pages/Contato";
import Financeiro from "./src/pages/Financeiro";
import Portaria from "./src/pages/Portaria";
import LiberarAcesso from "./src/pages/LiberarAcesso";
import Reservas from "./src/pages/Reservas";
import RealizarReserva from "./src/pages/RealizarReserva";

const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerStyle: {
            backgroundColor: '#131549',
          },

          drawerActiveBackgroundColor: '#0000ff',
          drawerActiveTintColor: '#000',
          drawerInactiveTintColor: '#a9a9a9',
          drawerInactiveBackgroundColor: '#FFF'
        }}
      >

        <Drawer.Screen 
        name="Acessar" component={Acessar}
        options={{
          headerShown: false,
          title: 'Acessar'
        }}
        />

        <Drawer.Screen 
        name="Login" component={Login}
        options={{
          headerShown: false,
          title: 'Login'
        }}
        />

        <Drawer.Screen 
        name="Menu" 
        component={Menu}
        options={{
          title: 'Menu'
        }}
        />

        <Drawer.Screen 
        name="Cadastrar" component={Cadastrar}
        options={{
            title: 'Cadastro',
            headerShown: false
        }}
        />

        <Drawer.Screen 
        name="RecuperarSenha" component={RecuperarSenha}
        options={{
          headerShown: false,
          title: 'Recuperar senha'
        }}
        />

        <Drawer.Screen 
        name="Financeiro" component={Financeiro}
        options={{
          title: 'Financeiro'
        }}
        />

      <Drawer.Screen 
        name="Portaria" component={Portaria}
        options={{
          title: 'Portaria'
        }}
        />

      <Drawer.Screen 
        name="LiberarAcesso" component={LiberarAcesso}
        options={{
          title: 'Liberar acesso de visitante'
        }}
        />
        

        <Drawer.Screen 
        name="Chamados" component={Chamados}
        options={{
          title: 'Chamado'
        }}
        />

        <Drawer.Screen 
        name="AbrirChamado" component={AbrirChamado}
        options={{
          title: 'Abrir chamado'
        }}
        />

        <Drawer.Screen 
        name="Reservas" component={Reservas}
        options={{
          title: 'Reservas'
        }}
        />

        <Drawer.Screen 
        name="RealizarReserva" component={RealizarReserva}
        options={{
          title: 'Realizar Reserva'
        }}
        />

        <Drawer.Screen 
        name="Contato" component={Contato}
        options={{
          title: 'Fale com o síndico'
        }}
        />

      </Drawer.Navigator>
    </NavigationContainer>
  )
}
































