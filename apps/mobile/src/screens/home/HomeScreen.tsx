/**
 * Home Screen (Dashboard)
 * Main dashboard showing user overview and quick actions
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Header } from '../../components/common/Header'
import { AppIcon } from '../../components/ui/Icon'
import { theme } from '../../theme'
import { useAuthStore } from '../../state/auth'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { MainTabParamList } from '../../app/navigation'

type Props = BottomTabScreenProps<MainTabParamList, 'Home'>

export const HomeScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuthStore()

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="HobbyHive" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <View style={styles.welcomeSection}>
          <Text style={styles.welcomeText}>Welcome back,</Text>
          <Text style={styles.userName}>{user?.name || 'User'}</Text>
        </View>

        <Card style={styles.statsCard}>
          <Text style={styles.statsTitle}>Your Activity</Text>
          <View style={styles.statsRow}>
            <View style={styles.statItem}>
              <View style={styles.statIconContainer}>
                <AppIcon name="heart" size={24} color={theme.colors.primary} />
              </View>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Matches</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIconContainer}>
                <AppIcon name="calendar" size={24} color={theme.colors.accent} />
              </View>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Sessions</Text>
            </View>
            <View style={styles.statItem}>
              <View style={styles.statIconContainer}>
                <AppIcon name="message-circle" size={24} color={theme.colors.secondary} />
              </View>
              <Text style={styles.statValue}>0</Text>
              <Text style={styles.statLabel}>Messages</Text>
            </View>
          </View>
        </Card>

        <Card style={styles.quickActionsCard}>
          <Text style={styles.sectionTitle}>Quick Actions</Text>
          <View style={styles.actionsGrid}>
            <Card
              style={styles.actionCard}
              onPress={() => navigation.navigate('Matches')}
              pressable
            >
              <AppIcon name="search" size={32} color={theme.colors.primary} />
              <Text style={styles.actionCardTitle}>Find Matches</Text>
            </Card>
            <Card
              style={styles.actionCard}
              onPress={() => navigation.navigate('Chat')}
              pressable
            >
              <AppIcon name="message-circle" size={32} color={theme.colors.accent} />
              <Text style={styles.actionCardTitle}>Messages</Text>
            </Card>
            <Card
              style={styles.actionCard}
              onPress={() => navigation.navigate('Booking')}
              pressable
            >
              <AppIcon name="calendar" size={32} color={theme.colors.secondary} />
              <Text style={styles.actionCardTitle}>Sessions</Text>
            </Card>
            <Card
              style={styles.actionCard}
              onPress={() => navigation.navigate('Profile')}
              pressable
            >
              <AppIcon name="user" size={32} color={theme.colors.primary} />
              <Text style={styles.actionCardTitle}>Profile</Text>
            </Card>
          </View>
        </Card>

        <Card style={styles.recentActivityCard}>
          <Text style={styles.sectionTitle}>Recent Activity</Text>
          <Text style={styles.emptyText}>No recent activity</Text>
        </Card>
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
  welcomeSection: {
    marginBottom: theme.spacing.lg,
  },
  welcomeText: {
    fontSize: theme.typography.fontSize.lg,
    color: theme.colors.textSecondary,
  },
  userName: {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
  },
  statsCard: {
    marginBottom: theme.spacing.md,
  },
  statsTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: theme.spacing.md,
  },
  statItem: {
    alignItems: 'center',
  },
  statIconContainer: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: theme.colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.sm,
  },
  statValue: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  statLabel: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
  },
  quickActionsCard: {
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  actionsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: theme.spacing.md,
  },
  actionCard: {
    width: '47%',
    alignItems: 'center',
    paddingVertical: theme.spacing.lg,
  },
  actionCardTitle: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.text,
    marginTop: theme.spacing.sm,
    textAlign: 'center',
  },
  recentActivityCard: {
    marginBottom: theme.spacing.md,
  },
  emptyText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    paddingVertical: theme.spacing.lg,
  },
})

