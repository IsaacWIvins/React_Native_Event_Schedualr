import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import ToggleButton from '../components/toggleButton';

export default class Schedule extends React.Component {

  state = {
    selectedDay: 'THURSDAY',
  };

  handlePressedItem = (item) => {
    this.setState({
      selectedDay: item
    })
  }

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
    height: 180,
    width: null,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    width: 60,
    height: 60,
    marginBottom: 10
  },
  title: {
    backgroundColor: 'transparent',
    color: 'white',
    fontSize: 24
  }
});
