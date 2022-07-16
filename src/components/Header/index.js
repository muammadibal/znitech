import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { moderateScale } from 'react-native-size-matters';
import { gapSize } from '../../utils/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { IcSun } from '../../assets';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: moderateScale(70),
        paddingHorizontal: gapSize,
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'white'
      }}>
      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity onPress={() => { }}
          style={{ marginRight: gapSize }}>
          <FontAwesome
            name="user-o"
            size={moderateScale(20)}

          />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }}>
          <FontAwesome name="heart-o" size={moderateScale(20)} />
        </TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => { }} style={{ marginRight: gapSize / 2 }}>
          <Ionicons name="sunny" size={moderateScale(20)} color="orange" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => { }} style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Text>
            Anya
          </Text>
          <Entypo name="chevron-down" size={moderateScale(20)} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
