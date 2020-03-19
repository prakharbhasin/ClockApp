import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from "./screens/Main"
import moment from "moment"


export default function App() {
  return (
    <View style={styles.container}>
      <Main />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
