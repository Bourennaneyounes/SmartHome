
import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import Home from '../components/Home';
import Ac from '../components/Settings/AC';



const RootStack = createStackNavigator();



const Router = () => {


 
    return(
        
 <RootStack.Navigator >
     
        <RootStack.Screen
        name="Home"
  
        component={Home}
        options={() => ({
            headerShown : false,
          
            
        })}
       
        />
        <RootStack.Screen
        name="Ac"
  
        component={Ac}
        // options={() => ({
        //     headerShown : false,
          
            
        // })}
       
        />
     
    
 </RootStack.Navigator>

  
            )
}

export default Router;