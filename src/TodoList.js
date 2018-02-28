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
        UIManager.setLayoutAnimationEnabledExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.easeInEaseOut();
    }

    filterItems = () => {
        return this.props.todo.filter((todo, index) => 
            todo.completed === this.props.isShowingCompleted
        )
    }

    render() {
        var filteredItems = this.filterItems().map(({todo, completed}, index) => (
            <TodoItem key={index} index={index} data={todo}/>
        ));
        return (
            <ScrollView style={styles.listStyle}>
                {
                    filteredItems
                }
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
    todo: state.todo,
    isShowingCompleted: state.filter
})

export default connect(mapStateToProps, {fetchFromFirebase,})(TodoList)