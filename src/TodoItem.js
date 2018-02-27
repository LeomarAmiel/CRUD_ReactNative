import React, { Component } from 'react';
import { StyleSheet, Image, Text, TextInput, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { updateTodoOnFirebase, completeTodoOnFirebase } from './actions'

class TodoItem extends Component {
    constructor(props){
        super(props);
        this.state = {
            isCompleted: false,
            todo: props.children
        }
    }

    onCompletedPress () {
        this.setState({isCompleted: !this.state.isCompleted});
        this.props.completeTodoOnFirebase(this.props.index, this.state.todo);
    }
    
    onChangeInputText (todo) {
        this.setState({todo});
    }
    
    onBlurInputText () {
        this.props.updateTodoOnFirebase(this.props.index, this.state.todo);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} onPress={this.onCompletedPress.bind(this)}>
                        <View style={this.state.isCompleted ? styles.buttonBackground : null}/>
                    </TouchableOpacity>
                </View>
                <View style={styles.textWrapper}>
                    <TextInput multiline style={styles.text} autoCorrect={false} value={this.state.todo} onChangeText={this.onChangeInputText.bind(this)} onBlur={this.onBlurInputText.bind(this)}/>
                </View>
            </View>
        )
    }
}
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
        borderColor: '#c1c1c1',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonBackground: {
        height: 18,
        width: 18,
        borderRadius: 50,
        backgroundColor: '#588B8B'
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
});

export default connect(null, { updateTodoOnFirebase, completeTodoOnFirebase })(TodoItem)