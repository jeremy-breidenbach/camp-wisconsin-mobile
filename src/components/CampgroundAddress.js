import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class CampgroundAddress extends Component {
    render() {
        const address = this.props.campgroundAddress;
        const city = this.props.campgroundCity;
        const state = this.props.campgroundState;
        const zipCode = this.props.campgroundZip;
        
        if (address === '' && city === '' & state === '' & zipCode === '') {
            return null;
        }

        return (
            <View>
                <Text h3>Address</Text>
                <Text>{address}</Text>
                <Text>{`${city}, ${state} ${zipCode}`}</Text>
            </View>
        );
    }
}

export default CampgroundAddress;
