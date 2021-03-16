import React, { Component } from 'react';
import {FlatList, StyleSheet, TouchableOpacity, View} from "react-native";
import {ListItem, Text} from "react-native-elements";


class UserList extends React.Component {
    constructor() {
        super();
    }

    onPress(data) {
        this.props.navigation.navigate('Details', {user: data});
    }

    render() {
        return (
            <View>
                <FlatList
                    data={this.props.users}
                    renderItem={({item, index}) => {
                        return (
                            <TouchableOpacity onPress={() => this.onPress(item)}>
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.name}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
                        );
                    }}
                />
            </View>
        );
    }
}


const styles = StyleSheet.create({
    title: {
        marginBottom: '1rem'
    },
});

export default UserList;