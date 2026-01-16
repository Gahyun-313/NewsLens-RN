import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../styles/global';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../components/common/Header';

export default function ForeignScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      {/* Header */}
      <Header
        title="해외 급상승 뉴스"
        showTimer={true}
        backgroundColor={COLORS.white}
      />

      {/* Body */}
      <View style={styles.container}>
        <Text>ForeignScreen</Text>
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
