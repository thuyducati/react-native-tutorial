import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class ViewComponent extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', height: 100, padding: 20, }}>
                <View style={{ backgroundColor: 'blue', flex: 0.3, }}></View>
                <View style={{ backgroundColor: 'red', flex: 0.5, }}></View>
                <Text>Hello World!</Text>
            </View>
        )
    }
}