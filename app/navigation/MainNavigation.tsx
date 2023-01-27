import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {Screens} from '../helpers/ScreenContant';
import PhoneRingIndicatorScreen from '../screens/PhoneRingIndicatorScreen';
import LoadingAnimationScreen from '../screens/LoadingAnimationScreen';

const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={Screens.PhoneRing}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={Screens.PhoneRing}
        component={PhoneRingIndicatorScreen}
        initialParams={{isModal: false}}
      />
      <Stack.Screen
        name={Screens.loadingAnimation}
        component={LoadingAnimationScreen}
        initialParams={{isModal: false}}
      />
    </Stack.Navigator>
  );
};
export default MainNavigation;
