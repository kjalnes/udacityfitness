import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet
} from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends Component {
    handlePress = () => {
        alert('hello')
    }

    render() {
        return (
            <View style={style.container}>
                <AddEntry />
            </View>
        );
    }
}


const style = StyleSheet.create({
    container: {
        flex: 1,
        marginLeft: 10,
        marginRight: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    btn: {
        backgroundColor: '#E53224',
        padding: 10,
        paddingLeft: 50,
        paddingRight: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    btnText: {
        color: '#fff'
    }
})
