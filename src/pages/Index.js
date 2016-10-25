import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    Navigator,
    Animated,
    Linking,
    Dimensions,
} from 'react-native';
import BaseComponent from '../core/BaseComponent';
import Config from '../core/Config';
import ListViewPage from './ListViewPage';

export default class Index extends BaseComponent {

    static title = '首页';

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
            
                <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                        Toast.show('提示信息测试');
                    } }>
                    <Text>Toast</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.item}
                    onPress={() => {
                        this.props.navigator.push({
                            component: ListViewPage,
                        });
                    } }>
                    <Text>ListView</Text>
                </TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // marginTop: 200,
    },
    item: {
        margin: 10,
        padding: 10,
        backgroundColor: '#ccc',
    },
});