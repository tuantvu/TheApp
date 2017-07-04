/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
import React, { Component } from 'react';
import {AppRegistry, ActivityIndicator} from 'react-native'
import App from './src/app'

//Surpress warnings by firebase's use of timers
console.ignoredYellowBox = ['Setting a timer'];

export default class TheApp extends React.Component {
  render() {
    return (
      <App />
    );
  }
}

AppRegistry.registerComponent('TheApp', () => TheApp);