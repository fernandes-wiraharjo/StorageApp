import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import firebase from "@firebase/app";
import "@firebase/database";

const UserID = "user001";

class UserList extends Component {
  state = {
    name: "",
    phone: ""
  };

  componentDidMount() {
    this.getDataUsers();
  }

  getDataUsers = () => {
    const userRefs = firebase.database().ref("Users/" + UserID);
    userRefs.on("value", function(snapshot) {
      console.log(snapshot.val());
      const { name, phone } = snapshot.val();
      if (name && name !== "") {
        // this.setState({ name: name });
      }

      if (phone && phone !== "") {
        // this.setState({ phone: phone });
      }
    });
  };

  render() {
    return (
      <View>
        <Text>Name: {this.state.name}</Text>
        <Text>phone: {this.state.phone}</Text>
      </View>
    );
  }
}

export default UserList;
