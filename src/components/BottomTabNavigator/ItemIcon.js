import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import Ionicons from 'react-native-vector-icons/Ionicons'
import { moderateScale } from 'react-native-size-matters'
import { gapSize } from '../../utils/constants'

const ItemIcon = ({
    accessibilityRole,
    accessibilityState,
    accessibilityLabel,
    testID,
    onPress,
    onLongPress,
    isFocused,
    label
}) => {
    const Icon = () => {
        if (label === 'Baby') {
            return <FontAwesome5 name="baby" size={moderateScale(25)} color={isFocused ? 'red' : 'grey'} />
        } else if (label === 'Doctor') {
            return <FontAwesome5 name="stethoscope" size={moderateScale(20)} color={isFocused ? 'red' : 'grey'} />
        } else if (label === 'Mother') {
            return <Ionicons name="chatbubbles-outline" size={moderateScale(25)} color={isFocused ? 'red' : 'grey'} />
        }
    }
    return (
        <TouchableOpacity
            accessibilityRole={accessibilityRole}
            accessibilityState={accessibilityState}
            accessibilityLabel={accessibilityLabel}
            testID={testID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}
        >
            <Icon />
            <Text style={{ color: isFocused ? 'red' : 'grey', marginTop: gapSize / 2 }}>
                {label === 'Doctor' ? 'Ask Doctor' : label === 'Baby' ? 'Your Baby' : 'Ask Mother'}
            </Text>
        </TouchableOpacity>
    )
}

export default ItemIcon

const styles = StyleSheet.create({})