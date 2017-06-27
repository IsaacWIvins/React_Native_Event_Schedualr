import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>Conference Keynote</Text>
          <Text style={styles.subtitle}>Thursday, May 18</Text>
          <Text style={styles.description}>Hear about awesome stuff</Text>
        </View>
        <View style={styles.speakerContainer}>
            <Image style={styles.image} source={require('./assets/icons/rdb.png')} />
          <View>
            <Text style={styles.speakerName}>Lucey Vatne</Text>
            <Text>The best doggo ever</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  detailsContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'grey'
  },
  title: {
    fontSize: 24,
    fontWeight: '500',
    marginBottom: 4
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 12
  },
  description: {
    fontSize: 13,
  },
  speakerContainer: {
    paddingVertical: 30,
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: 'grey',
    marginRight: 10
  },
  speakerName: {
    color: 'purple',
    fontSize: 18,
    fontWeight: '500',
  },
  speakerBio: {
    fontSize: 13
  }
});