import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

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
    return (
        <TouchableOpacity
            accessibilityRole={accessibilityRole}
            accessibilityState={accessibilityState}
            accessibilityLabel={accessibilityLabel}
            testID={testID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
        >
            <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
                {label}
            </Text>
        </TouchableOpacity>
    )
}

export default ItemIcon

const styles = StyleSheet.create({})