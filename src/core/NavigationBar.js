/**
 * 导航栏
 * --------------------------------------------------
 * 需要具备的功能：
 * 1.可设置导航栏的显示或隐藏。
 * 2.可自定义左中右区域的组件内容。
 */
import React, { Component, PropTypes } from 'react';
import {
    StyleSheet,
    View,
    ScrollView,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    TouchableHighlight,
    Navigator,
    Animated,
    Linking,
    Dimensions,
} from 'react-native';
import * as CommonUtil from '../utils/CommonUtil';

export default class NavigationBar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            leftButton: null,
            title: null,
            rightButton: null,
            isShowLeftButton: true,
        };
        window.NavigationBar = this;
    }

    goBack() {
        CommonUtil.BackAndroidUtil.defaultBackFn();
    }

    goHome() {
        window.Navigation.popToTop();
    }

    switchScene(route) {
        if (!route.componentInstance)
            return false;
        console.log(route.componentInstance.isShowLeftButton);
        this.setState({
            title: route.componentInstance.title,
            isShowLeftButton: route.componentInstance.isShowLeftButton === undefined ? true : route.componentInstance.isShowLeftButton,
            rightButton: route.componentInstance.rightButton,
        });
    }

    render() {
        if (!this.state.title)
            return null;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    {
                        !this.state.isShowLeftButton ? null :
                            <TouchableHighlight style={styles.btn}
                                underlayColor="#777"
                                activeOpacity={1}
                                onPress={this.goBack.bind(this)}>
                                <Text style={styles.itemText}>返回</Text>
                            </TouchableHighlight>
                    }
                </View>
                <View style={[styles.item, styles.itemCenter]}>
                    <TouchableHighlight style={styles.btn}
                        underlayColor="#777"
                        activeOpacity={1}
                        onPress={this.goHome.bind(this)}>
                        <Text style={styles.itemText}>{this.state.title}</Text>
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
        height: window.navigationBarHeight,
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