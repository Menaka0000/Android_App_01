import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

import HomeScreen from './app/screens/HomeScreen';
import LoginScreen from './app/screens/LoginScreen';
import SignUpScreen from './app/screens/SignUpScreen';

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
                <Stack.Screen name="Login" component={LoginScreen} />
                <Stack.Screen name="Sign Up" component={SignUpScreen} />
            </Stack.Navigator>
        </NavigationContainer>
);
}



