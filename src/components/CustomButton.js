import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const CustomButton = (props) => {
    const { title, type } = props
    return (
    <TouchableOpacity
        style={{
            backgroundColor: colors[type].backgroundColor,
            alignItems: 'center',
            justifyContent:'center',
            borderRadius: 5,
            width: 120,
            height: 40
        }}
    >
        <Text
            style={{
                fontWeight: '500',
                color: colors[type].color,
            }}
        >
            {title}
        </Text>
    </TouchableOpacity>
    )
}

export default CustomButton