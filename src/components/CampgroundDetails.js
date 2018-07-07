import React, { Component } from 'react';
import { ScrollView, View, StyleSheet } from 'react-native';
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
