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

window.Toast = null;
window.Navigation = null;
window.NavigationBar = null;
window.width = Dimensions.get('window').width;
window.height = Dimensions.get('window').height;
window.navigationBarHeight = 45;