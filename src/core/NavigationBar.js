import React, { Component, PropTypes } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableHighlight,
} from 'react-native';
import * as CommonUtil from '../utils/CommonUtil';

export default class NavigationBar extends Component {

    static propTypes = {
        title: PropTypes.string,
    };

    constructor(props) {
        super(props);
    }

    toBack() {
        CommonUtil.BackAndroidUtil.defaultBackFn();
    }

    toIndex() {
        window.navigator.popToTop();
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <TouchableHighlight style={styles.btn}
                        underlayColor="#777"
                        activeOpacity={1}
                        onPress={this.toBack.bind(this)}>
                        <Text style={styles.itemText}>返回</Text>
                    </TouchableHighlight>
                </View>
                <View style={[styles.item, styles.itemCenter]}>
                    <TouchableHighlight style={styles.btn}
                        underlayColor="#777"
                        activeOpacity={1}
                        onPress={this.toIndex.bind(this)}>
                        <Text style={styles.itemText}>{this.props.title}</Text>
                    </TouchableHighlight>
                </View>
                <View style={styles.item}></View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 45,
        backgroundColor: 'gray',
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'flex-start',
    },
    itemCenter: {
        justifyContent: 'center',
    },
    itemText: {
        color: '#fff',
    },
    btn: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
    },
});