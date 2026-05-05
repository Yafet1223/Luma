import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { AgentPalette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function WelcomeScreen() {
  const scheme = useColorScheme() ?? 'light';
  const c = AgentPalette[scheme === 'dark' ? 'dark' : 'light'];
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.canvas }]}>
      <View style={styles.decor}>
        <View style={[styles.blob, styles.blob1, { backgroundColor: c.accentSoft }]} />
        <View style={[styles.blob, styles.blob2, { backgroundColor: c.accentSoft }]} />
      </View>

      <View style={styles.main}>
        <Text style={[styles.brand, { color: c.accent }]}>LUMA</Text>
        <Text style={[styles.title, { color: c.text }]}>Welcome to Luma</Text>
        <Text style={[styles.tagline, { color: c.textMuted }]}>
          Your personal AI agent—clear answers, your context, always on your side.
        </Text>

        <View style={[styles.featureRow, { borderColor: c.border }]}>
          <View style={styles.featureItem}>
            <Ionicons name="person-outline" size={22} color={c.accent} />
            <Text style={[styles.featureText, { color: c.text }]}>Knows you</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: c.border }]} />
          <View style={styles.featureItem}>
            <Ionicons name="shield-checkmark-outline" size={22} color={c.accent} />
            <Text style={[styles.featureText, { color: c.text }]}>Private</Text>
          </View>
          <View style={[styles.divider, { backgroundColor: c.border }]} />
          <View style={styles.featureItem}>
            <Ionicons name="flash-outline" size={22} color={c.accent} />
            <Text style={[styles.featureText, { color: c.text }]}>Fast</Text>
          </View>
        </View>
      </View>

      <View style={styles.footer}>
        <Pressable
          style={[styles.primary, { backgroundColor: c.accent }]}
          onPress={() => router.push('/auth/index')}>
          <Text style={styles.primaryLabel}>Next</Text>
          <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
        </Pressable>

        <Pressable onPress={() => router.push('/auth/login')} style={styles.secondaryWrap}>
          <Text style={[styles.secondary, { color: c.accent }]}>I already have an account</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  decor: {
    ...StyleSheet.absoluteFillObject,
    overflow: 'hidden',
  },
  blob: {
    position: 'absolute',
    borderRadius: 999,
  },
  blob1: {
    width: 320,
    height: 320,
    top: -80,
    right: -100,
    opacity: 0.9,
  },
  blob2: {
    width: 220,
    height: 220,
    bottom: 120,
    left: -80,
    opacity: 0.7,
  },
  main: {
    flex: 1,
    paddingHorizontal: 28,
    justifyContent: 'center',
  },
  brand: {
    fontSize: 12,
    fontWeight: '800',
    letterSpacing: 4,
    marginBottom: 12,
  },
  title: {
    fontSize: 36,
    fontWeight: '800',
    letterSpacing: -1,
    lineHeight: 42,
    marginBottom: 14,
  },
  tagline: {
    fontSize: 17,
    lineHeight: 26,
    marginBottom: 36,
  },
  featureRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 16,
    paddingVertical: 16,
    paddingHorizontal: 12,
  },
  featureItem: {
    flex: 1,
    alignItems: 'center',
    gap: 8,
  },
  divider: {
    width: 1,
    height: 36,
  },
  featureText: {
    fontSize: 13,
    fontWeight: '600',
  },
  footer: {
    paddingHorizontal: 28,
    paddingBottom: 12,
    gap: 14,
  },
  primary: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 16,
    borderRadius: 16,
  },
  primaryLabel: {
    color: '#FFFFFF',
    fontSize: 17,
    fontWeight: '700',
  },
  secondaryWrap: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  secondary: {
    fontSize: 15,
    fontWeight: '600',
  },
});
