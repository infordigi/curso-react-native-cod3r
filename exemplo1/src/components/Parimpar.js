import React from 'react'
import { View, Text } from 'react-native'

import Pathern from '../style/Pathern'
import If from './If'

function parOuImpar(num) {
    const res = num % 2 == 0 ? 'Par' : 'Impar'
    return <Text style={Pathern.ex}>{ res }</Text>
}

export default props => 
    <View>
        {parOuImpar(props.numero)}
        {/* {
            props.numero % 2 == 0
            ? <Text style={Pathern.ex}>Par</Text>
            : <Text style={Pathern.ex}>Impar</Text>
        } */}
    </View>