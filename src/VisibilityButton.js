import React, { Component } from 'react';
import { StyleSheet, Text, View, StatusBar, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { showCompleted } from './actions'

class VisibilityButton extends Component {

    changeRenderedItems () {
        this.props.isShowingCompleted ? this.props.showCompleted(false) : this.props.showCompleted(true)
    }

    render(){
        return (
            <TouchableOpacity onPress={this.changeRenderedItems.bind(this)} style={styles.button}>
                <Text style={styles.buttonText}>
                    {
                        this.props.isShowingCompleted ? 'Show Todos' : 'Show Completed'
                    }
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    button: {
        alignItems: 'center'
    },
    buttonText: {
        color: '#4095F7',
        height: 30,
        fontWeight: '800',
        fontSize: 16
    }
})

const mapStateToProps = ({filter}) => ({
    isShowingCompleted: filter   
})

export default connect(mapStateToProps, { showCompleted })(VisibilityButton);