import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class CampsiteDetails extends Component {
    render() {
        return (
            <View>
                <Text>Loop: {this.props.navigation.getParam('campsiteLoop', '')}</Text>
            </View>
        );
    }
}

export default CampsiteDetails;
