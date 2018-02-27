import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import { fetchFromFirebase } from './actions';

class TodoList extends Component {
    constructor(props){
        super(props);
        props.fetchFromFirebase();
    }

    renderItem = ({ item }) => (
        <TodoItem>
            {item}
        </TodoItem>
    );

    render() {
        return (
            <ScrollView style={styles.listStyle}>
                {this.props.todo.map((val, index) => 
                    <TodoItem key={index}>
                        {val}
                    </TodoItem>
                )}
                <AddTodo/>
            </ScrollView>
        );
    }
};

const styles = StyleSheet.create({
    listStyle: {
        flex: 1,
    }
})

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, {fetchFromFirebase})(TodoList)