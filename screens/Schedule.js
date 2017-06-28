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
  }
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
  }
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
      <View>
        <Text>{item.title}</Text>
      </View>
    )
  };

  renderSectionHeader = ({ section }) => {
    return (
      <View>
        <Text>{section.title}</Text>
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
          sections={thusdaySections}
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
