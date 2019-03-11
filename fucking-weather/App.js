import React, { Component } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Weather from "./Weather";

export default class App extends Component {

  state = {
    isLoaded: true
  };
  render() {
    const { isLoaded } = this.state;
    return (
      <View style={styles.container}>
        {isLoaded ? (
          <Weather/>
        ) : (
          <View style={styles.loading}>
            <Text style={styles.loadingText}>Hollyyyy Shit!!! It is Monday!</Text>
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0071bc',
  },
  loading: {
    flex: 1,
    backgroundColor: '#fdf6aa',
    justifyContent: "flex-end",
    padding: 20
  },
  loadingText: {
    fontSize: 40,
    marginBottom: 100
  }
});
