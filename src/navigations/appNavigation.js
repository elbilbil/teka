import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import LoginScreen from '../screens/loginScreen'
import HomeScreen from '../screens/homeScreen'
import ForgetScreen from '../screens/forgetScreen'

import {
    StyleSheet, Text,
    TouchableOpacity,
} from 'react-native';

import React from 'react';

const AppStackNavigator = createStackNavigator(
    {
        Login: {
            screen: LoginScreen,
            navigationOptions: () => ({
                headerShown: false
            }),
        },
        Home: {
            screen: HomeScreen,
            navigationOptions: () => ({
                headerShown: false
            })
        },
        Forget: {
            screen: ForgetScreen
        },
    },
    {
        initialRouteName: 'Login',
    });

const AppContainer = createAppContainer(AppStackNavigator);


export default AppContainer;
