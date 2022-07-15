import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Dimensions,
} from 'react-native';
import React from 'react';

import {scale, verticalScale, moderateScale} from 'react-native-size-matters';
import {LineChart} from 'react-native-chart-kit';
import {IcSun} from '../../assets';
import {CardMood, CardWeight, Header} from '../../components';
import {TabView, SceneMap} from 'react-native-tab-view';
import {widthSize} from '../../utils/constants';

const mood = [
  {
    icon: '😃',
    type: 'Joyful',
  },
  {
    icon: '🙂',
    type: 'Happy',
  },
  {
    icon: '😐',
    type: 'Neutral',
  },
  {
    icon: '😩',
    type: 'Stress',
  },
  {
    icon: '😪',
    type: 'Sad',
  },
  {
    icon: '🤮',
    type: 'Sick',
  },
];

const Progress = () => <View style={{flex: 1, backgroundColor: '#eaeaea'}} />;

const Articles = () => <View style={{flex: 1, backgroundColor: '#eaeaea'}} />;

const Tools = () => (
  <View style={{flex: 1}}>
    <ScrollView>
      <CardWeight />

      <CardMood data={mood} />
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  first: Progress,
  second: Articles,
  second: Tools,
});

const Baby = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'First'},
    {key: 'second', title: 'Second'},
  ]);

  return (
    <SafeAreaView>
      <Header />
      <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: widthSize}}
      />
    </SafeAreaView>
  );
};

export default Baby;

const styles = StyleSheet.create({});
