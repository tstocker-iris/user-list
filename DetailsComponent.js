    import React, { Component } from 'react';
import {StyleSheet, TouchableOpacity, View} from "react-native";
import {Avatar, Divider, SocialIcon, Text} from "react-native-elements";

class DetailsComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            imageHash: Date.now(),
        };
    }
    render() {
        return (
            <View>
                <Avatar
                    containerStyle={styles.avatarContainer}
                    rounded
                    size="xlarge"
                    source={{
                        uri:
                            'https://placeimg.com/300/300/people?'+this.state.imageHash,
                    }}
                />
                <View style={styles.container}>
                    {this.props.user &&
                        <Text h1 style={styles.center}>{this.props.user.firstname} {this.props.user.lastname}</Text>
                    }
                    <Divider style={styles.divider} />
                    <Text h4>Email : john.doe@test.fr</Text>
                    <View style={styles.socialContainer}>
                        <TouchableOpacity>
                            <SocialIcon
                                type='twitter'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <SocialIcon
                                raised={false}
                                type='gitlab'
                            />
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <SocialIcon
                                light
                                type='medium'
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        marginLeft: '15px',
        marginRight: '15px',
    },
    socialContainer: {
        marginTop: '10px',
        marginBottom: '10px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    avatarContainer: {
        marginTop: '30px',
        marginBottom: '30px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    center: {
        textAlign: 'center',
    },
    divider: {
        backgroundColor: '#E0E0E0',
        marginTop: '10px',
        marginBottom: '10px',
    }
});

export default DetailsComponent;