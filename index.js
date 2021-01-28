/**
 * @format
 */

import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import React from 'react';
import AppContainer from './src/navigations/appNavigation';
import configureStore from "./src/store/configureStore";
import { Provider } from "react-redux";

const store = configureStore();


const App = () => {
    return (
        <Provider store={store}>
            <AppContainer/>
        </Provider>
    );
};


AppRegistry.registerComponent(appName, () => App);
