import React from "react";
import { View, StyleSheet, Text, ScrollView } from "react-native";



export default function Receita({route}){
    
const ingredientes = route.params.ingredientes.split(", ");

    return(
        <ScrollView style={styles.geral}>
        <View style={styles.container}>
            <Text style={styles.texto}>{route.params.nome}</Text>
            <Text style={styles.texto2}>Ingredientes</Text>
            {ingredientes.map( (item,index) => {
                return <Text style={styles.itens} key={index}>- {item}</Text>
            })}
            <Text style={styles.texto3}>Modo de Preparo</Text>
            <Text style={styles.texto4}>{route.params.preparo}</Text>
            <View style={styles.container2}>
            <Text style={styles.texto5}>{route.params.rendimento} porções</Text>
            <Text style={styles.texto6}>{route.params.tempo}</Text>
            <Text style={styles.texto7}>Autor: {route.params.autor}</Text>
            </View>
        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    geral:{
      backgroundColor: '#fff',
      flex: 1
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      // alignItems: 'center',
      justifyContent: 'center',
      margin: 20
    },
    container2:{
      flex: 1,
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 25,
    },
    texto:{
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center",
      fontSize: 30,
      fontWeight: "bold"
    },
    texto2:{
      fontSize: 25,
      fontWeight: 'bold'
    },
    texto3:{
      fontSize: 25,
      fontWeight: 'bold'
    },
    texto4:{
      fontSize: 15,
    },
    texto5:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    texto6:{
      fontSize: 20,
      fontWeight: 'bold'
    },
    texto7:{
      fontSize: 12,
      fontWeight: 'bold'
    },
    itens:{
      fontSize: 15,
    }
  });