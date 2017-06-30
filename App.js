import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import EventDetails from './screens/eventDetails';
import Schedule from './screens/Schedule';
import Feedback from './screens/feedback';
import AnimatedScreen from './screens/animatedScreen';
import { Ionicons } from '@expo/vector-icons';

import { StackNavigator, TabNavigator, TabBarBottom } from 'react-navigation';

const createTabBarIconWrapper = (
  TabBarIconComponent,
  defaultProps,
) => props => <TabBarIconComponent {...defaultProps} color={props.tintColor} />;

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
  navigationOptions: {
    ...defaultNav,
    tabBarIcon: createTabBarIconWrapper(Ionicons, {
      name: 'ios-calendar-outline',
      size: 30,
    }),
  }
});

const FeedbackStack = StackNavigator ({
  FeedbackForm : { screen: Feedback },
  AnimatedHeader : { screen: AnimatedScreen }
}, {
  navigationOptions: {
    ...defaultNav,
    tabBarIcon: createTabBarIconWrapper(Ionicons, {
      name: 'ios-contacts-outline',
      size: 30,
    }),
  }
});

const AppNavigator = TabNavigator ({
  Schedule: { screen: ScheduleStack },
  Feedback: { screen: FeedbackStack },
}, {
  tabBarPosition: 'bottom',
  swipeEnabled: false,
  tabBarComponenet: TabBarBottom,
  tabBarOptions: {
    labelStyle: {
      fontSize: 14,
    },
    style: {
      backgroundColor: 'rgb(214, 112, 228)',
      height: 55,
    },
    inactiveTintColor: 'rgb(242, 65, 115)',
    activeTintColot: 'rgb(61, 73, 231)',
  }
});

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
