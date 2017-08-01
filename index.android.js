/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
'use strict';
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Route from './app_src/route/route'

export default class food extends Component {
  render() {
    console.log("hello");
    return (
      <View style={styles.container}>

      <Route />

      </View>
      
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#93006B',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

AppRegistry.registerComponent('food', () => food);
