import React from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import mainReducer from './src/reducers';
import TodoList from './src/TodoList';
import Header from './src/Header';
import VisibilityButton from './src/VisibilityButton';

const store = createStore(mainReducer, applyMiddleware(thunk));

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <View style={styles.container}>  
                    <StatusBar backgroundColor='black' barStyle='light-content'/>
                    <Header/>
                    <TodoList/>
                    <VisibilityButton/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
});
