import { useState } from 'react';
import { useFonts } from 'expo-font';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { RegistrationScreen } from './Screens/RegistrationScreen';
import { LoginScreen } from './Screens/LoginScreen';

export default function App() {
  const [isRegistered, setIsRegistered] = useState(false);

  const [fontsLoaded] = useFonts({
    'Roboto-400': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-500': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-700': require('./assets/fonts/Roboto-Bold.ttf'),
  });
  if (!fontsLoaded) { return null; }

  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      {!isRegistered && <RegistrationScreen setIsRegistered={setIsRegistered} />}
      {isRegistered && <LoginScreen setIsRegistered={setIsRegistered} />}
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
