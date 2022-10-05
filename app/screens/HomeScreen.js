import React from 'react';
import {StyleSheet, View, Image} from 'react-native';

import Screen from '../components/Screen';

export default function HomeScreen() {
    return (
        <Screen>
            <View style={style.imageContainer}>
                <Image style={style.background} source={require("../assets/Home_03.png")}></Image>
            </View>
        </Screen>
    );
}

const style = StyleSheet.create({
    imageContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    background: {
        width: '100%',
        height: "100%",
        objectFit: 'contain',
        opacity: 1
    }
});
