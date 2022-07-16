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
import Octicons from 'react-native-vector-icons/Octicons'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { moderateScale } from 'react-native-size-matters';

const CardHistory = () => {
  return (
    <View
      style={{
        backgroundColor: '#ffd6ed',
        marginHorizontal: gapSize,
        paddingVertical: gapSize,
        borderRadius: gapSize,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: gapSize,
          marginBottom: gapSize / 2
        }}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <MaterialCommunityIcons name="pin" size={moderateScale(20)} style={{ marginRight: gapSize / 2 }} />
          <Text style={titleStyle}>UPDATE</Text>
        </View>
        <TouchableOpacity onPress={() => { }} style={{ alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
          <Text style={[titleStyle, { color: '#ba257c', fontSize: subtitleStyle.fontSize }]}>
            See History
          </Text>
          <MaterialCommunityIcons name="chevron-right" size={moderateScale(20)} color="#ba257c" style={{ alignSelf: 'center' }} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => { }} style={{
        backgroundColor: 'white',
        padding: gapSize,
        margin: gapSize,
        borderRadius: gapSize / 2,
        flexDirection: 'row', marginTop: gapSize / 2,
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        height: moderateScale(80)
      }}>
        <Text style={[subtitleStyle, { width: '80%' }]}>Add important notes here...</Text>
        <Octicons name="log" size={moderateScale(35)} color="#ba257c" style={{
          transform: [
            { rotate: '180deg' }
          ],
          alignSelf:'center'
        }} />
      </TouchableOpacity>
    </View>
  );
};

export default CardHistory;

const styles = StyleSheet.create({});
