import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'

import Simples from './components/Simples'
import Parimpar from './components/Parimpar'

export default class App extends Component {
    render() {
        return ( 
            <View style={ styles.container }>
                <Simples texto="Flexivel!!!"/>
                <Parimpar numero={11}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})