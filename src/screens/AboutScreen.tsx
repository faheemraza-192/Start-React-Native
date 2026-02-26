import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import AppButton from '../components/AppButton';

export default function AboutScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Header />

      <Text style={styles.title}>About Screen</Text>
      <Text style={styles.text}>
        This is my second screen 🚀
      </Text>

      <AppButton
        title="Go Back"
        onPress={() => navigation.goBack()}
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
    fontWeight: '600',
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});