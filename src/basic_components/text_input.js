import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

class UselessTextInput extends Component {
    render() {
        return (
            <TextInput
                {...this.props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
                editable={true}
                maxLength={40} />
        )
    }
}

export default class TextInputComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            text: 'useless placeholder',
            text1: 'useless multiline placeholder',
        }
    }
    
    render() {
        return (
            <View style={{ backgroundColor: this.state.text1, borderBottomColor: '#000000', borderBottomWidth: 1, }}>
                <UselessTextInput
                    multiline={true}
                    numberOfLines={4}
                    onChangeText={(text1) => this.setState({ text1 })}
                    value={this.state.text1} />
            </View>

            // <TextInput
            //     style={{ height: 40, borderColor: 'gray', borderWidth: 1, }}
            //     onChangeText={(text) => this.setState({ text })}
            //     value={this.state.text} />
        ) 
    }
}