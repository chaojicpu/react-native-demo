import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from 'react-native';

export default class BaseComponent extends Component {

    constructor(props, title) {
        super(props);
        this.title = title;
    }

    componentWillMount() {
        // console.log('super.componentWillMount');
    }

    componentDidMount() {
        // console.log('super.componentDidMount');
    }

    render() {
        return (
            <View>
                <Text>导航条</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({});