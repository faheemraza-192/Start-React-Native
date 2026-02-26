
import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Header from '../components/Header';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to About" onPress={() => navigation.navigate('About')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 22,
    marginVertical: 20,
  },
});