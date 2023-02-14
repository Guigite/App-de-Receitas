import React from "react";
import { StyleSheet , Text, View, TouchableOpacity } from "react-native";

export default function Home(props){
    return(
        <View style={styles.container}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.botao} title="Principal" onPress={() => props.navigation.navigate('receitas')}>
                        <Text style={styles.texto}>Prato principal</Text>
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
