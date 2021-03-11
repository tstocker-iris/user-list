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

const Stack = createStackNavigator();

export default function App() {
  return (
    <View>
      <NavigationContainer>

        <SafeAreaProvider>
          <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Dendo Jitensha', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <UserList />
          <StatusBar style="auto" />
        </SafeAreaProvider>
      </NavigationContainer>
    </View>
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
