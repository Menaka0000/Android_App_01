import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Screen from '../components/Screen';
import AppButton from '../components/AppButton';

export default function HomeScreen({ navigation }) {
    return (
        <Screen>
            <View style={styles.imageContainer}>
                <Image style={styles.background} source={require("../assets/Home_03.png")}></Image>
            </View>
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" onPress={()=>{navigation.navigate('Login')}}/>
                <AppButton title="Register" onPress={()=>{navigation.navigate('Sign Up')}}/>
            </View>
        </Screen>
    );
}

const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    buttonsContainer: {
        padding: 20,
        width: "100%",
        position:'absolute',
        bottom:0
    },
    background: {
        width: '100%',
        height: "100%",
        objectFit: 'contain',
        opacity: 1,

    }
});
