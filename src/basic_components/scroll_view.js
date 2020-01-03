/**
 * Component that wraps platform ScrollView while providing integration with touch locking "responder" system.
 *
 * Keep in mind that ScrollViews must have a bounded height in order to work, since they contain unbounded-height
 * children into a bounded container (via a scroll interaction). In order to bound the height of a ScrollView,
 * either set the height of the view directly (discouraged) or make sure all parent views have bounded height.
 * Forgetting to transfer {flex: 1} down the view stack can lead to errors here, which the element inspector
 * makes easy to debug.
 *
 * Doesn't yet support other contained responders from blocking this scroll view from becoming the responder.
 *
 * <ScrollView> vs <FlatList> - which one to use?
 *
 * ScrollView simply renders all its react child components at once. That makes it very easy to understand and use.
 *
 * On the other hand, this has a performance downside. Imagine you have a very long list of items you want to display,
 * maybe several screens worth of content. Creating JS components and native views for everything all at once,
 * much of which may not even be shown, will contribute to slow rendering and increased memory usage.
 *
 * This is where FlatList comes into play. FlatList renders items lazily, just when they are about to appear, and
 * removes items that scroll way off screen to save memory and processing time.
 *
 * FlatList is also handy if you want to render separators between your items, multiple columns, infinite scroll
 * loading, or any number of other features it supports out of the box.
 */

import React, { Component } from 'react'
import {
    ScrollView, Image, View,
    Text, TextInput, Dimensions,
    StyleSheet, ViewPagerAndroid
} from 'react-native'

export default class ScrollViewComponent extends Component {
    render() {
        let screenWidth = Dimensions.get("window").width
        let screenHeight = Dimensions.get("window").height

        return (
            /* VerticalScrollView */
            // maximumZoomScale and minimumZoomScale props are only compatible with iOS   
            // <ScrollView
            //     keyboardDismissMode="on-drag"
            //     maximumZoomScale={3}
            //     minimumZoomScale={0.2}
            // >

            //     <Image
            //         source={require('../basic_components/image/Bun23.png')}
            //         style={{ width: screenWidth, height: screenWidth * 2448 / 3264, marginTop: 20 }} />

            //     <Text style={styles.textStyles}>
            //         This is a text
            //     </Text>

            //     <TextInput style={styles.textInputStyles} placeholder="Enter text" />

            //     <View style={styles.container}>
            //         <Text style={styles.textStyles}>
            //             This is a text
            //         </Text>
            //     </View>

            //     <Image
            //         source={require('../basic_components/image/Bun23.png')}
            //         style={{ width: screenWidth, height: screenWidth * 2448 / 3264, marginTop: 20 }} />

            //     <Image
            //         source={require('../basic_components/image/Bun23.png')}
            //         style={{ width: screenWidth, height: screenWidth * 2448 / 3264, marginTop: 20 }} />

            //     <Image
            //         source={require('../basic_components/image/Bun23.png')}
            //         style={{ width: screenWidth, height: screenWidth * 2448 / 3264, marginTop: 20 }} />
            // </ScrollView>

            /* HorizontalScrollView */
            // scrollIndicatorInsets props is only compatible with iOS
            // <ScrollView
            //     horizontal={true}
            //     pagingEnabled={true}
            //     showsHorizontalScrollIndicator={true}
            //     scrollIndicatorInsets={{ top: 10, left: 10, bottom: 10, right: 10 }}
            //     onMomentumScrollBegin={
            //         () => {
            //             // alert('Begin scrolling')
            //         }
            //     }
            //     onMomentumScrollEnd={
            //         () => {
            //             // alert('End scrolling')
            //         }
            //     }
            //     onScroll={
            //         (event) => {
            //             let logData = `Scrolled to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`
            //             console.log(logData)
            //         }
            //     }
            //     scrollEventThrottle={10} // milliseconds
            // >

            //     <View style={[{ width: screenWidth }, styles.screen1]}>
            //         <Text style={styles.textStyles}>
            //             Screen 1
            //         </Text>
            //     </View>

            //     <View style={[{ width: screenWidth }, styles.screen2]}>
            //         <Text style={styles.textStyles}>
            //             Screen 2
            //         </Text>
            //     </View>

            //     <View style={[{ width: screenWidth }, styles.screen3]}>
            //         <Text style={styles.textStyles}>
            //             Screen 3
            //         </Text>
            //     </View>
            // </ScrollView>

            /* ViewPagerAndroid */
            <ViewPagerAndroid
                style={{ flex: 1 }}
                initialPage={0}
                onPageScroll={
                    (event) => {
                        // console.log(`offset = ${event.nativeEvent.offset}`)
                    }
                }
                onPageScrollStateChanged={
                    (state) => {
                        // console.log(`Scrolling state = ${state}`)
                    }
                }
                onPageSelected={
                    (event) => {
                        console.log(`Scrolled to page: ${event.nativeEvent.position}`)
                    }
                }
            >

                <View style={styles.screen1}>
                    <Text style={styles.textStyles}>
                        Screen 1
                    </Text>
                </View>

                <View style={styles.screen2}>
                    <Text style={styles.textStyles}>
                        Screen 2
                    </Text>
                </View>

                <View style={styles.screen3}>
                    <Text style={styles.textStyles}>
                        Screen 3
                    </Text>
                </View>
            </ViewPagerAndroid>
        )
    }
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'pink',
        height: 50
    },
    textStyles: {
        fontSize: 20,
        padding: 15,
        color: 'white',
        textAlign: 'center',
    },
    textInputStyles: {
        padding: 10,
        margin: 10,
        borderWidth: 1
    },
    screen1: {
        backgroundColor: 'gray'
    },
    screen2: {
        backgroundColor: 'red'
    },
    screen3: {
        backgroundColor: 'green'
    }
})