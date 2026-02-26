import React from 'react'
import { View, Text, TextInput } from 'react-native'
import styles from './Header.styles'

export default function Header() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Header</Text>
      <TextInput style={styles.input} placeholder="Enter text here" />
    </View>
  )
}