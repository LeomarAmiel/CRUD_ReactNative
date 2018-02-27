import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

export default ({children}) => (
    <View style={styles.item}>
        <Text>
            {children}
        </Text>
        <View style={styles.buttonWrapper}>
            <TouchableOpacity>
                <Image style={styles.button} source={require('../assets/pencil.png')}/>
            </TouchableOpacity>
            <TouchableOpacity>
                <Image style={styles.button} source={require('../assets/trash.png')}/>
            </TouchableOpacity>
        </View>
    </View>
)

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderWidth: 1,
        height: 60,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingLeft: 20
    },
    button: {
        height: 20,
        width: 20
    },
    buttonWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
})