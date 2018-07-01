import React, { Component } from 'react';
import { View } from 'react-native';
import { Text, Button } from 'react-native-elements';

class CampgroundDetails extends Component {
    static navigationOptions = ({ navigation }) => {
        return {
            title: navigation.getParam('campgroundName', 'Campground Details')
        };
    }
    
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    render() {
        const { navigation } = this.props;
        const campgroundId = navigation.getParam('campgroundId');

        return (
            <View>
                <Text h2>{navigation.getParam('campgroundName', '')}</Text>
                <Text>{navigation.getParam('campgroundDescription', '')}</Text>
                <View>
                    <Text>{navigation.getParam('campgroundAddress', '')}</Text>
                    <Text>{navigation.getParam('campgroundCity', '')}</Text>
                    <Text>{navigation.getParam('campgroundState', '')}</Text>
                    <Text>{navigation.getParam('campgroundZip', '')}</Text>
                </View>
                <View>
                    <Button 
                        title='View Campsites' 
                        onPress={() => navigation.navigate('Campsites', {
                            campgroundId
                        })}
                    />
                </View>
            </View>
        );
    }
}

export default CampgroundDetails;
