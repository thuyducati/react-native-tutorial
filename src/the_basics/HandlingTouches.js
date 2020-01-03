import React, { Component } from "react";
import {
    View, Text, Button, Alert, StyleSheet,
    TouchableHighlight, TouchableOpacity,
    TouchableNativeFeedback, TouchableWithoutFeedback,
    Platform,
} from "react-native";

export default class HandlingTouches extends Component {
    _onPressRedButton() {
        Alert.alert("You tapped the red button!")
    }
    _onPressGreenButton() {
        Alert.alert("You tapped the green button!")
    }
    _onPressVioletButton() {
        Alert.alert("You tapped the violet button!")
    }
    _onPressOrangeButton() {
        Alert.alert("You tapped the orange button!")
    }

    _touchableHighlightButton() {
        Alert.alert("You tapped the TouchableHighlight button!")
    }
    _touchableOpacityButton() {
        Alert.alert("You tapped the TouchableOpacity button!")
    }
    _touchableNativeFeedbackButton() {
        Alert.alert("You tapped the TouchableNativeFeedback button!")
    }
    _touchableWithoutFeedbackButton() {
        Alert.alert("You tapped the TouchableWithoutFeedback button!")
    }
    _touchableWithLongPressButton() {
        Alert.alert("You tapped the Touchable With Long Press button!")
    }

    render() {
        return (
            <View style={styles.container}>
                {/* Button basics */}
                <View style={styles.buttonContainer}>
                    <Button
                        title="Press here"
                        onPress={this._onPressRedButton}
                        color="red" />
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        title="Press me"
                        onPress={this._onPressGreenButton}
                        color="green" />
                </View>

                <View style={styles.altLayoutBtnContainer}>
                    <Button
                        title="Click here"
                        onPress={this._onPressVioletButton}
                        color="violet" />
                    <Button
                        title="Click here"
                        onPress={this._onPressOrangeButton}
                        color="orange" />
                </View>

                {/* Touchables */}
                <TouchableHighlight onPress={this._touchableHighlightButton} underlayColor="red">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                    </View>
                </TouchableHighlight>

                <TouchableOpacity onPress={this._touchableOpacityButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                    </View>
                </TouchableOpacity>

                <TouchableNativeFeedback
                    onPress={this._touchableNativeFeedbackButton}
                    background={Platform.OS === "android" ? TouchableNativeFeedback.SelectableBackground() : ""}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
                    </View>
                </TouchableNativeFeedback>

                <TouchableWithoutFeedback onPress={this._touchableWithoutFeedbackButton}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableHighlight onLongPress={this._touchableWithLongPressButton} underlayColor="yellow">
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable With Long Press</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonContainer: {
        margin: 10,
        width: 200,
    },
    altLayoutBtnContainer: {
        width: 200,
        margin: 10,
        flexDirection: "row",
        justifyContent: "space-around",
    },
    button: {
        width: 300,
        alignItems: "center",
        backgroundColor: "lightgray",
        margin: 5,
    },
    buttonText: {
        padding: 20,
    },
});