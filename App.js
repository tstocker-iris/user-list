import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UserList from "./UserList";
import {Header} from "react-native-elements";
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function App() {
  return (
    <View>
        <SafeAreaProvider>
          <Header
              leftComponent={{ icon: 'menu', color: '#fff' }}
              centerComponent={{ text: 'Dendo Jitensha', style: { color: '#fff' } }}
              rightComponent={{ icon: 'home', color: '#fff' }}
          />
          <UserList />
          <StatusBar style="auto" />
        </SafeAreaProvider>
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
