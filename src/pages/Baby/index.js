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

import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { LineChart } from 'react-native-chart-kit';
import { IcSun } from '../../assets';
import { CardAppointment, CardHistory, CardMood, CardWeight, Gap, Header } from '../../components';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { gapSize, widthSize } from '../../utils/constants';

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

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{ backgroundColor: 'black' }}
    style={{ backgroundColor: 'white' }}
    renderLabel={({ route, focused, color }) => (
      <Text style={{ color: focused ? 'black' : 'grey', margin: 8 }}>
        {route.title}
      </Text>
    )}
  />
);

const Progress = () => <View style={{ flex: 1, backgroundColor: '#eaeaea' }} />;

const Articles = () => <View style={{ flex: 1, backgroundColor: '#eaeaea' }} />;

const Tools = () => (
  <View style={{ flex: 1, backgroundColor: 'white' }}>
    <ScrollView>
      <Gap height={gapSize} />
      <CardWeight />
      <Gap height={gapSize} />
      <CardMood data={mood} />
      <Gap height={gapSize} />
      <CardHistory />
      <Gap height={gapSize} />
      <CardAppointment />
      <Gap height={gapSize} />
    </ScrollView>
  </View>
);

const renderScene = SceneMap({
  first: Progress,
  second: Articles,
  third: Tools,
});

const Baby = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Progress' },
    { key: 'second', title: 'Articles' },
    { key: 'third', title: 'Tools' },
  ]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Header />

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: widthSize }}
      />
    </SafeAreaView>
  );
};

export default Baby;

const styles = StyleSheet.create({});
