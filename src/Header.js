import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default () => (
    <View style={styles.wrapper}>
        <Text style={styles.text}>
            TodoList
        </Text>
    </View>
);

const styles = StyleSheet.create({
    wrapper: {
        paddingTop: 40,
        paddingBottom: 20,
        backgroundColor: '#EF4F4A',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: 'white',
        fontSize: 22,
    }
});