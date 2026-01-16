import React from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { COLORS } from '../../styles/global';
import LottieView from 'lottie-react-native';
import Header from '../../components/common/Header';

export default function MyPageScreen() {
  return (
    <SafeAreaView style={styles.safe} edges={['top', 'bottom']}>
      {/* Header */}
      <Header
        title="마이페이지"
        showTimer={false}
        backgroundColor={COLORS.white}
      />

      {/* Body */}
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/lottie/bird.json')}
          autoPlay
          loop
          style={styles.lottie}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1, backgroundColor: COLORS.white },

  // 간단 헤더(타이틀 중앙)
  header: {
    height: 52,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  headerTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#111827',
  },

  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  lottie: { width: 200, height: 200 },
});
