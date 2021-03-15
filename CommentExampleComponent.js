import React, { Component } from 'react';
import axios from 'axios';
import {ActivityIndicator, FlatList, Text, TouchableOpacity, View} from "react-native";
import {ListItem} from "react-native-elements";

// https://jsonplaceholder.typicode.com/comments
class CommentExampleComponent extends React.Component {
    constructor() {
        super();
        console.log('constructor');
        this.state = {
            isLoading: false,
            comments: [],
        }
    }

    handleApiResponse(apiData) {
        // console.log(apiData);
        this.setState({
            comments: apiData,
            isLoading: false,
        });
    }

    componentDidMount() {
        console.log('componentDidMount - START');
        this.loadData();
        console.log('componentDidMount - END');
    }

    loadData() {
        this.setState({
            isLoading: true,
        });
        axios.get(`https://jsonplaceholder.typicode.com/comments`)
            .then(res => {
                this.handleApiResponse(res.data);
            })
    }

    render() {
        console.log('render');
        return (
            <View>
                {!this.state.isLoading && this.state.comments && this.state.comments.length > 0 &&
                    <FlatList
                        data={this.state.comments}
                        onRefresh={() => this.loadData()}
                        refreshing={this.state.isLoading}
                        renderItem={({item}) => {
                            return (
                                <ListItem bottomDivider>
                                    <ListItem.Content>
                                        <ListItem.Title>{item.body}</ListItem.Title>
                                    </ListItem.Content>
                                </ListItem>
                            );
                        }}
                    />
                }
                {!this.state.isLoading && this.state.comments && this.state.comments.length == 0 &&
                    <Text>Aucun commentaire</Text>
                }
                {this.state.isLoading &&
                    <ActivityIndicator />
                }
            </View>
        );
    }
}


export default CommentExampleComponent;