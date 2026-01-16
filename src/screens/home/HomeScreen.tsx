import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';

export default function HomeScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      {/* Header */}
      <Header
        title="실시간 급상승 뉴스"
        showTimer={true}
        backgroundColor={COLORS.white}
      />

      {/* Body */}
      <View style={styles.container}>
        <Text>HomeScreen</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.white },
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
