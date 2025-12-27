/**
 * Matches Screen
 * Display matching suggestions and active matches
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Header } from '../../components/common/Header'
import { AppIcon } from '../../components/ui/Icon'
import { SkillTag } from '../../components/ui/SkillTag'
import { Button } from '../../components/ui/Button'
import { theme } from '../../theme'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { MainTabParamList } from '../../app/navigation'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Matches'>,
  NativeStackScreenProps<RootStackParamList>
>

export const MatchesScreen: React.FC<Props> = ({ navigation }) => {
  // Placeholder data - will be replaced with API data
  const matches: any[] = []

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header title="Matches" />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {matches.length === 0 ? (
          <Card style={styles.emptyCard}>
            <Text style={styles.emptyTitle}>No matches yet</Text>
            <Text style={styles.emptyText}>
              Complete your profile to start finding matches!
            </Text>
          </Card>
        ) : (
          matches.map((match) => (
            <Card key={match.id} style={styles.matchCard} pressable>
              <View style={styles.matchHeader}>
                <View style={styles.avatarContainer}>
                  <Text style={styles.avatarText}>
                    {match.user.name.charAt(0).toUpperCase()}
                  </Text>
                </View>
                <View style={styles.matchInfo}>
                  <Text style={styles.matchName}>{match.user.name}</Text>
                  <View style={styles.locationRow}>
                    <AppIcon name="map-pin" size={12} color={theme.colors.textSecondary} />
                    <Text style={styles.matchLocation}>{match.user.city || 'Location'}</Text>
                  </View>
                </View>
                <View style={styles.matchScoreBadge}>
                  <Text style={styles.matchScoreText}>{match.matchScore}%</Text>
                </View>
              </View>
              <View style={styles.skillsContainer}>
                <Text style={styles.skillsLabel}>Matched Skills:</Text>
                <View style={styles.skillsRow}>
                  {/* Example skill tags */}
                </View>
              </View>
              <View style={styles.matchActions}>
                <Button
                  title="Message"
                  onPress={() => {}}
                  variant="primary"
                  size="sm"
                  style={styles.actionButton}
                />
                <Button
                  title="View Profile"
                  onPress={() => {}}
                  variant="outline"
                  size="sm"
                  style={styles.actionButton}
                />
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
  },
  matchCard: {
    marginBottom: theme.spacing.md,
  },
  matchHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  avatarContainer: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: theme.spacing.md,
  },
  avatarText: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textOnPrimary,
  },
  matchInfo: {
    flex: 1,
  },
  matchName: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.xs,
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  matchLocation: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  matchScoreBadge: {
    backgroundColor: theme.colors.primary + '20',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.md,
  },
  matchScoreText: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.primary,
  },
  skillsContainer: {
    marginBottom: theme.spacing.md,
  },
  skillsLabel: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textSecondary,
    marginBottom: theme.spacing.xs,
  },
  skillsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  matchActions: {
    flexDirection: 'row',
    gap: theme.spacing.sm,
  },
  actionButton: {
    flex: 1,
  },
})

