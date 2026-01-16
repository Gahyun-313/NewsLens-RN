import React from 'react';
import { StatusBar } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import RootNavigator from './src/components/navigation/RootNavigator';
import { COLORS } from './src/styles/global';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="light-content" backgroundColor={COLORS.white} />
      <RootNavigator />
    </SafeAreaProvider>
  );
}
