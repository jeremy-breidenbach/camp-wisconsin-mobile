import React, { Component } from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-elements';

class CampsiteDetails extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1, paddingBottom: 20 }}>
                <Text h1>Site {navigation.getParam('campsite')}</Text>
                <Text>Loop: {navigation.getParam('campsiteLoop')}</Text>
                <Text>Site type: {navigation.getParam('campsiteType')}</Text>
                <Text>Max equipment length: {navigation.getParam('campsiteMaxEquipmentLength')}</Text>
                <Text>Max number of people: {navigation.getParam('campsiteMaxPeople')}</Text>
                <Text>Amps: {navigation.getParam('campsiteAmps')}</Text>
                <Text>Are pets allowed? {navigation.getParam('campsitePetsAllowed')}</Text>
                <Text>Has sewer hookup? {navigation.getParam('campsiteHasSewerHookup')}</Text>
                <Text>Has water hookup? {navigation.getParam('campsiteHasWaterHookup')}</Text>
                <Text>Is on waterfront? {navigation.getParam('campsiteIsWaterfront')}</Text>
            </View>
        );
    }
}

export default CampsiteDetails;
