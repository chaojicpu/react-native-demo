import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import Navigation from './src/core/Navigation';

class demo extends Component {

    render() {
        return <Navigation/>;
    }

}

AppRegistry.registerComponent('demo', () => demo);