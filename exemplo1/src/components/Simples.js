import React from 'react'
import { Text } from 'react-native'

import Pathern from '../style/Pathern'

// export default function(props) {
//     return <Text>{ props.texto }</Text>
// }

export default props => 
    <Text style={Pathern.ex}>{ props.texto }</Text>