import React, { Component } from 'react'
import { View, Text, TouchableHighlight } from 'react-native'

import Pathern from '../style/Pathern'

export default class Contador extends Component {

    state = {
        numero: this.props.numeroInicial
    }

    maisUm = () => {
        this.setState({ numero: this.state.numero + 1 })
    }

    limpar() {
        this.setState({ numero: this.props.numeroInicial })
    }

    render() {
        return (
            <View>
                <Text style={Pathern.ex}>{this.state.numero}</Text>
                <TouchableHighlight
                    onPress={this.maisUm}
                    onLongPress={() => this.limpar()}
                >
                    <Text>Incrementar/Zerar</Text>
                </TouchableHighlight>
            </View>
        )
    }
}