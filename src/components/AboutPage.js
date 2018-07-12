import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class AboutPage extends Component {
    static navigationOptions = {
        title: 'About'
    }

    render() {
        return (
            <View>
                <Text>Camp Wisconsin app {'\u00A9'} 2018 Jeremy Breidenbach</Text>
            </View>
        );
    }
}

export default AboutPage;
