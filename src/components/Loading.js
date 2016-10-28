import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Linking,
    WebView,
    Dimensions,
    Animated,
    ActivityIndicator,
    Modal,
} from 'react-native';

export default class Loading extends Component {

    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };
        window.Loading = this;
    }

    show() {
        this.setState({ visible: true, });
    }

    hide() {
        this.setState({ visible: false, });
    }

    render() {
        return !this.state.visible ? null : (
            <View style={styles.modal}>
                <ActivityIndicator />
            </View>
        );
    }

}

const styles = StyleSheet.create({
    modal: {
        flex: 1,
        backgroundColor: 'rgba(255,255,255,0.8)',
        position: 'absolute',
        left: 0,
        top: window.navigationBarHeight,
        width: window.width,
        height: window.height - window.navigationBarHeight,
        alignItems: 'center',
        justifyContent: 'center',
    },
});