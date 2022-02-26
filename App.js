import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import DrawerNavigator from './DrawerNavigator';

import BottomTabNavigator from './BottomTabNavigator';


export default function App()  {

  return(
       <NavigationContainer>
         <DrawerNavigator/>
         
       </NavigationContainer>
     );
  
  
}
//<BottomTabNavigator />;

