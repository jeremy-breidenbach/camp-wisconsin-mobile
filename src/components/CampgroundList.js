import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

class CampgroundList extends Component {
    static navigationOptions = {
        title: 'Campground List'
    };
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            campgrounds: []
        };
    }

    componentDidMount() {
        this.fetchCampgrounds();
    }

    fetchCampgrounds() {
        const url = 'http://camp-wisconsin.com/api/campgrounds';
        axios.get(url)
        .then(response => {
            this.setState({
                campgrounds: response.data,
                isLoading: false
            });
        })
        .catch(error => {
            console.log(error);
        });
    }

    render() {
        if (this.state.isLoading) {
            return (
                <View style={{ flex: 1, paddingTop: 20, marginTop: 70 }}>
                    <ActivityIndicator />
                </View>
            );
        }

        return (
            <FlatList
                data={this.state.campgrounds}
                renderItem={
                    ({ item }) => 
                        <ListItem 
                            title={item.facilityName} 
                            key={item.id} 
                            onPress={() => this.props.navigation.navigate('Campground', {
                                campground: item,
                                campgroundId: item.id,
                                campgroundName: item.facilityName,
                                campgroundDescription: item.description,
                                campgroundAddress: item.address,
                                campgroundCity: item.city,
                                campgroundState: item.state,
                                campgroundZip: item.zip,
                                campgroundAmenities: item.amenities
                            })} 
                        />}           
                keyExtractor={item => item.facilityID}
            />
        );
    }
}

export default CampgroundList;
