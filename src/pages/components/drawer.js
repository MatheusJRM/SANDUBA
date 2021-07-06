import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../home';
import Cadastro from '../cadastro';
import Sobre from '../sobre';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator
        screenOptions={{headerTransparent:true, headerShown:false}}>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Cadastro' component={Cadastro}/>
        <Drawer.Screen name='Sobre' component={Sobre}/>
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;