import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import EventDetails from './screens/eventDetails';
import Schedule from './screens/Schedule';
import Feedback from './screens/feedback';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Feedback />
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
