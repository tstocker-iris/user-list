import React, { Component } from 'react';
import {ActivityIndicator, Text, View} from "react-native";
import UserList from "../../UserList";
import axios from "axios";

class ListScreen extends React.Component {

    API_URL = 'https://jsonplaceholder.typicode.com/users';

    constructor() {
        super();
        this.state = {
            isLoading: false,
            users: [],
        }
    }

    componentDidMount() {
        this.loadData();
    }


    loadData() {
        this.setState({
            isLoading: true,
        });
        axios.get(this.API_URL)
            .then(res => {
                this.handleApiResponse(res.data);
            })
    }

    handleApiResponse(data) {
        this.setState({
            users: data,
            isLoading: false,
        });
    }

    render() {
        return (
            <View>
                {!this.state.isLoading && this.state.users && this.state.users.length > 0 &&
                <UserList navigation={this.props.navigation} users={this.state.users}/>
                }
                {!this.state.isLoading && this.state.users && this.state.users.length == 0 &&
                <Text>Aucun utilisateur</Text>
                }
                {this.state.isLoading &&
                <ActivityIndicator />
                }
            </View>
        );
    }
}

export default ListScreen;