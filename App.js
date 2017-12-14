import React, { Component } from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import { Text, View, StyleSheet } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends Component {
    // componentDidMount() {
    //     console.log('Before')
    //     debugger;
    //     console.log('After')
    // }

    handlePress = () => {
        alert('hello')
    }

    render() {
        return (
            <Provider store={createStore(reducer)}>
                <View style={style.container}>
                    <AddEntry />
                </View>
            </Provider>
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
