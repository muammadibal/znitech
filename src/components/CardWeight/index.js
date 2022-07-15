import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import {
  gapSize,
  subtitleStyle,
  titleStyle,
  widthSize,
} from '../../utils/constants';
import { LineChart } from 'react-native-chart-kit';
import { moderateScale } from 'react-native-size-matters';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const CardWeight = () => {
  return (
    <View
      style={{
        backgroundColor: '#d6fff3',
        marginHorizontal: gapSize,
        paddingVertical: gapSize,
        borderRadius: gapSize,
      }}>
      <View
        style={{
          padding: gapSize,
          flexDirection: 'row', alignItems: 'center',
          justifyContent: 'space-between'
        }}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <FontAwesome5 name="weight" size={moderateScale(20)} style={{ marginRight: gapSize / 2 }} />
          <Text style={titleStyle}>Weight</Text>
        </View>
        <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={[titleStyle, { color: 'green', fontSize: subtitleStyle.fontSize }]}>
            See History
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={moderateScale(20)} color="green" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>

      {/* chart */}
      <LineChart
        data={{
          labels: ['', 'Fri', 'Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Today'],
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
                Math.random() * 100,
              ],
            },
          ],
        }}
        width={widthSize * .9} // from react-native
        height={moderateScale(220)}
        withHorizontalLabels={false}
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#d6fff3',
          backgroundGradientFrom: '#d6fff3',
          backgroundGradientTo: '#d6fff3',
          decimalPlaces: 2, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(27, 124, 97, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(27, 124, 97, ${opacity})`,
          style: {
            borderRadius: gapSize,
          },
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: 'green',
            fill: 'green',
          },
        }}
        bezier
        style={{
          marginVertical: moderateScale(8),
          borderRadius: gapSize,
          paddingRight: 0,
        }}
      />
      {/* chart */}

      <View style={{ flexDirection: 'row', padding: gapSize }}>
        <Text style={[titleStyle, { fontSize: moderateScale(40) }]}>59</Text>
        <Text style={titleStyle}>kg</Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: gapSize,
          paddingBottom: gapSize,
        }}>
        <Text style={subtitleStyle}>Updated 2h ago</Text>
        <TouchableOpacity
          onPress={() => { }}
          style={{
            width: moderateScale(30),
            aspectRatio: 1,
            borderRadius: moderateScale(20),
            backgroundColor: 'lightgrey',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
          <MaterialCommunityIcons
            name="pencil"
            color="white"
            size={moderateScale(20)}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardWeight;

const styles = StyleSheet.create({});
