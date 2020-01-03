import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

export default class HandlingTextInput extends Component {
    constructor(props) {
        super(props);
        // the default text when run the app
        this.state = { text: "" };
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput
                    style={{ height: 50 }}
                    placeholder="Type here to translate"
                    onChangeText={(text) => this.setState({ text })}
                    value={this.state.text} />

                <Text style={styles.results}>
                    {this.state.text
                        .split(' ')
                        .map((word) => word && '🍕')
                        .join(' ')}
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    results: {
        padding: 10,
        fontSize: 50,
    }
});