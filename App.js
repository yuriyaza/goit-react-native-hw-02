import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { useFonts } from 'expo-font';

export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-400.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-500.ttf'),
    'Roboto-700': require('./assets/fonts/Roboto-700.ttf'),
  });
  if (!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <RegistrationScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
});
