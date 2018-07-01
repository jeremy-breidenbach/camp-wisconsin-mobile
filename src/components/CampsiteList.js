import React, { Component } from 'react';
import { View, ActivityIndicator, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import axios from 'axios';

class CampsiteList extends Component {
    static navigationOptions = {
        title: 'Campsite List'
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            campsites: []
        };
    }

    componentDidMount() {
        this.fetchCampsites();
    }

    fetchCampsites() {
        const url = 'http://camp-wisconsin.com/api/campsites/';
        axios.get(url + this.props.navigation.getParam('campgroundId'))
            .then(response => {
                this.setState({
                    isLoading: false,
                    campsites: response.data
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
                data={this.state.campsites}
                renderItem={
                    ({ item }) =>
                        <ListItem
                            title={`Site ${item.site}`}
                            onPress={() => this.props.navigation.navigate('Campsite', {
                                campsiteLoop: item.loop
                            })}
                        />
                    }
                keyExtractor={item => `${item.siteID}`}
            />
        );
    }
}

export default CampsiteList;
