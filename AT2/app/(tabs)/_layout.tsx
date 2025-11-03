import { Tabs } from 'expo-router';
import React from 'react';
import { Ionicons } from '@expo/vector-icons';

import { HapticTab } from '@/components/haptic-tab';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarButton: HapticTab,
        tabBarShowLabel: false,
        tabBarActiveTintColor: '#757575ff', 
        tabBarInactiveTintColor: '#bbbbbb', 
        tabBarStyle: {
          backgroundColor: '#eef3f5ff', 
          borderTopWidth: 0,
          elevation: 0,
          height: 70,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="home" size={28} color={color} />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="person-circle" size={28} color={color} />,
        }}
      />
    </Tabs>
  );
}
