import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../styles/global';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.white },
});
