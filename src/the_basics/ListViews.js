import React, { Component } from "react";
import { View, Text, FlatList, SectionList, StyleSheet } from "react-native";

export default class ListViews extends Component {
    // renderSeparator method
    renderSeparator = () => {
        return (
            <View style={styles.separator} />
        );
    };

    // handling onPress action
    getListViewItem = (item) => {
        alert(item);
    }

    render() {
        var A = [
            { 'id': '1', 'value': 'Australia' },
            { 'id': '2', 'value': 'Australia' },
            { 'id': '3', 'value': 'Australia' },
        ];
        var B = [
            { 'id': '4', 'value': 'Benin' },
            { 'id': '5', 'value': 'Bhutan' },
            { 'id': '6', 'value': 'Bosnia' },
            { 'id': '7', 'value': 'Botswana' },
            { 'id': '8', 'value': 'Brazil' },
            { 'id': '9', 'value': 'Brunei' },
            { 'id': '10', 'value': 'Bulgaria' },
        ];
        var C = [
            { 'id': '11', 'value': 'Cambodia' },
            { 'id': '12', 'value': 'Cameroon' },
            { 'id': '13', 'value': 'Canada' },
            { 'id': '14', 'value': 'Cabo' },
        ];

        return (
            <View style={styles.container}>
                {/* FlatList Basics */}
                {/* <FlatList
                    data={[
                        { key: 'Devin' },
                        { key: 'Jackson' },
                        { key: 'James' },
                        { key: 'Joel' },
                        { key: 'John' },
                        { key: 'Jillian' },
                        { key: 'Jimmy' },
                        { key: 'Julie' },
                    ]}
                    renderItem={
                        ({ item }) => <Text style={styles.itemAtt}>{item.key}</Text>
                    }
                /> */}

                {/* SectionList Basics */}
                <SectionList
                    // sections source
                    sections={[
                        { title: 'A', data: A },
                        { title: 'B', data: B },
                        { title: 'C', data: C }
                    ]}
                    // renderItem takes one item from the source and returns a formatted component to render.
                    renderItem={
                        ({ item }) =>
                            <Text
                                style={styles.itemAtt}
                                onPress={this.getListViewItem.bind(this, item.value)}>
                                {item.value}
                            </Text>
                    }
                    renderSectionHeader={
                        ({ section }) =>
                            <Text style={styles.sectionHeader}>
                                {section.title}
                            </Text>
                    }

                    /**
                     * keyExtractor tells the list to use the id(s) (each item.id of each element) 
                     * for the react keys instead of the default key property.
                     */
                    keyExtractor={
                        (item, index) => item.id
                    }

                    /**
                     * ItemSeparatorComponent prop adds the Separator between the 
                     * lists of data. Using this prop, call a renderSeparatormethod 
                     * in which we add a View component as separator.
                     */
                    ItemSeparatorComponent={
                        this.renderSeparator
                    }
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 22,
    },
    itemAtt: {
        padding: 10,
        fontSize: 18,
        height: 44,
    },
    sectionHeader: {
        paddingTop: 2,
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 2,
        fontSize: 20,
        fontWeight: 'bold',
        backgroundColor: 'lightgray',
    },
    separator: {
        height: 1,
        width: "100%",
        backgroundColor: "gray",
    },
});