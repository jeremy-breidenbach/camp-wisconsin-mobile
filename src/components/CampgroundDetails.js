import React, { Component } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import CampgroundAmenities from './CampgroundAmenities';
import CampgroundAddress from './CampgroundAddress';

class CampgroundDetails extends Component {
    static navigationOptions = {
        title: 'Campground Details'
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
        };
    }

    render() {
        const { navigation } = this.props;
        const campgroundId = navigation.getParam('campgroundId');

        return (
            <View style={{ flex: 1, paddingBottom: 20 }}>
                <ScrollView>
                    <Text h2 style={styles.campgroundName}>
                        {navigation.getParam('campgroundName', '')}
                    </Text>
                    <Text style={styles.campgroundDescription}>
                        {navigation.getParam('campgroundDescription', '')}
                    </Text>
                    <View style={styles.campgroundAddress}>
                        <CampgroundAddress 
                            campgroundAddress={navigation.getParam('campgroundAddress', '')}
                            campgroundCity={navigation.getParam('campgroundCity', '')}
                            campgroundState={navigation.getParam('campgroundState', '')}
                            campgroundZip={navigation.getParam('campgroundZip', '')}
                        />
                    </View>
                    <View style={styles.campsitesButton}>
                        <Button 
                            title='View Campsites' 
                            onPress={() => navigation.navigate('Campsites', {
                                campgroundId
                            })}
                        />
                    </View>
                    <CampgroundAmenities 
                        campgroundAmenities={
                            this.props.navigation.getParam('campgroundAmenities')
                        } 
                    />
                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    campgroundName: {
        marginTop: 10,
        marginLeft: 20
    },
    campgroundDescription: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
        color: '#333333'
    },
    campgroundAddress: {
        marginTop: 10,
        marginLeft: 20
    },
    campsitesButton: {
        marginTop: 20
    }
});

export default CampgroundDetails;
