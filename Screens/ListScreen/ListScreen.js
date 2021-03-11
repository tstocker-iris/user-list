import React, { Component } from 'react';
import {Text, View} from "react-native";
import UserList from "../../UserList";

class ListScreen extends React.Component {
    render() {
        return (
            <View>
                <UserList navigation={this.props.navigation} />
            </View>
        );
    }
}

export default ListScreen;