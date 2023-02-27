import React from "react";
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect, useRef} from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, ActivityIndicator, ScrollView } from 'react-native';


export default function Receitas({route, navigation}) {
  
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState();

    useEffect (() => {
  
      async function PegarDados() {
        await fetch (`http://192.168.59.151:8080/receitas/${route.params.tipo}`)
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
          <ActivityIndicator size="large"/>
        </View>
    ); 
    }else{
      return (
        <FlatList
          data={data}
          renderItem={({item}) => {
            return(
              <ScrollView>
                <View style={styles.container}>
                  <Text style={styles.texto}>{item.nome}:</Text>
                  <View style={styles.btn}>
                    <TouchableOpacity style={styles.botao} title="VerReceita" onPress={() => navigation.navigate('receita',item)}>
                        <Text style={styles.texto3}>Ver receita</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </ScrollView>
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
      backgroundColor: 'black',
      height: 40,
      width: 90,
  },
    texto:{
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center",
      fontSize: 25,
      fontWeight: "bold"
    },
    texto2:{
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center"
    },
    texto3: {
      color: "white",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center",
      fontWeight: "bold"
    }
  });