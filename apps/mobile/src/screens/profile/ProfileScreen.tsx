/**
 * Profile Screen
 * User profile view and management
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Button } from '../../components/ui/Button'
import { Header } from '../../components/common/Header'
import { AppIcon } from '../../components/ui/Icon'
import { SkillTag } from '../../components/ui/SkillTag'
import { theme } from '../../theme'
import { useAuthStore } from '../../state/auth'
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs'
import type { MainTabParamList } from '../../app/navigation'
import type { CompositeScreenProps } from '@react-navigation/native'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = CompositeScreenProps<
  BottomTabScreenProps<MainTabParamList, 'Profile'>,
  NativeStackScreenProps<RootStackParamList>
>

export const ProfileScreen: React.FC<Props> = ({ navigation }) => {
  const { user } = useAuthStore()

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Profile"
        rightAction={{
          onPress: () => navigation.navigate('Settings'),
        }}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Card style={styles.profileCard}>
          <View style={styles.avatarContainer}>
            {user?.avatar ? (
              <Image source={{ uri: user.avatar }} style={styles.avatar} />
            ) : (
              <View style={styles.avatarPlaceholder}>
                <Text style={styles.avatarText}>
                  {user?.name?.charAt(0).toUpperCase() || 'U'}
                </Text>
              </View>
            )}
            <View style={styles.editAvatarButton}>
              <AppIcon name="camera" size={16} color={theme.colors.textOnPrimary} />
            </View>
          </View>
          <Text style={styles.name}>{user?.name || 'User'}</Text>
          <View style={styles.locationRow}>
            {user?.city && (
              <>
                <AppIcon name="map-pin" size={16} color={theme.colors.textSecondary} />
                <Text style={styles.city}>{user.city}</Text>
              </>
            )}
          </View>
          <View style={styles.ratingRow}>
            <AppIcon name="star" size={16} color={theme.colors.primary} />
            <Text style={styles.ratingText}>4.8</Text>
            <Text style={styles.ratingCount}>(12 reviews)</Text>
          </View>
        </Card>

        <Card style={styles.infoCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <Text style={styles.bio}>
            {user?.bio || 'No bio available. Add one to tell others about yourself!'}
          </Text>
        </Card>

        <Card style={styles.skillsCard}>
          <View style={styles.sectionHeader}>
            <AppIcon name="book-open" size={20} color={theme.colors.primary} />
            <Text style={styles.sectionTitle}>Skills to Teach</Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.emptyText}>No skills added yet</Text>
            {/* Example: <SkillTag skill="Guitar" level="advanced" variant="teach" /> */}
          </View>
        </Card>

        <Card style={styles.skillsCard}>
          <View style={styles.sectionHeader}>
            <AppIcon name="book" size={20} color={theme.colors.accent} />
            <Text style={styles.sectionTitle}>Skills to Learn</Text>
          </View>
          <View style={styles.skillsContainer}>
            <Text style={styles.emptyText}>No skills added yet</Text>
            {/* Example: <SkillTag skill="Piano" level="beginner" variant="learn" /> */}
          </View>
        </Card>

        <Button
          title="Edit Profile"
          onPress={() => navigation.navigate('ProfileCreate')}
          fullWidth
          style={styles.editButton}
        />
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
  profileCard: {
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  avatarContainer: {
    marginBottom: theme.spacing.md,
    position: 'relative',
    alignSelf: 'center',
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 4,
    borderColor: theme.colors.primary + '20',
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 4,
    borderColor: theme.colors.primary + '20',
  },
  avatarText: {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.textOnPrimary,
  },
  editAvatarButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: theme.colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: theme.colors.background,
  },
  name: {
    fontSize: theme.typography.fontSize.xxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
    textAlign: 'center',
  },
  locationRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: theme.spacing.xs,
  },
  city: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: theme.spacing.sm,
  },
  ratingText: {
    fontSize: theme.typography.fontSize.md,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginLeft: theme.spacing.xs,
  },
  ratingCount: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textSecondary,
    marginLeft: theme.spacing.xs,
  },
  infoCard: {
    marginBottom: theme.spacing.md,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginLeft: theme.spacing.sm,
  },
  bio: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.relaxed,
  },
  skillsCard: {
    marginBottom: theme.spacing.md,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  emptyText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textLight,
    fontStyle: 'italic',
  },
  editButton: {
    marginTop: theme.spacing.md,
  },
})

