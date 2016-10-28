import React, {Component} from 'react';
import {
    AppRegistry,
} from 'react-native';

import Application from './src/core/Application';

class demo extends Component {

    render() {
        return <Application/>;
    }

}

AppRegistry.registerComponent('demo', () => demo);