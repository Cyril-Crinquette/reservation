import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const CustomButton = (props) => {
    const { title, type } = props
    return (
    <TouchableOpacity
        style={{
            backgroundColor: colors[type].backgroundColor,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 5,
            width: 70,
            height: 30
        }}
    >
        <Text
            style={{
                fontWeight: '500',
                textTransform: 'capitalize',
                color: colors[type].color,
            }}
        >
            {title}
        </Text>
    </TouchableOpacity>
    )
}

export default CustomButton