import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import EventDetails from './screens/eventDetails';
import Schedule from './screens/Schedule';
import Feedback from './screens/feedback';

import { StackNavigator, TabNavigator } from 'react-navigation';

const defaultNav = {
  headerStyle: {
    backgroundColor: 'rgb(88, 21, 143)'
  },
  headerTintColor: 'rgb(197, 230, 217)'
}

const ScheduleStack = StackNavigator ({
  ScheduleList: { screen: Schedule },
  DetailsList: { screen: EventDetails }
}, {
  headerMode: 'screen',
  navigationOptions: defaultNav,
});

const FeedbackStack = StackNavigator ({
  FeedbackForm : { screen: Feedback },
}, {
  navigationOptions: defaultNav,
});

const AppNavigator = TabNavigator ({
  Schedule: { screen: ScheduleStack },
  Feedback: { screen: FeedbackStack },
})

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppNavigator />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
