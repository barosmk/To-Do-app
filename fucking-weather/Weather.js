import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from 'expo';


export default class Weather extends Component{
    render() {
        return (
            <LinearGradient
                colors={['#00c6fb', '#005bea']}
                style={styles.container}
            />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex:1
    }
});