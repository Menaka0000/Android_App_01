import React from 'react';
import {SafeAreaViewComponent, StyleSheet, View, ViewComponent} from 'react-native';

function Screen({children, style}) {
    return (
        <View style={[styles.container, style]}>{children}</View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
});

export default Screen;