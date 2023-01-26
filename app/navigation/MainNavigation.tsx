import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../helpers/ScreenContant';
import CallReceivingScreen from '../screens/CallReceivingScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.CallReceiving}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.CallReceiving}
        component={CallReceivingScreen}
        initialParams={{isModal: false}}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
