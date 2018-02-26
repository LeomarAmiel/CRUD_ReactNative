import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default ({children}) => (
    <View style={styles.item}>
        <Text>
            {children}
        </Text>
    </View>
)

const styles = StyleSheet.create({
    item: {
        flex: 1,
        borderWidth: 1,
    }
})