import React from 'react';
import { Constants } from 'expo';
import { Slider, TextInput, StatusBar, ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import GrowingTextInput from '../components/growingInput';

export default class Feedback extends React.Component {

  static navigationOptions = {
    title: 'Feedback',
  }

  state = {
    value: 0,
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <ScrollView
          keyboardDismissMode="on-drag"
          contentContainerStyle={{paddingTop: 30}}
          style={{flex: 1, backgroundColor: 'whitesmoke', paddingHorizontal: 10}}>

          <Text style={styles.formTitle}>Contact Info: </Text>

          <View style={[styles.row, styles.firstRow]}>
            <TextInput
              placeholder="Full Name"
              autoCapitalize="words"
              autoCorrect={false}
              returnKeyType="next"
              style={styles.textInput}
              onSubmitEditing={() => {this._emailInput.focus()}}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              ref={view => {this._emailInput = view; }}
              returnKeyType="next"
              keyboardType="email-address"
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onSubmitEditing={() => {this._phoneNumber.focus()}}
            />
          </View>

          <View style={styles.row}>
            <TextInput
              ref={view => {this._phoneNumber = view; }}
              returnKeyType="next"
              placeholder="Phone Number"
              keyboardType="phone-pad"
              style={styles.textInput}
              onSubmitEditing={() => {this._feedbackInput.focus()}}
            />
          </View>

          <Text style={styles.formTitle}>Feedback: </Text>

          <View style={styles.row}>
            <GrowingTextInput
              ref={view => {this._feedbackInput = view; }}
              minHeight={80}
              placeholder="What would you comment on the super hero's scheduale?"
              style={styles.growingInput}
            />
          </View>

          <Text style={styles.formTitle}>Rating: {this.state.value}</Text>

          <Slider
            style={{ flex: 1, alignSelf: "stretch" }}
            step={1}
            minimumValue={1}
            maximumValue={10}
            value={this.state.value}
            onValueChange={value => this.setState({value})}
          />

        </ScrollView>

        <StatusBar barStyle="light-content" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  },
  titleText: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  row: {
    backgroundColor: 'white',
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#ccc',
    borderLeftWidth: StyleSheet.hairlineWidth,
    borderLeftColor: '#ccc',
    borderRightWidth: StyleSheet.hairlineWidth,
    borderRightColor: '#ccc',
  },
  firstRow: {
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
  textInput: {
    flex: 1,
    height: 45,
    paddingHorizontal: 15,
  },
  growingInput: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#ccc',
  },
  formTitle: {
    fontSize: 20,
    fontWeight: '500',
    paddingVertical: 15,
  }
});
