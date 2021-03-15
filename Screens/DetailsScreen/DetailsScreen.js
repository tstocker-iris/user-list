import React, { Component } from 'react';
import DetailsComponent from "../../DetailsComponent";
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

const Tab = createMaterialTopTabNavigator();

class DetailsScreen extends React.Component {
    render() {
        return (
            <Tab.Navigator>
                <Tab.Screen name="UserDetails"
                            options={{
                                title: 'Détails',
                            }}
                            component={() => <DetailsComponent user={this.props.route.params.user} />}
                />
                <Tab.Screen name="OrderList"
                            options={{
                                title: 'Commandes',
                            }}
                            component={() => <DetailsComponent user={this.props.route.params.user} />}
                />
            </Tab.Navigator>
        )
    }
}


export default DetailsScreen;