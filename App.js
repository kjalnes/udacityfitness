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
                <View style={{flex: 1}}>
                    <AddEntry />
                </View>
            </Provider>
        );
    }
}
