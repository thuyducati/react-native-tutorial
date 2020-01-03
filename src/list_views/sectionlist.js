import React, { Component } from 'react'
import { StyleSheet, View, Text, SectionList, Platform } from 'react-native'

import { sectionListData } from './data/sectionlist-data'

class SectionListItem extends Component {
    render() {
        return (
            <View style={styles.sectionListStyles}>
                <Text style={styles.nameSectionListStyles}>
                    {this.props.item.name}
                </Text>
                <Text style={styles.descriptionSectionListStyles}>
                    {this.props.item.description}
                </Text>
                <View style={styles.separatorStyles} />
            </View>
        )
    }
}

class SectionHeader extends Component {
    render() {
        return (
            <View style={styles.containerSectionHeaderStyles}>
                <Text style={styles.titleSectionHeaderStyles}>
                    {this.props.section.title}
                </Text>
            </View>
        )
    }
}

export default class SectionListComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SectionList
                    sections={sectionListData}
                    renderItem={
                        ({ item, index }) => {
                            return (
                                <SectionListItem item={item} index={index} />
                            )
                        }
                    }
                    renderSectionHeader={
                        ({ section }) => {
                            return (
                                <SectionHeader section={section} />
                            )
                        }
                    }
                    keyExtractor={
                        (item, index) => item.name
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
    sectionListStyles: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: 'rgb(98, 197, 184)'
    },
    nameSectionListStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'rgb(173, 252, 250)',
        marginLeft: 20,
        marginRight: 10
    },
    descriptionSectionListStyles: {
        fontSize: 16,
        marginLeft: 20,
        marginRight: 10,
        color: 'rgb(173, 252, 250)'
    },
    containerSectionHeaderStyles: {
        flex: 1,
        backgroundColor: 'rgb(77, 120, 140)'
    },
    titleSectionHeaderStyles: {
        fontSize: 16,
        fontWeight: 'bold',
        color: 'white',
        margin: 20
    },
    separatorStyles: {
        backgroundColor: 'rgb(77, 120, 140)',
        height: 1,
        margin: 4,
        marginLeft: 20,
        marginRight: 10
    }
})
