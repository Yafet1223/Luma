import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Feather, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.card}>
        <View style={styles.topGlow} />
        <View style={styles.bottomGlow} />

        <View style={styles.promptRow}>
          <Text style={styles.promptText}>
            I can search new contacts
            <Text style={styles.cursor}>|</Text>
          </Text>
        </View>

        <Text style={styles.title}>
          What Can I Do for{'\n'}You Today?
        </Text>

        <View style={styles.orbWrap}>
          <View style={[styles.orbRing, styles.orbRingOne]} />
          <View style={[styles.orbRing, styles.orbRingTwo]} />
          <View style={[styles.orbRing, styles.orbRingThree]} />
          <View style={[styles.orbRing, styles.orbRingFour]} />
          <View style={styles.orbCore} />
        </View>

        <Pressable style={styles.keyboardButton}>
          <Feather name="keyboard" size={18} color="#4B7A70" />
          <Text style={styles.keyboardText}>Use Keyboard</Text>
        </Pressable>

        <View style={styles.bottomNav}>
          <Pressable onPress={() => router.push('/modal')}>
            <View style={styles.badgeWrap}>
              <MaterialCommunityIcons name="account-search-outline" size={30} color="#9AC1B8" />
              <View style={styles.badge}>
                <Text style={styles.badgeText}>2</Text>
              </View>
            </View>
          </Pressable>

          <Pressable onPress={() => router.push('/(tabs)/home')}>
            <View style={styles.centerLogo}>
              <View style={[styles.logoRing, styles.logoRingOne]} />
              <View style={[styles.logoRing, styles.logoRingTwo]} />
            </View>
          </Pressable>

          <Pressable onPress={() => router.push('/(tabs)/explore')}>
            <Ionicons name="options-outline" size={30} color="#9AC1B8" />
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: '#DDF8EB',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
  },
  card: {
    flex: 1,
    width: '100%',
    maxWidth: 430,
    marginVertical: 8,
    borderRadius: 34,
    backgroundColor: '#070B0A',
    overflow: 'hidden',
    paddingHorizontal: 24,
    paddingTop: 28,
    paddingBottom: 24,
    borderWidth: 1,
    borderColor: 'rgba(105, 255, 197, 0.08)',
  },
  topGlow: {
    position: 'absolute',
    width: 280,
    height: 210,
    borderRadius: 999,
    backgroundColor: 'rgba(34, 197, 94, 0.26)',
    top: -80,
    left: -70,
    shadowColor: '#34d399',
    shadowOpacity: 0.45,
    shadowRadius: 70,
    shadowOffset: { width: 0, height: 0 },
  },
  bottomGlow: {
    position: 'absolute',
    width: 340,
    height: 220,
    borderRadius: 999,
    backgroundColor: 'rgba(16, 185, 129, 0.12)',
    bottom: 140,
    right: -120,
  },
  promptRow: {
    marginTop: 10,
    marginBottom: 20,
    alignSelf: 'center',
  },
  promptText: {
    color: '#B5FAD8',
    fontSize: 33,
    fontWeight: '500',
    letterSpacing: 0.2,
  },
  cursor: {
    color: '#8BEECA',
  },
  title: {
    color: '#B9FFDF',
    textAlign: 'center',
    fontSize: 54,
    fontWeight: '800',
    lineHeight: 62,
    letterSpacing: -0.6,
    marginBottom: 48,
  },
  orbWrap: {
    height: 360,
    alignItems: 'center',
    justifyContent: 'center',
  },
  orbRing: {
    position: 'absolute',
    borderColor: 'rgba(104, 255, 211, 0.84)',
    shadowColor: '#35F6B5',
    shadowOpacity: 0.7,
    shadowRadius: 16,
    shadowOffset: { width: 0, height: 0 },
  },
  orbRingOne: {
    width: 210,
    height: 84,
    borderRadius: 100,
    borderWidth: 5,
    transform: [{ rotate: '-18deg' }],
  },
  orbRingTwo: {
    width: 210,
    height: 84,
    borderRadius: 100,
    borderWidth: 5,
    transform: [{ rotate: '28deg' }],
  },
  orbRingThree: {
    width: 190,
    height: 74,
    borderRadius: 100,
    borderWidth: 4,
    transform: [{ rotate: '68deg' }],
  },
  orbRingFour: {
    width: 178,
    height: 68,
    borderRadius: 100,
    borderWidth: 4,
    transform: [{ rotate: '-52deg' }],
    opacity: 0.8,
  },
  orbCore: {
    width: 84,
    height: 84,
    borderRadius: 42,
    backgroundColor: 'rgba(8, 34, 28, 0.6)',
    borderWidth: 1,
    borderColor: 'rgba(120, 255, 212, 0.2)',
  },
  keyboardButton: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    gap: 10,
    marginTop: -10,
    marginBottom: 30,
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: 'rgba(120, 200, 176, 0.2)',
    backgroundColor: 'rgba(8, 20, 18, 0.45)',
  },
  keyboardText: {
    color: '#4E7F74',
    fontSize: 34,
    fontWeight: '500',
  },
  bottomNav: {
    marginTop: 'auto',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
  },
  badgeWrap: {
    position: 'relative',
  },
  badge: {
    position: 'absolute',
    right: -5,
    top: -4,
    backgroundColor: '#3CF8A4',
    borderRadius: 10,
    minWidth: 18,
    height: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 4,
  },
  badgeText: {
    color: '#072A1C',
    fontSize: 11,
    fontWeight: '800',
  },
  centerLogo: {
    width: 74,
    height: 74,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoRing: {
    position: 'absolute',
    borderWidth: 3,
    borderColor: 'rgba(64, 255, 189, 0.9)',
    borderRadius: 99,
  },
  logoRingOne: {
    width: 64,
    height: 30,
    transform: [{ rotate: '-28deg' }],
  },
  logoRingTwo: {
    width: 64,
    height: 30,
    transform: [{ rotate: '28deg' }],
  },
});
