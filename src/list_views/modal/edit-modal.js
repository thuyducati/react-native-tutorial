import React, { Component } from 'react'
import { Dimensions, View, Text, StyleSheet, Platform, TextInput } from 'react-native'

import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

import flatListData from '../data/flatlist-data'

var screen = Dimensions.get('window')

export default class EditModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            foodName: '',
            foodDescription: ''
        }
    }

    showEditModal = (editingFood, flatListItem) => {
        // console.log(`editingFood = ${JSON.stringify(editingFood)}`)

        this.setState({
            key: editingFood.key,
            foodName: editingFood.name,
            foodDescription: editingFood.foodDescription,
            flatListItem: flatListItem
        })

        this.refs.myModal.open()
    }

    generateKey = (numberOfCharacters) => {
        return require('random-string')({ length: numberOfCharacters })
    }

    render() {
        return (
            <Modal
                ref={'myModal'}
                style={[{ width: screen.width - 80 }, styles.container]}
                position='center'
                backdrop={true}
                onClosed={
                    () => {
                        // alert("Modal closed")
                    }
                }
            >
                <Text style={styles.textStyles}>Food's information</Text>

                <TextInput
                    onChangeText={(text) => this.setState({ foodName: text })}
                    style={styles.textInputStyles}
                    placeholder="Enter food's name"
                    value={this.state.foodName}
                />
                <TextInput
                    onChangeText={(text) => this.setState({ foodDescription: text })}
                    style={styles.textInputStyles}
                    placeholder="Enter food's description"
                    value={this.state.foodDescription}
                />
                <Button
                    style={styles.buttonStyles}
                    onPress={
                        () => {
                            if (this.state.foodName.length == 0 || this.state.foodDescription.length == 0) {
                                alert('You must enter food\'s name and description')
                                return;
                            }

                            // Update existing food
                            var foundIndex = flatListData.findIndex(item => this.state.key == item.key)

                            if (foundIndex < 0) {
                                // not found
                                return;
                            }

                            flatListData[foundIndex].name = this.state.foodName
                            flatListData[foundIndex].foodDescription = this.state.foodDescription

                            // Refresh FlatList Item
                            this.state.flatListItem.refreshFlatListItem()

                            this.refs.myModal.close()
                        }
                    }
                >
                    Save
                </Button>
            </Modal>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 10,
        shadowRadius: 10,
        height: 280
    },
    textStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 40
    },
    textInputStyles: {
        height: 40,
        borderBottomColor: 'gray',
        marginLeft: 30,
        marginRight: 30,
        marginTop: 10,
        marginBottom: 20,
        borderBottomWidth: 1
    },
    buttonStyles: {
        fontSize: 18,
        color: 'white',
        padding: 8,
        marginLeft: 70,
        marginRight: 70,
        height: 40,
        borderRadius: 6,
        backgroundColor: 'mediumseagreen'
    }
})
