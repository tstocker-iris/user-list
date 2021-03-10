import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {ListItem, Text} from "react-native-elements";


class UserList extends React.Component {
    constructor() {
        super();
        this.state = {
            users: [
                {
                    firstname: "John",
                    lastname: "Doe",
                },
                {
                    firstname: "Clark",
                    lastname: "Kent",
                },
                {
                    firstname: "Bruce",
                    lastname: "Wayne",
                },
            ],
        };
    }

    render() {
        return (
            <View>
                <Text h1 h1Style={styles.title}>Liste des utilisateurs</Text>

                {
                    this.state.users && this.state.users.map((item, key) => {
                        return (
                            <ListItem key={key} bottomDivider>
                                <ListItem.Content>
                                    <ListItem.Title>{item.firstname} {item.lastname}</ListItem.Title>
                                </ListItem.Content>
                            </ListItem>
                        );
                    })
                }

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