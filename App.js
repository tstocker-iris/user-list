// Need to be in first place
import 'react-native-gesture-handler';

import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserList from "./UserList";
import {Header} from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Avatar } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from './Screens/ListScreen/ListScreen'
import DetailsScreen from "./Screens/DetailsScreen/DetailsScreen";
import CommentExampleComponent from "./CommentExampleComponent";

const Stack = createStackNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <SafeAreaProvider>
          <Stack.Navigator initialRouteName="List">
            <Stack.Screen name="List"
                          options={{
                            title: 'Liste des utilisateurs',
                          }}
                          component={ListScreen}
            />
            <Stack.Screen name="Details"
                          options={({ route, navigation }) => ({
                              title: 'Détails de ' + route.params.user.firstname + ' ' + route.params.user.lastname,
                          })}
                          component={DetailsScreen}
            />
            <Stack.Screen name="ApiTest"
                          component={CommentExampleComponent}
            />
          </Stack.Navigator>
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
