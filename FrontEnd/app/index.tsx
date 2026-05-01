import React, { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';

export default function LandingScreen() {
  const router = useRouter();
  const spin = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.loop(
      Animated.timing(spin, {
        toValue: 1,
        duration: 6000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  }, [spin]);

  const spinValue = spin.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.graphicRoot}>
        <View style={[styles.glow, styles.glowLarge]} />
        <View style={[styles.glow, styles.glowMedium]} />
        <View style={[styles.glow, styles.glowSmall]} />

        <View style={styles.orbWrapper}>
          <View style={styles.orbOuter} />
          <Animated.View style={[styles.spinRing, { transform: [{ rotate: spinValue }] }]} />
          <View style={styles.orbCore} />
          <View style={styles.orbHighlight} />
          <View style={styles.orbSpark} />
        </View>

        <View style={styles.bottomFade} />
      </View>

      <View style={styles.content}> 
        <View style={styles.titleRow}>
          <Text style={styles.titlePrimary}>Your Personal </Text>
          <Text style={styles.titleAccent}>AI</Text>
        </View>
        <Text style={styles.titlePrimary}>Ready to Help</Text>
        <Text style={styles.subtitle}>
          Your personal AI assistant, always ready to simplify tasks and make everyday life easier.
        </Text>

        <View style={styles.bottomRow}>
          <View style={styles.paginationRow}>
            <View style={styles.paginationActive} />
            <View style={styles.paginationDot} />
            <View style={styles.paginationDot} />
          </View>
          <TouchableOpacity
            onPress={() => router.push('/(tabs)/home')}
            style={styles.nextButton}
          >
            <Feather name="arrow-up-right" size={28} color="white" />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#050505',
  },
  graphicRoot: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  glow: {
    position: 'absolute',
    borderRadius: 999,
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.35,
    shadowRadius: 60,
    elevation: 20,
  },
  glowLarge: {
    width: 340,
    height: 340,
    top: 40,
  },
  glowMedium: {
    width: 260,
    height: 260,
    top: 70,
    opacity: 0.7,
  },
  glowSmall: {
    width: 200,
    height: 200,
    top: 100,
    opacity: 0.55,
  },
  orbWrapper: {
    width: 240,
    height: 240,
    justifyContent: 'center',
    alignItems: 'center',
  },
  orbOuter: {
    position: 'absolute',
    width: 220,
    height: 220,
    borderRadius: 110,
    backgroundColor: 'rgba(16, 185, 129, 0.2)',
    borderWidth: 2,
    borderColor: 'rgba(255,255,255,0.12)',
    shadowColor: '#22c55e',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.45,
    shadowRadius: 24,
    elevation: 18,
  },
  spinRing: {
    position: 'absolute',
    width: 200,
    height: 200,
    borderRadius: 100,
    borderWidth: 10,
    borderColor: 'rgba(255,255,255,0.12)',
    borderTopColor: 'rgba(167, 243, 208, 0.35)',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: 'rgba(167, 243, 208, 0.15)',
  },
  orbCore: {
    width: 150,
    height: 150,
    borderRadius: 75,
    backgroundColor: '#10b981',
    borderWidth: 1,
    borderColor: 'rgba(255,255,255,0.18)',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.8,
    shadowRadius: 30,
    elevation: 16,
  },
  orbHighlight: {
    position: 'absolute',
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: 'rgba(255,255,255,0.9)',
    top: 38,
    left: 45,
    opacity: 0.85,
  },
  orbSpark: {
    position: 'absolute',
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: 'rgba(255,255,255,0.75)',
    top: 56,
    left: 60,
  },
  bottomFade: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '50%',
    backgroundColor: '#050505',
    opacity: 0.9,
  },
  content: {
    paddingHorizontal: 24,
    paddingBottom: 48,
    paddingTop: 24,
    zIndex: 10,
  },
  titleRow: {
    flexDirection: 'row',
    alignItems: 'baseline',
    marginBottom: 8,
  },
  titlePrimary: {
    color: '#ffffff',
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -0.8,
  },
  titleAccent: {
    color: '#4ade80',
    fontSize: 40,
    fontWeight: '900',
    letterSpacing: -0.8,
    textShadowColor: 'rgba(52, 211, 153, 0.5)',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  subtitle: {
    color: '#9ca3af',
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 32,
    fontWeight: '500',
  },
  bottomRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  paginationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  paginationActive: {
    width: 32,
    height: 10,
    borderRadius: 999,
    backgroundColor: '#ffffff',
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#374151',
  },
  nextButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: '#10b981',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: 'rgba(167, 243, 208, 0.45)',
    shadowColor: '#10b981',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.75,
    shadowRadius: 18,
    elevation: 12,
  },
});
