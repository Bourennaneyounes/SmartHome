/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
 import 'react-native-gesture-handler';
import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Home from './src/components/Home';
import { NavigationContainer } from '@react-navigation/native';
import router from './src/Routers';
import Router from './src/Routers';

import {
  RecoilRoot,
} from 'recoil';


const App = () => {
 

  return (
    <RecoilRoot>
<NavigationContainer>
     
     <Router/>
   
</NavigationContainer>
    </RecoilRoot>
 
  
    
   
  );
};

const styles = StyleSheet.create({
  
});

export default App;
