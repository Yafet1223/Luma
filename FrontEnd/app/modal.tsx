import { Link } from 'expo-router';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

import { AgentPalette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function ModalScreen() {
  const scheme = useColorScheme() ?? 'light';
  const c = AgentPalette[scheme === 'dark' ? 'dark' : 'light'];

  return (
    <SafeAreaView style={[styles.safe, { backgroundColor: c.canvas }]}>
      <View style={[styles.card, { backgroundColor: c.surface, borderColor: c.border }]}>
        <View style={[styles.iconWrap, { backgroundColor: c.accentSoft }]}>
          <Ionicons name="options-outline" size={28} color={c.accent} />
        </View>
        <Text style={[styles.title, { color: c.text }]}>Quick settings</Text>
        <Text style={[styles.body, { color: c.textMuted }]}>
          Placeholder for voice, memory, and model preferences. Wire this screen to your backend when
          you are ready.
        </Text>
        <Link href="/(tabs)/home" dismissTo asChild>
          <Pressable style={[styles.button, { backgroundColor: c.accent }]}>
            <Text style={styles.buttonText}>Done</Text>
          </Pressable>
        </Link>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  card: {
    borderRadius: 20,
    borderWidth: 1,
    padding: 24,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16,
  },
  title: {
    fontSize: 22,
    fontWeight: '700',
    marginBottom: 8,
  },
  body: {
    fontSize: 15,
    lineHeight: 22,
    marginBottom: 22,
  },
  button: {
    paddingVertical: 14,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});
