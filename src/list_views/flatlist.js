import React, { Component } from 'react'
import { View, Text, FlatList, StyleSheet, Image, Alert, Platform, TouchableHighlight } from 'react-native'
import Swipeout from 'react-native-swipeout'

import flatListData from './data/flatlist-data'

import AddModal from './modal/add-modal'
import EditModal from './modal/edit-modal'

class FlatListItem extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeRowKey: null,
            numberOfRefresh: 0
        }
    }

    refreshFlatListItem = () => {
        this.setState((prevState) => {
            return { numberOfRefresh: prevState.numberOfRefresh + 1 }
        })
    }

    render() {
        const swipeSettings = {
            autoClose: true,
            onClose: (secId, rowId, direction) => {
                if (this.state.activeRowKey != null) {
                    this.setState({ activeRowKey: null })
                }
            },
            onOpen: (secId, rowId, direction) => {
                this.setState({ activeRowKey: this.props.item.key })
            },
            right: [
                {
                    onPress: () => {
                        // alert('update') 
                        this.props.parentFlatList.refs.editModal.showEditModal(flatListData[this.props.index], this)
                    },
                    text: 'Edit', type: 'primary'
                },
                {
                    onPress: () => {
                        const deletingRow = this.state.activeRowKey

                        Alert.alert(
                            'Alert',
                            'Are you sure you want to delete?',
                            [
                                {
                                    text: 'No',
                                    onPress: () => console.log('Cancel Pressed'),
                                    style: 'cancel'
                                },
                                {
                                    text: 'Yes',
                                    onPress: () => {
                                        flatListData.splice(this.props.index, 1)

                                        // Refresh FlatList after deleted
                                        this.props.parentFlatList.refreshFlatList(deletingRow)
                                    }
                                }
                            ],
                            { cancelable: true }
                        )
                    },
                    text: 'Delete', type: 'delete'
                }
            ],
            rowId: this.props.index,
            sectionId: 1
        }

        return (
            <Swipeout {...swipeSettings}>
                <View style={{
                    flex: 1,
                    flexDirection: "row",
                    backgroundColor: this.props.index % 2 == 0 ? 'mediumseagreen' : 'tomato'
                }}>
                    <Image source={{ uri: this.props.item.imageUrl }} style={styles.imageStyles} />

                    <View style={styles.contentStyles}>
                        <Text style={styles.flatListStyles}>
                            {this.props.item.name}
                        </Text>
                        <Text style={styles.flatListStyles}>
                            {this.props.item.foodDescription}
                        </Text>
                    </View>
                </View>
            </Swipeout>
        )
    }
};

export default class FlatListComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            deletedRowKey: null
        }
        this.__onPressAdd = this.__onPressAdd.bind(this)
    }

    refreshFlatList = (activeKey) => {
        this.setState((prevState) => {
            return { deletedRowKey: activeKey }
        })
        this.refs.flatList.scrollToEnd()
    }

    __onPressAdd() {
        this.refs.addModal.showAddModal()
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.toolBarStyles}>
                    <TouchableHighlight
                        underlayColor='yellow'
                        style={{ marginRight: 10 }}
                        onPress={this.__onPressAdd}
                    >
                        <Image
                            style={styles.iconToolBarStyles}
                            source={require('../list_views/icon/add-icon.png')}
                        />
                    </TouchableHighlight>
                </View>

                <FlatList
                    ref={'flatList'}
                    data={flatListData}
                    renderItem={
                        ({ item, index }) => {
                            // console.log(`Item = ${JSON.stringify(item)}, index = ${index}`)
                            return (
                                <FlatListItem item={item} index={index} parentFlatList={this} />
                            )
                        }
                    }
                />

                <AddModal ref={'addModal'} parentFlatList={this} />
                <EditModal ref={'editModal'} parentFlatList={this} />
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
        color: 'white',
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
    }
})