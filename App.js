/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from "./components/Tabs" 


const App: () => React$Node = () => {
  return (
    <NavigationContainer>
              <Tabs/>
    </NavigationContainer>
  );
};


export default App;
