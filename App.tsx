/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import { NewAppScreen } from '@react-native/new-app-screen';
import Homescreen from './src/screens/Homecreen';
import Header from './src/components/Header';
import { StatusBar, StyleSheet, useColorScheme, View, Text } from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    
    <SafeAreaProvider>
      
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Homescreen />
      <Header />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();

  return (
    <>
      <View style={styles.container}>
        <Text>dkfgjehdjehjsfy</Text>
        <NewAppScreen
          templateFileName="App.tsx"
          safeAreaInsets={safeAreaInsets}
        />
      </View>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
