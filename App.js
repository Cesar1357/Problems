import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './navigation/DrawerNavigator';

import BottomTabNavigator from './navigation/BottomTabNavigator';


export default function App()  {

  return(
       <NavigationContainer>
         <DrawerNavigator/>
         
       </NavigationContainer>
     );
  
  
}
//<BottomTabNavigator />;

