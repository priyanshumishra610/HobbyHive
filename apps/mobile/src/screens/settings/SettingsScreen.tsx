/**
 * Settings Screen
 * App settings and account management
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Alert } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Header } from '../../components/common/Header'
import { Button } from '../../components/ui/Button'
import { AppIcon } from '../../components/ui/Icon'
import { theme } from '../../theme'
import { useAuthStore } from '../../state/auth'
import { authApi } from '../../services/api/auth'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>

export const SettingsScreen: React.FC<Props> = ({ navigation }) => {
  const { user, clearAuth } = useAuthStore()

  const handleLogout = () => {
    Alert.alert(
      'Logout',
      'Are you sure you want to logout?',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Logout',
          style: 'destructive',
          onPress: async () => {
            try {
              await authApi.logout()
              await clearAuth()
              // Navigation will be handled by navigation guard
            } catch (error) {
              console.error('Logout error:', error)
              await clearAuth() // Clear local state even if API fails
            }
          },
        },
      ]
    )
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Settings"
        leftAction={{
          onPress: () => navigation.goBack(),
        }}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        <Card style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Account</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="mail" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Email</Text>
            </View>
            <Text style={styles.settingValue}>{user?.email}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="edit-2" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Edit Profile</Text>
            </View>
            <AppIcon name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        </Card>

        <Card style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>Preferences</Text>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="bell" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Notifications</Text>
            </View>
            <AppIcon name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="lock" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Privacy</Text>
            </View>
            <AppIcon name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        </Card>

        <Card style={styles.sectionCard}>
          <Text style={styles.sectionTitle}>About</Text>
          <View style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="info" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Version</Text>
            </View>
            <Text style={styles.settingValue}>1.0.0</Text>
          </View>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="file-text" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Terms of Service</Text>
            </View>
            <AppIcon name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.settingItem}>
            <View style={styles.settingLeft}>
              <AppIcon name="shield" size={20} color={theme.colors.textSecondary} />
              <Text style={styles.settingLabel}>Privacy Policy</Text>
            </View>
            <AppIcon name="chevron-right" size={20} color={theme.colors.textSecondary} />
          </TouchableOpacity>
        </Card>

        <Button
          title="Logout"
          onPress={handleLogout}
          variant="outline"
          fullWidth
          style={styles.logoutButton}
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
  sectionCard: {
    marginBottom: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.md,
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: theme.spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  settingLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  settingLabel: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
    marginLeft: theme.spacing.md,
  },
  settingValue: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
  },
  logoutButton: {
    marginTop: theme.spacing.lg,
    borderColor: theme.colors.error,
  },
})

