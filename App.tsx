/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {NativeBaseProvider} from 'native-base';
import React from 'react';

import MainNavigation from './app/navigation/MainNavigation';
import {navigationRef} from './app/services/navigation.service';

const App = () => {
  return (
    <NativeBaseProvider>
      <NavigationContainer ref={navigationRef}>
        {/* <StatusBar backgroundColor={Colors.primary} /> */}
        <MainNavigation />
      </NavigationContainer>
    </NativeBaseProvider>
  );
};

export default App;
