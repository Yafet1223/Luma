import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { AgentPalette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const SUGGESTIONS = [
  'Summarize my week',
  'Draft a reply',
  'Plan tomorrow',
  'Explain this simply',
];

export default function HomeScreen() {
  const scheme = useColorScheme() ?? 'light';
  const c = AgentPalette[scheme === 'dark' ? 'dark' : 'light'];
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.canvas }]}>
      <ScrollView
        contentContainerStyle={styles.scroll}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.header}>
          <View>
            <Text style={[styles.wordmark, { color: c.textMuted }]}>LUMA</Text>
            <Text style={[styles.headline, { color: c.text }]}>Your agent</Text>
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Open quick settings"
            onPress={() => router.push('/modal')}
            style={[styles.iconBtn, { backgroundColor: c.surfaceElevated, borderColor: c.border }]}>
            <Ionicons name="settings-outline" size={22} color={c.textMuted} />
          </Pressable>
        </View>

        <View style={[styles.heroCard, { backgroundColor: c.surface, borderColor: c.border }]}>
          <View style={[styles.accentBar, { backgroundColor: c.accentSoft }]} />
          <Text style={[styles.greeting, { color: c.textMuted }]}>Personalized for you</Text>
          <Text style={[styles.heroTitle, { color: c.text }]}>
            Ask anything.{'\n'}Clear answers, your context.
          </Text>
          <Text style={[styles.heroBody, { color: c.textMuted }]}>
            Luma remembers how you work—tone, goals, and routines—so every reply feels like yours, not generic AI.
          </Text>

          <Pressable
            style={[styles.primaryCta, { backgroundColor: c.accent }]}
            onPress={() => router.push('/modal')}>
            <Ionicons name="chatbubble-ellipses-outline" size={20} color="#FFFFFF" />
            <Text style={styles.primaryCtaText}>Start a conversation</Text>
          </Pressable>
        </View>

        <Text style={[styles.sectionLabel, { color: c.textMuted }]}>Try asking</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={styles.chipsRow}>
          {SUGGESTIONS.map((label) => (
            <Pressable
              key={label}
              style={[styles.chip, { backgroundColor: c.surface, borderColor: c.border }]}
              onPress={() => router.push('/modal')}>
              <Text style={[styles.chipText, { color: c.text }]}>{label}</Text>
            </Pressable>
          ))}
        </ScrollView>

        <View style={[styles.footerNote, { borderTopColor: c.border }]}>
          <Ionicons name="sparkles-outline" size={18} color={c.accent} />
          <Text style={[styles.footerText, { color: c.textMuted }]}>
            Preferences and memory stay on your terms—adjust anytime in settings.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
  },
  scroll: {
    paddingHorizontal: 20,
    paddingBottom: 28,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    marginTop: 8,
    marginBottom: 24,
  },
  wordmark: {
    fontSize: 11,
    fontWeight: '700',
    letterSpacing: 2,
    marginBottom: 4,
  },
  headline: {
    fontSize: 28,
    fontWeight: '700',
    letterSpacing: -0.5,
  },
  iconBtn: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  heroCard: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 22,
    marginBottom: 28,
    overflow: 'hidden',
  },
  accentBar: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    height: 3,
  },
  greeting: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  heroTitle: {
    fontSize: 24,
    fontWeight: '700',
    lineHeight: 32,
    letterSpacing: -0.3,
    marginBottom: 12,
  },
  heroBody: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 20,
  },
  primaryCta: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    paddingVertical: 14,
    paddingHorizontal: 20,
    borderRadius: 14,
  },
  primaryCtaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  sectionLabel: {
    fontSize: 13,
    fontWeight: '600',
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.8,
  },
  chipsRow: {
    gap: 10,
    paddingBottom: 8,
  },
  chip: {
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 999,
    borderWidth: 1,
    marginRight: 10,
  },
  chipText: {
    fontSize: 14,
    fontWeight: '500',
  },
  footerNote: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 10,
    marginTop: 28,
    paddingTop: 20,
    borderTopWidth: 1,
  },
  footerText: {
    flex: 1,
    fontSize: 13,
    lineHeight: 20,
  },
});
