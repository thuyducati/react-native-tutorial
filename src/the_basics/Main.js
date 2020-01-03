import React, { Component } from 'react';
import { Text, View, StyleSheet, Image } from "react-native";

class Blink extends Component {
    /**
     * componentDidMount() is invoked immediately after a component 
     * is mounted (inserted into the tree). Initialization that requires
     * DOM nodes should go here. If you need to load data from a remote
     * endpoint, this is a good place to instantiate the network request.
     */

    // toggle the state every second
    componentDidMount() {
        setInterval(() => (
            this.setState(previousState => ({
                isShowingText: !previousState.isShowingText
            }))
        ), 1000);
    }

    // state object
    state = { isShowingText: true };

    render() {
        if (!this.state.isShowingText) {
            return null;
        }

        return (
            <Text>{this.props.text}</Text>
        );
    }
}

class SayHello extends Component {
    render() {
        return (
            <View>
                <Text style={[styles.bigGreeting, styles.bigGreeting2]}>
                    Xin chào {this.props.name}!!!
        </Text>
            </View>
        );
    }
}

export default class HelloWorld extends Component {
    render() {
        let pic = {
            uri: "https://besthqwallpapers.com/Uploads/23-12-2018/75365/thumb2-4k-bmw-s1000rr-back-view-2018-bikes-superbikes.jpg"
        };

        return (
            <View style={styles.spaceSizeFlex}>
                <View style={styles.smallSquare} />
                <View style={styles.normalSquare} />
                <View style={styles.bigSquare} />

                <View style={styles.moreSquare1} />
                <View style={styles.moreSquare2} />
                <View style={styles.moreSquare3} />
                <View style={styles.moreSquare4} />
                <View style={styles.moreSquare5} />
                <View style={styles.moreSquare6} />
                <View style={styles.moreSquare7} />
                <View style={styles.moreSquare8} />

                {/* <Blink text="I love to blink" />
        <Blink text="Yes, blinking is so great" />
        <Blink text="Why did they ever take this out of HTML" />
        <Blink text="Look at me Look at me Look at me" /> */}

                {/* <SayHello name="Bun Cung" />
        <SayHello name="Bun So" /> */}

                {/* <Image source={pic} style={styles.pictureAtt} /> */}

                {/* <Text>Hello World!</Text>
        <Text>This is my first app written by React Native!</Text> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    greeting: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#DADADA",
    },
    pictureAtt: {
        width: 300,
        height: 200,
        margin: 10,
    },
    bigGreeting: {
        color: "red",
        fontWeight: "bold",
    },
    bigGreeting2: {
        fontSize: 30,
    },
    smallSquare: {
        width: 80,
        height: 80,
        // flex: 1,
        backgroundColor: "powderblue",
        position: "absolute",
        top: 50,
        left: 50,
        right: 0,
        bottom: 0,
    },
    normalSquare: {
        width: 80,
        height: 80,
        // flex: 2,
        backgroundColor: "skyblue",
        position: "absolute",
        top: 100,
        left: 100,
        right: 0,
        bottom: 0,
    },
    bigSquare: {
        width: 80,
        height: 80,
        // flex: 3,
        backgroundColor: "steelblue",
        position: "absolute",
        top: 150,
        left: 150,
        right: 0,
        bottom: 0,
    },
    moreSquare1: {
        width: 80,
        height: 80,
        backgroundColor: "red",
        position: "absolute",
        top: 200,
        left: 200,
        right: 0,
        bottom: 0,
    },
    moreSquare2: {
        width: 80,
        height: 80,
        backgroundColor: "yellow",
        position: "absolute",
        top: 250,
        left: 250,
        right: 0,
        bottom: 0,
    },
    moreSquare3: {
        width: 80,
        height: 80,
        backgroundColor: "green",
        position: "absolute",
        top: 300,
        left: 300,
        right: 0,
        bottom: 0,
    },
    moreSquare4: {
        width: 80,
        height: 80,
        backgroundColor: "pink",
        position: "absolute",
        top: 350,
        left: 250,
        right: 0,
        bottom: 0,
    },
    moreSquare5: {
        width: 80,
        height: 80,
        backgroundColor: "gray",
        position: "absolute",
        top: 400,
        left: 200,
        right: 0,
        bottom: 0,
    },
    moreSquare6: {
        width: 80,
        height: 80,
        backgroundColor: "orange",
        position: "absolute",
        top: 450,
        left: 150,
        right: 0,
        bottom: 0,
    },
    moreSquare7: {
        width: 80,
        height: 80,
        backgroundColor: "black",
        position: "absolute",
        top: 500,
        left: 100,
        right: 0,
        bottom: 0,
    },
    moreSquare8: {
        width: 80,
        height: 80,
        backgroundColor: "violet",
        position: "absolute",
        top: 550,
        left: 50,
        right: 0,
        bottom: 0,
    },
    spaceSize: {
        width: 300,
        height: 300,
    },
    spaceSizeFlex: {
        flex: 1,
        flexDirection: "column",
        // justifyContent: "flex-start",
        // alignItems: "stretch",
        // flexWrap: "wrap",
        // alignContent: "flex-start",
    },
});