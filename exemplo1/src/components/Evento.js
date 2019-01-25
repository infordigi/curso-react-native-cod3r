import React, { Component } from 'react'
import { View, Text, TextInput } from 'react-native'
import Pathern from '../style/Pathern'

export default class Evento extends Component {

    state = {
        text: ''
    }

    alterarTexto = texto => {
        this.setState({ texto })
    }

    render() {
        return (
            <View>
                <Text style={Pathern.fonte40}>{this.state.texto}</Text>
                <TextInput 
                    value={this.state.texto}
                    style={Pathern.input}
                    onChangeText={this.alterarTexto}
                />    
            </View>
        )
    }
}