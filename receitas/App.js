import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useState, useEffect} from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Receitas from './src/pages/receitas';
import Home from './src/pages/home';
import Receita from './src/pages/receita';

const Stack = createStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
            name="home" component={Home} 
            options={{title: 'RECEITAS', 
            headerTintColor: 'white', 
            headerStyle: {
                backgroundColor: 'red',
                height: 100, 
                },
            headerTitleAlign: 'center',
          }} />
            <Stack.Screen 
              name="receitas" component={Receitas} 
              options={{title: 'RECEITAS', 
              headerTintColor: 'white', 
              headerStyle: {
                  backgroundColor: 'red',
                  height: 100, 
                  },
              headerTitleAlign: 'center',
            }} />
            <Stack.Screen 
              name="receita" component={Receita} 
              options={{title: 'RECEITAS', 
              headerTintColor: 'white', 
              headerStyle: {
                  backgroundColor: 'red',
                  height: 100, 
                  },
              headerTitleAlign: 'center',
            }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


