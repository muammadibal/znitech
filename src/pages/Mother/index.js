import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Header } from '../../components'
import { moderateScale } from 'react-native-size-matters'
import { gapSize, heightSize, subtitleStyle, titleStyle } from '../../utils/constants'

const Mother = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />

      <View style={{
        width: moderateScale(100),
        alignSelf: 'center',
        top: heightSize * .3,
        alignItems: 'center'
      }}>
        <Text style={titleStyle}>DarkMode :</Text>
        <TouchableOpacity onPress={() => { }}>
          <Text style={[subtitleStyle, { color: 'blue', marginVertical: gapSize / 2 }]}>Auto</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Text style={[subtitleStyle, { color: 'blue', marginVertical: gapSize / 2 }]}>Dark</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <Text style={[subtitleStyle, { color: 'blue', marginVertical: gapSize / 2 }]}>Light</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

export default Mother

const styles = StyleSheet.create({})