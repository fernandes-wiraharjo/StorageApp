import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "@firebase/app";
import "@firebase/database";

const UserID = "user001";

class Profile extends Component {
    constructor(props) {
    super(props);

    this.state = {
      name: "",
      phone: ""
    };
  }

  saveToDatabase = () => {
    const { name, phone } = this.state;
    const dataProfile = { name, phone };
    firebase
      .database()
      .ref("/Users/" + UserID)
      .set(dataProfile)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  render() {
    return (
      <View>
        <TextInput
          onChangeText={txt => this.setState({ name: txt })}
          placeholder="Name"
        />
        <TextInput
          onChangeText={txt => this.setState({ phone: txt })}
          placeholder="Phone"
        />
        <TouchableOpacity onPress={() => this.saveToDatabase()}>
          <Text style={{ backgroundColor: "green", margin: 5 }}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Profile;
