import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'

const mood = [
  {
    icon: '😃',
    type: 'Joyful'
  },
  {
    icon: '🙂',
    type: 'Happy'
  },
  {
    icon: '😐',
    type: 'Neutral'
  },
  {
    icon: '😩',
    type: 'Stress'
  },
  {
    icon: '😪',
    type: 'Sad'
  },
  {
    icon: '🤮',
    type: 'Sick'
  },
]
const Baby = () => {
  return (
    <SafeAreaView>
      <View style={{ flexDirection: 'row', height: 70, paddingHorizontal: 16, justifyContent: 'space-between', alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <FontAwesome name="user-o" size={20} style={{ marginRight: 16 / 2 }} />
          <FontAwesome name="heart-o" size={20} />
        </View>
        <View>
          <Text>Anya</Text>
        </View>
      </View>
      <View style={{
        backgroundColor: '#cornsilk',
        marginHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16
      }}>
        <View style={{ flexDirection:'row', justifyContent: 'space-between', alignItems:'center' }}>
          <View style={{ flexDirection:'row', justifyContent: 'space-between' }}>
            <Text>Icon</Text>
            <Text>Mood</Text>
          </View>
            <Text>{`See History >`}</Text>
        </View>
        <Text>How are you feeling?</Text>

        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}>
          {mood.map((item, index) => {
            return <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              marginLeft: index === 0 ? 16 : 0,
              marginRight: 16

            }}>
              <View style={{
                backgroundColor: 'ffc300',
                height: 50,
                aspectRatio: 1,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text>{item.icon}</Text>
              </View>
              <Text>{item.type}</Text>
            </View>
          })}
        </ScrollView>
      </View>
      <TouchableOpacity onPress={() => Alert.alert('test', 'message')}><Text>PRess</Text></TouchableOpacity>
    </SafeAreaView>
  )
}

export default Baby

const styles = StyleSheet.create({})