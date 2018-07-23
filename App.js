import React, { Component } from 'react';
import {
  Text,
  View,
  ImageBackground,
  StatusBar
} from 'react-native';
import styles from './src/css/styles';

export default class App extends Component {
  render() {
    return (
      <View style={styles.MainContainer}>
        <StatusBar
          backgroundColor="#117864"
          barStyle="light-content"
        />
        <Text style={styles.textHeader}>React Native Codility</Text>
        <View style={{ width: '100%', height: 1, backgroundColor: '#117864' }} />
        <ImageBackground resizeMode="center"
          source={{ uri: 'https://github.com/ReactNativeCodility/GeoLocation/blob/master/design/enable.png?raw=true' }}
          style={styles.imageStyle} >
        </ImageBackground>
      </View>
    );
  }
}
