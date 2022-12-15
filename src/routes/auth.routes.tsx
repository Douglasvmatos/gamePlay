import React from 'react'
import  { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Home } from '../screens/Home';
import { SignIn } from '../screens/SignIn';
import { AppointmentDetails } from '../screens/AppointmentDetails';
import { AppointmentCreate } from '../screens/AppointmentCreate';


const { Screen, Navigator } = createNativeStackNavigator();


export function AuthRoutes() {
  return(
    <Navigator>     
      <Screen 
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />   
      <Screen 
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />   
      <Screen 
        name="AppointmentDetails"
        component={AppointmentDetails}
        options={{headerShown: false}}
      />   
      <Screen 
        name="AppointmentCreate"
        component={AppointmentCreate}
        options={{headerShown: false}}
      />   
    </Navigator>
  )
}
