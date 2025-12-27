/**
 * Booking Screen
 * Display scheduled sessions and booking management
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Header } from '../../components/common/Header'
import { Button } from '../../components/ui/Button'
import { AppIcon } from '../../components/ui/Icon'
import { theme } from '../../theme'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { MainTabParamList } from '../../app/navigation'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Booking'>,
  NativeStackScreenProps<RootStackParamList>
>

export const BookingScreen: React.FC<Props> = ({ navigation }) => {
  // Placeholder data - will be replaced with API data
  const sessions: any[] = []

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Sessions" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {sessions.length === 0 ? (
          <Card style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No sessions scheduled</Text>
            <Text style={styles.emptyText}>
              Book a session with your matches to get started!
            </Text>
            <Button
              title="Find Matches"
              onPress={() => navigation.navigate('Matches')}
              style={styles.actionButton}
            />
          </Card>
        ) : (
          sessions.map((session) => (
            <Card
              key={session.id}
              style={styles.sessionCard}
              onPress={() => navigation.navigate('BookingDetail', { sessionId: session.id })}
              pressable
            >
              <View style={styles.sessionHeader}>
                <View style={styles.sessionIconContainer}>
                  <AppIcon name="calendar" size={24} color={theme.colors.primary} />
                </View>
                <View style={styles.sessionInfo}>
                  <Text style={styles.sessionTitle}>{session.skill.name}</Text>
                  <View style={styles.sessionDateTime}>
                    <AppIcon name="clock" size={14} color={theme.colors.textSecondary} />
                    <Text style={styles.sessionDate}>
                      {new Date(session.scheduledAt).toLocaleDateString()} at{' '}
                      {new Date(session.scheduledAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </Text>
                  </View>
                </View>
                <View
                  style={[
                    styles.statusBadge,
                    session.status === 'scheduled' && styles.statusScheduled,
                    session.status === 'completed' && styles.statusCompleted,
                    session.status === 'cancelled' && styles.statusCancelled,
                  ]}
                >
                  <Text style={styles.statusText}>{session.status}</Text>
                </View>
              </View>
            </Card>
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
    marginBottom: theme.spacing.lg,
  },
  actionButton: {
    marginTop: theme.spacing.md,
  },
  sessionCard: {
    marginBottom: theme.spacing.md,
  },
  sessionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  sessionInfo: {
    flex: 1,
  },
  sessionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  sessionDateTime: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  sessionDate: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  statusBadge: {
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
  },
  statusScheduled: {
    backgroundColor: theme.colors.info + '20',
  },
  statusCompleted: {
    backgroundColor: theme.colors.success + '20',
  },
  statusCancelled: {
    backgroundColor: theme.colors.error + '20',
  },
  statusText: {
    fontSize: theme.typography.fontSize.xs,
    fontWeight: theme.typography.fontWeight.medium,
    textTransform: 'capitalize',
    color: theme.colors.text,
  },
})

