import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { AgentPalette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function AuthHubScreen() {
  const scheme = useColorScheme() ?? 'light';
  const c = AgentPalette[scheme === 'dark' ? 'dark' : 'light'];
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.canvas }]}>
      <View style={styles.topBar}>
        <Pressable
          accessibilityRole="button"
          hitSlop={12}
          onPress={() => router.back()}
          style={[styles.backBtn, { backgroundColor: c.surface, borderColor: c.border }]}>
          <Ionicons name="chevron-back" size={22} color={c.text} />
        </Pressable>
      </View>

      <View style={styles.content}>
        <Text style={[styles.title, { color: c.text }]}>Get started</Text>
        <Text style={[styles.subtitle, { color: c.textMuted }]}>
          Create an account or sign in to sync your preferences and conversations.
        </Text>

        <Pressable
          style={[styles.cardPrimary, { backgroundColor: c.surface, borderColor: c.border }]}
          onPress={() => router.push('/auth/signup')}>
          <View style={[styles.iconCircle, { backgroundColor: c.accentSoft }]}>
            <Ionicons name="person-add-outline" size={26} color={c.accent} />
          </View>
          <View style={styles.cardText}>
            <Text style={[styles.cardTitle, { color: c.text }]}>Sign up</Text>
            <Text style={[styles.cardBody, { color: c.textMuted }]}>New to Luma—takes under a minute</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={c.textMuted} />
        </Pressable>

        <Pressable
          style={[styles.cardSecondary, { backgroundColor: c.surfaceElevated, borderColor: c.border }]}
          onPress={() => router.push('/auth/login')}>
          <View style={[styles.iconCircle, { backgroundColor: c.accentSoft }]}>
            <Ionicons name="log-in-outline" size={26} color={c.accent} />
          </View>
          <View style={styles.cardText}>
            <Text style={[styles.cardTitle, { color: c.text }]}>Log in</Text>
            <Text style={[styles.cardBody, { color: c.textMuted }]}>Welcome back</Text>
          </View>
          <Ionicons name="chevron-forward" size={22} color={c.textMuted} />
        </Pressable>
      </View>

      <Pressable onPress={() => router.replace('/(tabs)/home')} style={styles.skipWrap}>
        <Text style={[styles.skip, { color: c.textMuted }]}>Skip for now</Text>
      </Pressable>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  topBar: {
    paddingHorizontal: 20,
    paddingTop: 4,
    paddingBottom: 8,
  },
  backBtn: {
    alignSelf: 'flex-start',
    width: 44,
    height: 44,
    borderRadius: 12,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 8,
  },
  title: {
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.5,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 28,
  },
  cardPrimary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    marginBottom: 12,
  },
  cardSecondary: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 14,
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
  },
  iconCircle: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 18, fontWeight: '700', marginBottom: 4 },
  cardBody: { fontSize: 14, lineHeight: 20 },
  skipWrap: { alignItems: 'center', paddingVertical: 20 },
  skip: { fontSize: 14, fontWeight: '500' },
});
