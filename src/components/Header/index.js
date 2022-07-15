import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {gapSize} from '../../utils/constants';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import {IcSun} from '../../assets';

const Header = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        height: moderateScale(70),
        paddingHorizontal: gapSize,
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <View style={{flexDirection: 'row'}}>
        <FontAwesome
          name="user-o"
          size={moderateScale(20)}
          style={{marginRight: gapSize / 2}}
        />
        <FontAwesome name="heart-o" size={moderateScale(20)} />
      </View>
      <View>
        <IcSun size={moderateScale(20)} color="yellow" />
        <Text>
          Anya <Entypo name="chevron-down" size={moderateScale(20)} />
        </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
