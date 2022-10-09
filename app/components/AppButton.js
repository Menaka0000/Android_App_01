import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import colors from '../config/colors';

function AppButton({title, onPress, color,width,height,fontSize}) {
    return (
        <View style={[styles.button,{width:width,height:height}]}>
            <TouchableOpacity
                style={styles.textContainer}
                onPress={onPress}
            >
                <Text style={[styles.text,{fontSize:fontSize}]}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'rgba(68, 77, 87,.7)',
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        height:50,
        width: '100%',
        marginVertical: 10,
    },
    textContainer: {
        width: '100%',
        height: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 25
    },
    text: {
        color: colors.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        letterSpacing:1
    },
});

export default AppButton;
