import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {gapSize} from '../../utils/constants';

const CardMood = ({data}) => {
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
        }}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <Text>Icon</Text>
          <Text>Mood</Text>
        </View>
        <Text>{`See History >`}</Text>
      </View>
      <Text>How are you feeling?</Text>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {data?.map((item, index) => {
          return (
            <TouchableOpacity
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
              <Text>{item.type}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CardMood;

const styles = StyleSheet.create({});
