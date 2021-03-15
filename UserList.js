import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
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

    onPress(data) {
        this.props.navigation.navigate('Details', {user: data});
    }

    render() {
        return (
            <View>
                {/*<Text h1 h1Style={styles.title}>Liste des utilisateurs</Text>*/}

                {
                    this.state.users && this.state.users.map((item, key) => {
                        return (
                            <TouchableOpacity key={key} onPress={() => this.onPress(item)}>
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.firstname} {item.lastname}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            </TouchableOpacity>
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