import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { gapSize, subtitleStyle, tertiertitleStyle, titleStyle } from '../../utils/constants';
import Feather from 'react-native-vector-icons/Feather'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale } from 'react-native-size-matters';
const CardAppointment = () => {
  return (
    <View
      style={{
        backgroundColor: '#d6e5ff',
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
          <MaterialCommunityIcons name="calendar-check" size={moderateScale(20)} style={{ marginRight: gapSize / 2 }} />
          <Text style={titleStyle}>APPOINTMENT</Text>
        </View>
        <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={[titleStyle, { color: 'blue', fontSize: subtitleStyle.fontSize }]}>
            See All
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={moderateScale(20)} color="blue" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => { }} style={{ backgroundColor: 'white', padding: gapSize, margin: gapSize, borderRadius: gapSize / 2 }}>
        <Text style={titleStyle}>Fri, 8 Jan ・ 09:00</Text>
        <View style={{ flexDirection: 'row', marginTop: gapSize / 2, justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Text style={[subtitleStyle, { width: '80%' }]}>Antenatal visit with Dr. Lukman Adi Saputra</Text>
          <MaterialCommunityIcons name="chevron-right" size={moderateScale(20)} />
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => { }}>
        <Text style={[tertiertitleStyle, { marginLeft: gapSize, }]}>+ 2 more appointments</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CardAppointment;

const styles = StyleSheet.create({});
