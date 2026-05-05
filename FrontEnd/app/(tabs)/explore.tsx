import React from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

import { AgentPalette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

const CAPABILITIES = [
  {
    title: 'Context-aware replies',
    body: 'Uses what it knows about your projects and tone—without sounding robotic.',
    icon: 'layers-outline' as const,
  },
  {
    title: 'Quick actions',
    body: 'Summaries, drafts, and planning in a few taps from the home screen.',
    icon: 'flash-outline' as const,
  },
  {
    title: 'You stay in control',
    body: 'Open settings anytime to adjust how Luma speaks and what it remembers.',
    icon: 'shield-checkmark-outline' as const,
  },
];

export default function ExploreScreen() {
  const scheme = useColorScheme() ?? 'light';
  const c = AgentPalette[scheme === 'dark' ? 'dark' : 'light'];
  const router = useRouter();

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.canvas }]}>
      <ScrollView contentContainerStyle={styles.scroll} showsVerticalScrollIndicator={false}>
        <Text style={[styles.title, { color: c.text }]}>What Luma does</Text>
        <Text style={[styles.subtitle, { color: c.textMuted }]}>
          A focused assistant—not a generic chat box. Built around your workflow.
        </Text>

        {CAPABILITIES.map((item) => (
          <View
            key={item.title}
            style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>
            <View style={[styles.iconWrap, { backgroundColor: c.accentSoft }]}>
              <Ionicons name={item.icon} size={22} color={c.accent} />
            </View>
            <View style={styles.cardText}>
              <Text style={[styles.cardTitle, { color: c.text }]}>{item.title}</Text>
              <Text style={[styles.cardBody, { color: c.textMuted }]}>{item.body}</Text>
            </View>
          </View>
        ))}

        <Pressable
          style={[styles.cta, { backgroundColor: c.accent }]}
          onPress={() => router.push('/(tabs)/home')}>
          <Text style={styles.ctaText}>Back to agent</Text>
          <Ionicons name="arrow-forward" size={18} color="#FFFFFF" />
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: { flex: 1 },
  scroll: { paddingHorizontal: 20, paddingBottom: 32, paddingTop: 8 },
  title: { fontSize: 28, fontWeight: '700', letterSpacing: -0.4, marginBottom: 8 },
  subtitle: { fontSize: 15, lineHeight: 22, marginBottom: 24 },
  card: {
    flexDirection: 'row',
    gap: 16,
    padding: 18,
    borderRadius: 16,
    borderWidth: 1,
    marginBottom: 12,
  },
  iconWrap: {
    width: 44,
    height: 44,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardText: { flex: 1 },
  cardTitle: { fontSize: 17, fontWeight: '600', marginBottom: 6 },
  cardBody: { fontSize: 14, lineHeight: 21 },
  cta: {
    marginTop: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
    paddingVertical: 14,
    borderRadius: 14,
  },
  ctaText: { color: '#FFFFFF', fontSize: 16, fontWeight: '600' },
});
