import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View
} from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

class Example1 extends Component {
  render() {
    return (
      <View>
        <Text>At Example 1</Text>
      </View>
    );
  }
}

class Example2 extends Component {
  render() {
    return (
      <View>
        <Text>At Example 2</Text>
      </View>
    );
  }
}

export default class ExampleFlux extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="example_1" component={Example1} title="example_1" />
          <Scene key="example_2" title="example_2" />
        </Scene>
      </Router>
    );
  }
}

AppRegistry.registerComponent('example_flux', () => ExampleFlux);
