import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Navigator,
    Text,
    View,
} from 'react-native';

import CustomPrototypes from './CustomPrototypes';
import NavigationBar from './NavigationBar';
import Config from './Config';
import Toast from '../components/Toast';
import Index from '../pages/Index';
import * as CommonUtil from '../utils/CommonUtil';

export default class Navigation extends Component {

    constructor(props) {
        super(props);
        this.initialRoute = {
            component: Index,
        };
    }

    componentDidMount() {
        CommonUtil.BackAndroidUtil.bind(window.navigator);
    }

    componentWillUnmount () {
        CommonUtil.BackAndroidUtil.unbind();
    }

    configureScene(route, routeStack) {
        return Navigator.SceneConfigs.PushFromRight;
    }

    renderScene(route, navigator) {
        let Component = route.component;
        let navigationBarProps = {
            title: Component.title,
            navigator,
        };
        return (
            <View style={styles.componentContainer}>
                {route.hideNavigationBar ? null : <NavigationBar {...navigationBarProps} />}
                <Component {...route.params} navigator={navigator} />
            </View>
        );
    }

    render() {
        return (
            <View style={styles.container}>
                <Navigator
                    ref={navigator => window.navigator = navigator}
                    configureScene={this.configureScene}
                    initialRoute={this.initialRoute}
                    renderScene={this.renderScene}
                    sceneStyle={styles.sceneStyle}
                    />
                <Toast ref={(ref) => window.Toast = ref} />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    sceneStyle: {
        flex: 1,
        backgroundColor: '#fafafa',
    },
    componentContainer: {
        flex: 1,
    },
});