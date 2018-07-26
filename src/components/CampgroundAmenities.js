import React, { Component } from 'react';
import { View, SectionList } from 'react-native';
import { Card, ListItem, Text } from 'react-native-elements';

class CampgroundAmenities extends Component {
    constructor(props) {
        super(props);
        this.state = {
            amenitiesListSections: []
        };
    }

    componentWillMount() {
        this.parseAmenities(this.props.campgroundAmenities);
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
            amenitiesListSections.push({ 
                title: 'Within Facility', 
                data: amenitiesWithinFacility 
            });
        }

        if (amenitiesGreaterThan1Mile.length > 0) {
            amenitiesListSections.push({ 
                title: 'Greater Than 1 Mile', 
                data: amenitiesGreaterThan1Mile 
            });
        }

        if (amenitiesWithin10Miles.length > 0) {
            amenitiesListSections.push({ 
                title: 'Within 10 Miles', 
                data: amenitiesWithin10Miles 
            });
        }

        if (amenitiesGreaterThan10Miles.length > 0) {
            amenitiesListSections.push({ 
                title: 'Greater Than 10 Miles', 
                data: amenitiesGreaterThan10Miles 
            });
        }


        this.setState({
            amenitiesListSections
        });
    }

    render() {
        return (
            <View>
            <Card title='Amenities'>
                <SectionList 
                    renderItem={({ item, index, section }) => 
                        <ListItem 
                            key={index} 
                            title={item} 
                            hideChevron 
                            titleStyle={{ marginLeft: 0 }}
                        />
                    }
                    renderSectionHeader={({ section: { title } }) => 
                        (<Text style={{ fontWeight: 'bold', marginTop: 15 }}>{title}</Text>)
                    }
                    sections={this.state.amenitiesListSections}
                    keyExtractor={(item, index) => index}
                    style={{ marginTop: -15 }}
                />
            </Card>
        </View>
        );
    }
}

export default CampgroundAmenities;
