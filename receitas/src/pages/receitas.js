import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';

export default function Receitas({route, navigation}) {
  
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();
  
    useEffect (() => {
  
      async function PegarDados() {
        await fetch (`http://192.168.90.187:8080/receitas/${route.params.tipo}`)
        .then((resp) => resp.json())
        .then((dados) => {
          setData(dados); 
          setLoading(false);
        })
        .catch((err) => console.log(err))
      }
      PegarDados();
    });
   
    if (loading){
     return (
        <View style={styles.container}>
          <Text>Buscando dados...{route.params.tipo}</Text>
        </View>
    ); 
    }else{
      return (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return(
              <View style={styles.container}>
                <Text style={styles.texto}>{item.nome}:</Text>
                <Text style={styles.texto2}>{item.video}</Text>
                <View style={styles.btn}>
                  <TouchableOpacity style={styles.botao} title="VerReceita" onPress={() => navigation.navigate('receita',item)}>
                      <Text style={styles.texto}>Ver Receita</Text>
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
        />
      ); 
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    btn:{
      margin: 10,
  },
    botao:{
      borderColor: '#000',
      borderWidth: 3,
      borderRadius: 20,
      display: 'flex',
      alignCenter: 'center',
      justifyContent: 'center',
      backgroundColor: '#62462B',
      height: 75,
      width: 170,
  },
    texto:{
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center"
    },
    texto2:{
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center"
    }
  });