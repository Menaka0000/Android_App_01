import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {UserStateProvider} from './app/context/userStateContext';
const Stack = createNativeStackNavigator();

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';
import AccountScreen from './app/screens/AccountScreen';
import VehicleFormScreen from './app/screens/VehicleFormScreen';
import VehicleCollectionScreen from './app/screens/VehicleCollectionScreen';


export default function App() {
    return (
        <NavigationContainer>
            <UserStateProvider>
                <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
                <Stack.Screen name="Account" component={AccountScreen} />
                <Stack.Screen name="Add Vehicle" component={VehicleFormScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Collection" component={VehicleCollectionScreen} />
            </Stack.Navigator>
            </UserStateProvider>
        </NavigationContainer>
);
}



