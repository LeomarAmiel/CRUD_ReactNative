import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import TodoItem from './TodoItem';
import { fetchData } from './actions';

class TodoList extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    renderItem = ({ item }) => (
        <TodoItem>
            {item}
        </TodoItem>
    );

    render() {
        return (
            <FlatList
                style={styles.listStyle}
                renderItem={this.renderItem}
                data={this.props.todo}
                keyExtractor={(item, index) => index}
            />
        );
    }
};

const styles = StyleSheet.create({
    listStyle: {
        flex: 1,
        borderWidth: 1,
    }
})

const mapStateToProps = (state) => ({
    todo: state.todo
})

export default connect(mapStateToProps, {fetchData})(TodoList)