import React, { Component } from 'react';
import { Text, View } from 'react-native';
import AddEntry from './components/AddEntry';

export default class App extends Component {
    constructor() {
      super()
    }

    render() {
      return (
          <View>
              <AddEntry />
              <Text>Hey!!!!!!!!!!</Text>
          </View>
      );
    }
}
