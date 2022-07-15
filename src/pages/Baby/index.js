import { SafeAreaView, StyleSheet, Text, View, TouchableOpacity, Alert, ScrollView, Dimensions } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { LineChart } from 'react-native-chart-kit';

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
        backgroundColor: '#d6fff3',
        marginHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16
      }}>
        <LineChart
          data={{
            labels: ["","Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Today"],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100
                ]
              }
            ]
          }}
          width={Dimensions.get("window").width} // from react-native
          height={220}
          withHorizontalLabels={false}
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: "#d6fff3",
            backgroundGradientFrom: "#d6fff3",
            backgroundGradientTo: "#d6fff3",
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(27, 124, 97, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(27, 124, 97, ${opacity})`,
            style: {
              borderRadius: 16
            },
            propsForDots: {
              r: "6",
              strokeWidth: "2",
              stroke: "green",
              fill: 'green'
            }
          }}
          bezier
          style={{
            marginVertical: 8,
            borderRadius: 16,
            paddingRight:0
          }}
        />

        <View style={{ flexDirection: 'row' }}>
          <Text style={{ fontSize: 40 }}>59</Text>
          <Text>kg</Text>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', }}>
          <Text>Updated 2h ago</Text>
          <TouchableOpacity>
            <Text>icon</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{
        backgroundColor: '#fff3d6',
        marginHorizontal: 16,
        paddingVertical: 16,
        borderRadius: 16
      }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text>Icon</Text>
            <Text>Mood</Text>
          </View>
          <Text>{`See History >`}</Text>
        </View>
        <Text>How are you feeling?</Text>

        <ScrollView horizontal
          showsHorizontalScrollIndicator={false}>
          {mood.map((item, index) => {
            return <TouchableOpacity onPress={() => Alert.alert(
              'Hello',
              `You're feeling ${item.type}`,
              [
                {
                  text: 'Bye'
                },
                {
                  text: 'OK'
                },
              ])} style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: index === 0 ? 16 : 0,
                marginRight: 16

              }}>
              <View style={{
                backgroundColor: '#f9ce5e',
                height: 50,
                aspectRatio: 1,
                borderRadius: 50,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <Text>{item.icon}</Text>
              </View>
              <Text>{item.type}</Text>
            </TouchableOpacity>
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default Baby

const styles = StyleSheet.create({})