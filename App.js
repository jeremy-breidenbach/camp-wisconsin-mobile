import React, { Component } from 'react';
import { Icon } from 'react-native-elements';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import CampgroundList from './src/components/CampgroundList';
import CampgroundDetails from './src/components/CampgroundDetails';
import CampsiteList from './src/components/CampsiteList';
import CampsiteDetails from './src/components/CampsiteDetails';
import AboutPage from './src/components/AboutPage';

const CampgroundStack = createStackNavigator(
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

const AboutStack = createStackNavigator(
    {
        About: AboutPage
    },
    {
        initialRouteName: 'About',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#228B22'
            },
            headerTintColor: '#fff'
        }
    }
);

const TabBar = createBottomTabNavigator(
    {
        Campgrounds: CampgroundStack,
        About: AboutStack,
    },
    {
        navigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Campgrounds') {
                    iconName = 'tent';
                } else if (routeName === 'About') {
                    iconName = 'information-outline';
                }
                return <Icon name={iconName} type='material-community' color={tintColor} />;
            }
        }),
        tabBarOptions: {
            activeTintColor: '#228B22',
            inactiveTintColor: 'gray'
        }
    }
);


export default class App extends Component {
  render() {
    return (
        <TabBar />
    );
  }
}
