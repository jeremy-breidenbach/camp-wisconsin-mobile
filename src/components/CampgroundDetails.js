import React, { Component } from 'react';
import { ScrollView, StyleSheet, View, SectionList } from 'react-native';
import { Button, Card, List, ListItem, Text } from 'react-native-elements';

class CampgroundDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('campgroundName', 'Campground Details')
        };
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            amenitiesListSections: []
        };
    }

    componentDidMount() {
        this.parseAmenities(this.props.navigation.getParam('campgroundAmenities'));
        console.log(this.state.amenitiesWithinFacility);
    }

    parseAmenities(amenitiesJsonString) {
        const amenitiesArray = JSON.parse(amenitiesJsonString);
        const amenitiesWithinFacility = [];
        const amenitiesWithin10Miles = [];
        const amenitiesGreaterThan10Miles = [];
        const amenitiesGreaterThan1Mile = [];
        const amenitiesListSections = [];

        for (let i = 0; i < amenitiesArray.length; i++) {
            if (amenitiesArray[i].distance === 'Within Facility') {
                amenitiesWithinFacility.push(amenitiesArray[i].name);
            } else if (amenitiesArray[i].distance === 'Within 10 Miles') {
                amenitiesWithin10Miles.push(amenitiesArray[i].name);
            } else if (amenitiesArray[i].distance === 'Greater Than 10 Miles') {
                amenitiesGreaterThan10Miles.push(amenitiesArray[i].name);
            } else if (amenitiesArray[i].distance === 'Greater Than 1 Mile') {
                amenitiesGreaterThan1Mile.push(amenitiesArray[i].name);
            }
        }
        
        if (amenitiesWithinFacility.length > 0) {
            amenitiesListSections.push({ title: 'Within Facility', data: amenitiesWithinFacility });
        }

        if (amenitiesGreaterThan1Mile.length > 0) {
            amenitiesListSections.push({ title: 'Greater Than 1 Mile', data: amenitiesGreaterThan1Mile });
        }

        if (amenitiesWithin10Miles.length > 0) {
            amenitiesListSections.push({ title: 'Within 10 Miles', data: amenitiesWithin10Miles });
        }

        if (amenitiesGreaterThan10Miles.length > 0) {
            amenitiesListSections.push({ title: 'Greater Than 10 Miles', data: amenitiesGreaterThan10Miles });
        }


        this.setState({
            amenitiesListSections
        });
    }

    render() {
        const { navigation } = this.props;
        const campgroundId = navigation.getParam('campgroundId');

        return (
            <View style={{ flex: 1, paddingBottom: 20 }}>
                <ScrollView>
                    <Text h2 style={styles.campgroundName}>{navigation.getParam('campgroundName', '')}</Text>
                    <Text style={styles.campgroundDescription}>{navigation.getParam('campgroundDescription', '')}</Text>
                    <View style={styles.campgroundAddress}>
                        <Text h3>Address</Text>
                        <Text>{navigation.getParam('campgroundAddress', '')}</Text>
                        <Text>{navigation.getParam('campgroundCity', '')}, {navigation.getParam('campgroundState', '')} {navigation.getParam('campgroundZip', '')}</Text>
                    </View>
                    <View style={styles.campsitesButton}>
                        <Button 
                            title='View Campsites' 
                            onPress={() => navigation.navigate('Campsites', {
                                campgroundId
                            })}
                        />
                    </View>
                    <View>
                        <Card title='Amenities'>
                            <SectionList 
                                renderItem={({item, index, section}) => <ListItem key={index} title={item} hideChevron />}
                                renderSectionHeader={({ section: { title } }) => (<Text style={{ fontWeight: 'bold' }}>{title}</Text>)}
                                sections={this.state.amenitiesListSections}
                                keyExtractor={(item, index) => index}
                            />
                        </Card>
                    </View>
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
