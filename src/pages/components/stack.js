import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../home';
import Cadastro from '../cadastro';
import Sobre from '../sobre';

const Stack = createStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator
        screenOptions={{headerTransparent:true, headerShown:false}}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='Cadastro' component={Cadastro}/>
        <Stack.Screen name='Sobre' component={Sobre}/>
        </Stack.Navigator>
    );
}

export default StackNavigator;


 