import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
import constants  from 'expo-constants';

export default StyleSheet.create({

    view:{
        backgroundColor: '#ccc',
        marginTop: constants.statusBarHeight,
    },

    button:{
        backgroundColor: '#4c92f5',
        width: '60%',
        height: '10%',
        borderRadius: 20,
        alignSelf: 'center',
        marginTop: '2%',
        marginBottom: '2%',
        justifyContent: 'center',
    },

    text:{
        color: 'white',
        textAlign: 'center',
        textTransform: 'uppercase',
    },

    map:{
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
})