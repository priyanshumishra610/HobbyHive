/**
 * Chat List Screen
 * Display list of all active chats
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Header } from '../../components/common/Header'
import { theme } from '../../theme'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { MainTabParamList } from '../../app/navigation'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Chat'>,
  NativeStackScreenProps<RootStackParamList>
>

export const ChatListScreen: React.FC<Props> = ({ navigation }) => {
  // Placeholder data - will be replaced with API data
  const chats: any[] = []

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Messages" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {chats.length === 0 ? (
          <Card style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No messages yet</Text>
            <Text style={styles.emptyText}>
              Start a conversation with your matches!
            </Text>
          </Card>
        ) : (
          chats.map((chat) => (
            <TouchableOpacity
              key={chat.id}
              onPress={() => navigation.navigate('ChatDetail', { chatId: chat.id })}
            >
              <Card style={styles.chatCard}>
                <View style={styles.chatHeader}>
                  <Text style={styles.chatName}>
                    {chat.participants.map((p: any) => p.name).join(', ')}
                  </Text>
                  {chat.unreadCount > 0 && (
                    <View style={styles.badge}>
                      <Text style={styles.badgeText}>{chat.unreadCount}</Text>
                    </View>
                  )}
                </View>
                {chat.lastMessage && (
                  <Text style={styles.lastMessage} numberOfLines={1}>
                    {chat.lastMessage.content}
                  </Text>
                )}
              </Card>
            </TouchableOpacity>
          ))
        )}
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.md,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  emptyTitle: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  emptyText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
  },
  chatCard: {
    marginBottom: theme.spacing.md,
  },
  chatHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: theme.spacing.xs,
  },
  chatName: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    flex: 1,
  },
  badge: {
    backgroundColor: theme.colors.primary,
    borderRadius: theme.borderRadius.full,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: theme.spacing.xs,
  },
  badgeText: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.textOnPrimary,
    fontWeight: theme.typography.fontWeight.bold,
  },
  lastMessage: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
})

