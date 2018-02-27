import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text, View, TextInput, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { addToFirebase, changeAddTodo } from './actions';

const SCREEN_WIDTH = Dimensions.get('window').width - 40;

class AddTodo extends Component {
    constructor(props){
        super(props);

        this.state = {
            isDisabled: true
        }
    }

    inputChange(todo) {
        this.props.changeAddTodo(todo);
        if (todo!=='') {
            this.setState({isDisabled: false})
        }
        if (todo==='') {
            this.setState({isDisabled: true})
        }
    }

    addTodo () {
        console.log(this.props);
        this.props.addToFirebase(this.props.todo);
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.buttonWrapper}>
                    <TouchableOpacity style={styles.button} disabled={this.state.isDisabled} onPress={this.addTodo.bind(this)}>
                        <Text style={this.state.isDisabled ? styles.indicatorInactive : styles.indicatorActive}>+</Text>
                    </TouchableOpacity>
                </View>        
               <View style={styles.inputWrapper}>
                    <TextInput multiline style={styles.textInput} autoCorrect={false} value={this.props.todo} onChangeText={this.inputChange.bind(this)} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
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
        justifyContent: 'center',
        alignItems: 'center',
    },
    indicatorActive: {
        fontSize: 36,
        color: '#4095F7',
    },
    indicatorInactive: {
        fontSize: 36,
        color: '#e5e5e5',
    },
    inputWrapper: {
        borderColor: '#e5e5e5',
        flex: 1,
        borderBottomWidth: 1
    },
    textInput: {
        width: SCREEN_WIDTH,
        paddingLeft: 10,
        fontSize: 18,
    }
})

const mapStateToProps = ({addTodo}) => ({
    todo: addTodo
})

export default connect(mapStateToProps, { addToFirebase, changeAddTodo })(AddTodo);