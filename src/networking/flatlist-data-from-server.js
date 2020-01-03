import React, { Component } from 'react'
import {
    View, Text, FlatList,
    StyleSheet, Platform, RefreshControl
} from 'react-native'

import { getDataFromServer } from './server'

class FlatListItem extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: "row",
            }}>
                {/* <Image source={{ uri: 'http://' + this.props.item.imageUrl }} style={styles.imageStyles} /> */}

                <View style={styles.contentStyles}>
                    <Text style={styles.flatListStyles}>
                        {this.props.item.title}
                    </Text>
                    <Text style={styles.flatListStyles}>
                        {this.props.item.releaseYear}
                    </Text>
                    <View style={styles.separatorStyles} />
                </View>
            </View>
        )
    }
};

export default class FlatListWithDataFromServer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            refreshing: false,
            dataFromServer: []
        }
    }

    componentDidMount() {
        this.refreshDataFromServer()
    }

    refreshDataFromServer = () => {
        this.setState({ refreshing: true })

        getDataFromServer().then((data) => {
            this.setState({ dataFromServer: data })
            this.setState({ refreshing: false })
        }).catch(() => {
            this.setState({ dataFromServer: [] })
            this.setState({ refreshing: false })
        })
    }

    onRefresh = () => {
        this.refreshDataFromServer()
    }

    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    ref={'flatList'}
                    data={this.state.dataFromServer}
                    renderItem={
                        ({ item, index }) => {
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this} />
                            )
                        }
                    }
                    keyExtractor={
                        ({ id }) => id
                    }
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.refreshing}
                            onRefresh={(this.onRefresh)}
                        />
                    }
                />
            </View>
        )
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 34 : 0
    },
    flatListStyles: {
        color: 'black',
        padding: 10,
        fontSize: 15
    },
    imageStyles: {
        width: 100,
        height: 100,
        margin: 5
    },
    contentStyles: {
        flex: 1,
        flexDirection: "column"
    },
    toolBarStyles: {
        backgroundColor: 'tomato',
        height: 64,
        flexDirection: "row",
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    iconToolBarStyles: {
        width: 35,
        height: 35
    },
    separatorStyles: {
        backgroundColor: 'gray',
        height: 1,
        margin: 4,
        marginLeft: 10,
        marginRight: 10
    }
})