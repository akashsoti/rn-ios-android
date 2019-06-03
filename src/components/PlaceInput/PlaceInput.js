import React, { Component } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";

class PlaceInput extends Component {
  state = {
    placeName: ""
  }; //initialising the state for the input text field which is empty by default

  placeNameChangedHandler = val => {
    this.setState({
      placeName: val
    }); //captures the value that is being filled in the text input and sets the state of the textinput to the value that is being passed
  }; 

  placeSubmitHandler = () => {
    if (this.state.placeName.trim() === "") {
      return;
    } //it checks if the textinput value is empty. If yes then it just returns it and not reder

    this.props.onPlaceAdded(this.state.placeName); //else there is a prop called onPlaceAdded which stores the name entered in the input field in the state of placeName
  };
  // is onPlaceAdded a prop of PlaceInput? is yes than it is inside a function and in a if else loop

  render() {
    return (
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Enter a name" // set a placeholder
          value={this.state.placeName} //sets empty value to this textinput
          onChangeText={this.placeNameChangedHandler} //onchange is a method provided by react-native which is call placenamechamgehandler, which is setting the value entered as the state
          style={styles.placeInput} //you have to set everything
        />
        <Button
          title="Add"
          style={styles.placeButton}
          onPress={this.placeSubmitHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  placeInput: {
    width: "70%"
  },
  placeButton: {
    width: "30%"
  }
});

export default PlaceInput;
