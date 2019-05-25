/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class App extends Component<Props> {

  state = {
    placeName: '',
    places: []
  };

  placeNameChangeHandler = val => {
    this.setState({
      placeName: val
    });
  };

  placeNameSubmitHandler = () => {
    if (this.state.placeName.trim() === ""){
      return;
    }
    this.setState(prevState => {
      return {
        places: prevState.places.concat(prevState.placeName)
      };
    });
  };

  render() {
    const placesOutput = this.state.places.map((place,i) => (
      <Text key={i}>{place}</Text>
    ));
    return (
      <View style={styles.container}>
        <TextInput style={{width: 300, height: 50, borderColor: "black", borderWidth: 1}} value={this.state.placeName} placeholder="Hello" onChangeText={this.placeNameChangeHandler}/>
        <Button title="Add" onPress={this.placeNameSubmitHandler}/>
        <View>
          {placesOutput}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
