import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { gapSize, subtitleStyle, titleStyle } from '../../utils/constants';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale } from 'react-native-size-matters';
const CardMood = ({ data }) => {
  return (
    <View
      style={{
        backgroundColor: '#fff3d6',
        marginHorizontal: gapSize,
        paddingVertical: gapSize,
        borderRadius: gapSize,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: gapSize
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <Feather name="smile" size={moderateScale(20)} style={{ marginRight: gapSize / 2 }} />
          <Text style={titleStyle}>Mood</Text>
        </View>
        <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={[titleStyle, { color: 'orange', fontSize: subtitleStyle.fontSize }]}>
            See History
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={moderateScale(20)} color="orange" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>
      <Text style={[titleStyle, {
        padding: gapSize
      }]}>How are you feeling?</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map((item, index) => {
          return (
            <TouchableOpacity
              key={index}
              onPress={() =>
                Alert.alert('Hello', `You're feeling ${item.type}`, [
                  {
                    text: 'Bye',
                  },
                  {
                    text: 'OK',
                  },
                ])
              }
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                marginLeft: index === 0 ? 16 : 0,
                marginRight: 16,
              }}>
              <View
                style={{
                  backgroundColor: '#f9ce5e',
                  height: 50,
                  aspectRatio: 1,
                  borderRadius: 50,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text>{item.icon}</Text>
              </View>
              <Text style={subtitleStyle}>{item.type}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardMood;

const styles = StyleSheet.create({});
