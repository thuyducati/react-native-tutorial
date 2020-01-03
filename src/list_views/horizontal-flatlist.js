import React, { Component } from 'react'
import { View, Text, StyleSheet, Platform, FlatList, Image, TouchableOpacity } from 'react-native'

import { horizontalStatus } from './data/horizontal-flatlist-data'
import { horizontalFlatListData } from './data/horizontal-flatlist-data'

import Icon from 'react-native-vector-icons/Ionicons'

class HorizontalFlatListItem extends Component {
    render() {
        return (
            <View style={styles.horizontalFlatListStyles}>
                <TouchableOpacity
                    style={styles.imageContainerStyles}
                    onPress={
                        () => {
                            alert(`You pressed: ${this.props.item.hour}`)
                        }
                    }
                />

                <Text style={styles.hourStyles}>
                    {this.props.item.hour}
                </Text>

                <Icon
                    name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={30}
                    color='white'
                />
                
                <Text style={styles.degreesStyles}>
                    {this.props.item.degrees} °F
                </Text>
            </View>
        )
    }
}

export default class HorizontalFlatListComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainerStyles}>
                    <Image
                        style={styles.imageBackgroundStyles}
                        source={require('./images/weather-forecast-background.jpg')}
                    />
                </View>

                <Text style={styles.titleStyles}>
                    Weather Forecast
                </Text>

                <View style={{ height: 150 }}>
                    <FlatList
                        style={styles.flatListStyles}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={
                            ({ item, index }) => {
                                return (
                                    <HorizontalFlatListItem item={item} index={index} parentFlatList={this} />
                                )
                            }
                        }
                        keyExtractor={
                            (item, index) => item.hour
                        }
                    />
                </View>
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    flatListStyles: {
        backgroundColor: 'black',
        opacity: 0.5
    },
    horizontalFlatListStyles: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        width: 90,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: 'grey',
        margin: 4
    },
    hourStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    degreesStyles: {
        fontSize: 16,
        margin: 10,
        color: 'white'
    },
    titleStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'black',
        backgroundColor: 'transparent',
        margin: 10
    },
    imageContainerStyles: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    },
    imageBackgroundStyles: {
        flex: 1,
        flexDirection: 'column',
        width: null,
        height: null,
        backgroundColor: 'transparent',
        justifyContent: 'center'
    }
})