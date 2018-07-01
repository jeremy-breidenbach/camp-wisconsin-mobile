import React, { Component } from 'react';
import { createStackNavigator } from 'react-navigation';
import CampgroundList from './src/components/CampgroundList';
import CampgroundDetails from './src/components/CampgroundDetails';
import CampsiteList from './src/components/CampsiteList';
import CampsiteDetails from './src/components/CampsiteDetails';

const RootStack = createStackNavigator(
    {
        Home: CampgroundList,
        Campground: CampgroundDetails,
        Campsites: CampsiteList,
        Campsite: CampsiteDetails
    },
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#228B22'
            }, 
            headerTintColor: '#fff'
        }
    }
);


export default class App extends Component {
  render() {
    return (
        <RootStack />
    );
  }
}
