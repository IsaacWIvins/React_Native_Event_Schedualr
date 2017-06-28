import React from 'react';
import { StyleSheet, Text, View, Image, SectionList } from 'react-native';
import ToggleButton from '../components/toggleButton';

const thusdaySections = [
  {
    key: '8:30 AM',
    data: [{ key: 0, title: "Breakfast and Relaxation" }]
  },
  {
    key: '9:30 AM',
    data: [{ key: 0, title: "Start saving the world presentation", speaker: "Batman" }]
  },
  {
    key: '11:30 AM',
    data: [{ key: 0, title: "Break for lunch." }]
  },
  {
    key: '1:00 PM',
    data: [{ key: 0, title: "Intro into superhero team structure" }]
  },
  {
    key: '2:30 PM',
    data: [{ key: 0, title: "Marvel vs DC seminare" }]
  },
];

const fridaySections = [
  {
    key: '7:30 AM',
    data: [{ key: 0, title: "Relaxation and Breakfast" }]
  },
  {
    key: '8:30 AM',
    data: [{
      key: 0, title: "How to save the world", speaker: "Superman"
    }]
  },
  {
    key: '10:30 AM',
    data: [{ key: 0, title: "Early lunch to get ready for the day" }]
  },
  {
    key: '11:30 AM',
    data: [{ key: 0, title: "Current Villans locator course" }]
  },
  {
    key: '12:30 PM',
    data: [{ key: 0, title: "Roam the streets for the weekend" }]
  },
];

export default class Schedule extends React.Component {

  state = {
    selectedDay: 'THURSDAY',
  };

  handlePressedItem = (item) => {
    this.setState({
      selectedDay: item
    })
  };

  renderItems = ({item}) => {
    return (
      <View style={styles.row}>
        <Text style={styles.rowSpeaker}>{item.speaker}</Text>
        <Text style={styles.rowTitle}>{item.title}</Text>
      </View>
    )
  };

  renderSectionHeader = ({ section }) => {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{section.key}</Text>
      </View>
    )
  };

  render() {

    const { selectedDay } = this.state;

    return (
      <View style={styles.container}>
        <Image style={styles.images} source={require("../assets/icons/avengers.png")}>
          <Image style={styles.logo} source={require("../assets/icons/app.png")} />
          <Text style={styles.title}> Avengers Squad </Text>
          <ToggleButton
            items={['THURSDAY', 'FRIDAY']}
            value={selectedDay}
            onPressItem={this.handlePressedItem}
          />
        </Image>
        <SectionList
          style={styles.list}
          sections={selectedDay === 'THURSDAY' ? thusdaySections : fridaySections}
          renderItem={this.renderItems}
          renderSectionHeader={this.renderSectionHeader}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  images: {
    paddingVertical: 30,
    height: null,
    width: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  list: {
    flex: 1,
  },
  sectionHeader: {
    backgroundColor: 'rgb(91, 113, 124)',
    padding: 20,
  },
  sectionHeaderText: {
    fontSize: 13,
    color: 'white',
  },
  row: {
    backgroundColor: 'whitesmoke',
    padding: 20,
  },
  rowTitle: {
    fontSize: 13,
    fontWeight: '500',
  },
  rowSpeaker: {
    fontSize: 23,
    color: 'rgb(133, 165, 214)',
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 29,
    marginBottom: 13
  }
});
