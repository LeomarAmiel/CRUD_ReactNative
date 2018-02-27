import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, UIManager, LayoutAnimation } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { fetchFromFirebase } from './actions';

class TodoList extends Component {
    constructor(props){
        super(props);
        props.fetchFromFirebase();
    }

    componentWillUpdate(){
        console.log('Does this run?');
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    render() {
        return (
            <ScrollView style={styles.listStyle}>
                {this.props.todo.map(({todo, completed}, index) => {
                    if(!completed) {
                        console.log(todo, completed);
                        return (
                            <TodoItem key={index} index={index}>
                                {todo}
                            </TodoItem>
                        )
                    }
                })}
                <AddTodo/>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    listStyle: {
        flex: 1,
        paddingBottom: 100
    }
})

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, {fetchFromFirebase})(TodoList)