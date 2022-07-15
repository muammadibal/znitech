import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Doctor, Baby, Mother } from '../pages';
import { BottomTabNavigator } from '../components'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const MainApp = () => {
    return <Tab.Navigator screenOptions={{
        headerShown: false
    }} tabBar={props => <BottomTabNavigator {...props} />}
        initialRouteName="Baby">
        <Tab.Screen name="Doctor" component={Doctor} />
        <Tab.Screen name="Baby" component={Baby} />
        <Tab.Screen name="Mother" component={Mother} />
    </Tab.Navigator>
}

const Routes = () => {
    return <Stack.Navigator screenOptions={{
        headerShown: false
    }}>
        <Stack.Screen name="MainApp" component={MainApp} />
    </Stack.Navigator>
}

export default Routes