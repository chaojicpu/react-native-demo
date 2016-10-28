import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
} from 'react-native';

import Index from '../pages/Index';

export default class RootNavigation extends Component {

    constructor(props) {
        super(props);
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {
        if (!window.Navigation)
            window.Navigation = navigator;
        let Component = route.component;
        return <Component {...route.params} navigator={navigator} />;
    }

    onWillFocus(route) {
        NavigationBar.switchScene(route);
    }

    render() {
        return (
            <Navigator
                ref={ref => window.Navigation = ref}
                configureScene={this.configureScene}
                initialRoute={{ component: Index }}
                renderScene={this.renderScene}
                sceneStyle={styles.sceneStyle}
                onWillFocus={this.onWillFocus}
                />
        );
    }

}

const styles = StyleSheet.create({
    sceneStyle: {
        flex: 1,
    },
});