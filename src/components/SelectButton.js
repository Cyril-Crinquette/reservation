import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import colors from '../utils/colors'

const data = [
    { key: 'Item 1' },
    { key: 'Item 2' },
    { key: 'Item 3' },
    { key: 'Item 4' },
    { key: 'Item 5' },
    { key: 'Item 6' }
  ]

const SelectButton = (props) => {
    const { title, type } = props
    return (
    <TouchableOpacity
        style={{
            backgroundColor: colors[type].backgroundColor,
            justifyContent:'center',
            alignItems: 'center',
            borderRadius: 5,
            width: 120,
            height: 80
        }}
        onPress={() => handlePress(item)}
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

export default SelectButton