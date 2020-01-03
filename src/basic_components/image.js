import React, { Component } from 'react';
import { View, Image } from 'react-native';

export default class ImageComponent extends Component {
    render() {
        return (
            <View>
                <Image
                    source={require('./image/Bun23.png')}
                    style={{ width: 100, height: 100 }}

                />
                <Image
                    source={{ uri: "https://facebook.github.io/react-native/docs/assets/favicon.png" }}
                    style={{ width: 100, height: 100 }}
                />
                <Image
                    source={{ uri: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==" }}
                    style={{ width: 66, height: 58 }}
                />
            </View>
        )
    }
}