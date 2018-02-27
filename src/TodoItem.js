import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default ({children}) => (
    <View style={styles.wrapper}>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button}/>
        </View>
        <View style={styles.textWrapper}>
            <Text style={styles.text}>
                {children}
            </Text>
        </View>
    </View>
)

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        borderColor: '#e5e5e5',
        height: 40,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    buttonWrapper: {
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        height: 27,
        width: 27,
        borderRadius: 50,
        borderWidth: 1,
        borderColor: '#e5e5e5'
    },
    textWrapper: {
        borderColor: '#e5e5e5',
        flex: 1,
        borderBottomWidth: 1
    },
    text: {
        paddingLeft: 10,
        fontSize: 18,
    },
})