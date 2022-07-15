import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native';
import ItemIcon from './ItemIcon';

const BottomTabNavigator = ({ state, descriptors, navigation }) => {
    return (
        <View style={{
            flexDirection: 'row',
            backgroundColor: 'red',
            height: 50,
            alignItems: 'center',
            justifyContent: 'center'
        }}>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;

                const isFocused = state.index === index;

                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        // The `merge: true` option makes sure that the params inside the tab screen are preserved
                        navigation.navigate({ name: route.name, merge: true });
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <ItemIcon
                        key={index}
                        accessibilityRole="button"
                        accessibilityState={isFocused ? { selected: true } : {}}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        isFocused={isFocused}
                        label={label}
                    />
                );
            })}
        </View>
    );
}

export default BottomTabNavigator