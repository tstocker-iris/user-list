import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text} from "react-native-elements";

class DetailsScreen extends React.Component {
    render() {
        console.log(this.props);
        return (
            <View style={styles.container}>
                <Text h1>Details utilisateur</Text>
                <Text>{this.props.route.params.user.firstname} {this.props.route.params.user.lastname}</Text>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        marginLeft: '20px;',
        marginRight: '20px;',

    },
});

export default DetailsScreen;