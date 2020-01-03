import React, { Component } from 'react'
import { Dimensions, View, Text, StyleSheet, Platform, TextInput } from 'react-native'

import Modal from 'react-native-modalbox'
import Button from 'react-native-button'

import flatListData from '../data/flatlist-data'

var screen = Dimensions.get('window')

export default class AddModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newFoodName: '',
            newFoodDescription: ''
        }
    }

    showAddModal = () => {
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
                <Text style={styles.textStyles}>New food's information</Text>

                <TextInput
                    onChangeText={(text) => this.setState({ newFoodName: text })}
                    style={styles.textInputStyles}
                    placeholder="Enter new food's name"
                    value={this.state.newFoodName}
                />
                <TextInput
                    onChangeText={(text) => this.setState({ newFoodDescription: text })}
                    style={styles.textInputStyles}
                    placeholder="Enter food's description"
                    value={this.state.newFoodDescription}
                />
                <Button
                    style={styles.buttonStyles}
                    onPress={
                        () => {
                            if (this.state.newFoodName.length == 0 || this.state.newFoodDescription.length == 0) {
                                alert('You must enter food\'s name and description')
                                return;
                            }

                            const newKey = this.generateKey(24)

                            const newFood = {
                                key: newKey,
                                name: this.state.newFoodName, // Spaghetti
                                imageUrl: "https://www.inspiredtaste.net/wp-content/uploads/2019/03/Spaghetti-with-Meat-Sauce-Recipe-1-1200.jpg",
                                foodDescription: this.state.newFoodDescription
                            }

                            flatListData.push(newFood)

                            this.props.parentFlatList.refreshFlatList(newKey)
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
