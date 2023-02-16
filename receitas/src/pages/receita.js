import React from "react";
import { View, StyleSheet, Text } from "react-native";



export default function Receita({route}){
    
const ingredientes = route.params.ingrediente.split(", ");

    return(
        <View style={styles.container}>
            <Text style={styles.texto}>{route.params.nome}</Text>
            {ingredientes.map( (item,index) => {
                return <Text key={index}>- {item}</Text>
            })}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    texto:{
      color: "black",
      alignItems: "center",
      justifyContent:"center",
      textAlign: "center"
    }
  });