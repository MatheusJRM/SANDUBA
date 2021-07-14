import React from 'react';
import DrawerNavigator from './pages/components/drawer';
import { NavigationContainer } from '@react-navigation/native';

function App(){
    return(
    <NavigationContainer>
        <DrawerNavigator />
    </NavigationContainer>
   
    );
}
export default App;