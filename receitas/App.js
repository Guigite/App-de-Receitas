import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState();

  useEffect (() => {

    async function PegarDados() {
      await fetch ("http://localhost:8080/receitas")
      .then((resp) => {return resp.json()})
      .then((dados) => {
        setData(dados); setLoading(false)
      })
      .catch((err) => console.log(err))
    }

    PegarDados();

  });
  
  if (loading){
   return (
    <View style={styles.container}>
      <Text>Buscando dados...</Text>
      <StatusBar style="auto" />
    </View>
  ); 
  }else{
    return (
      <View style={styles.container}>
        <Text>{data[0].nome}</Text>
        <StatusBar style="auto" />
      </View>
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
});
