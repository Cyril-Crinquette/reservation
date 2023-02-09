import { View, Text, Image } from 'react-native'
import React from 'react'

// static propTypes = () => {
//     return (
//         didacticiel: React.PropTypes.array
//     )
// }

const WelcomeCarousel = () => {
  return (
    <View style={{flex: 1}}>
        {this.props.didacticiels.map((didacticiel, k) =>{
            return (
                    <Image style={{width:200, height:200}} key={k} source={{uri: didacticiel}} /> 
                )
        })}
    </View>
  )
}

export default WelcomeCarousel