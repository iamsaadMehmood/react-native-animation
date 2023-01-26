import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Screens} from '../helpers/ScreenContant';
import CallReceivingScreen from '../screens/CallOutgoingScreen';
import CallOutgoingScreen from '../screens/CallOutgoingScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.CallOutgoing}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.CallOutgoing}
        component={CallOutgoingScreen}
        initialParams={{isModal: false}}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
