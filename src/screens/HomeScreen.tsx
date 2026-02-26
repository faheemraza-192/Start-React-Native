import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AppButton from '../components/AppButton';

export default function HomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>Home Screen</Text>

      <AppButton
        title="Go to About"
        onPress={() => navigation.navigate('About')}
      />
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