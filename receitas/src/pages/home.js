import React from "react";
import { StyleSheet , Text, View, TouchableOpacity } from "react-native";

export default function Home(props){
    return(
        
        <View style={styles.container}>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao} title="Entrada" onPress={() => props.navigation.navigate('receitas',{tipo: "entrada"})}>
                    <Text style={styles.texto}>Entrada</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.btn}>
            <TouchableOpacity style={styles.botao} title="Principal" onPress={() => props.navigation.navigate('receitas',{tipo: "principal"})}>
                <Text style={styles.texto}>Prato principal</Text>
            </TouchableOpacity>
            </View>
            <View style={styles.btn}>
                <TouchableOpacity style={styles.botao} title="Sobremesa" onPress={() => props.navigation.navigate('receitas',{tipo: "sobremesa"})}>
                    <Text style={styles.texto}>Sobremesa</Text>
                </TouchableOpacity>
            </View>
        </View>        
    );
}

const styles = StyleSheet.create({

    container:{
        width: '100%',
        height: '100%',
        display: 'flex',
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
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#eecc60',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});
