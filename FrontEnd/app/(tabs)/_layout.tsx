import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';
import { AgentPalette } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const scheme = colorScheme === 'dark' ? 'dark' : 'light';
  const p = AgentPalette[scheme];

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: p.accent,
        tabBarInactiveTintColor: p.textMuted,
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarStyle: {
          backgroundColor: p.tabBar,
          borderTopColor: p.border,
        },
      }}>
      <Tabs.Screen
        name="home"
        options={{
          title: 'Agent',
          tabBarIcon: ({ color }) => <Ionicons name="sparkles-outline" size={26} color={color} />,
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'About',
          tabBarIcon: ({ color }) => (
            <Ionicons name="information-circle-outline" size={26} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
