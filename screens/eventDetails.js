import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class EventDetails extends React.Component {

  static navigationOptions = {
    title: 'Event Details',
  }
  render() {
    let { item } = this.props.navigation.state.params;
    console.log({item})
    return (
      <View style={styles.container}>
        <View style={styles.detailsContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.subtitle}></Text>
          <Text style={styles.description}>{item.description}</Text>
        </View>
        <View style={styles.speakerContainer}>
            <Image style={styles.image} source={require('../assets/icons/rdb.png')} />
          <View>
            <Text style={styles.speakerName}>Robert DJ</Text>
            <Text style={styles.speakerBio}>The Burger King Sherlock</Text>
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
