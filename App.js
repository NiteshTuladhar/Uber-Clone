import React from 'react';
import { StyleSheet, View } from 'react-native';
import Home from './screens/Home';
import Constants from 'expo-constants';


export default function App() {
  return (
    <View style={[styles.safeArea]}>
      <Home />
    </View>
  );
}

const styles = StyleSheet.create({
    safeArea : {
      flex: 1,
      paddingTop: Constants.statusBarHeight
    }
})