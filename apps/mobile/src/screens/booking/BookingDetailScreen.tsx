/**
 * Booking Detail Screen
 * View and manage individual session details
 */

import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Card } from '../../components/ui/Card'
import { Header } from '../../components/common/Header'
import { Button } from '../../components/ui/Button'
import { theme } from '../../theme'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'BookingDetail'>

export const BookingDetailScreen: React.FC<Props> = ({ route, navigation }) => {
  const { sessionId } = route.params
  
  // Placeholder data - will be replaced with API data
  const session = null

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <Header
        title="Session Details"
        leftAction={{
          onPress: () => navigation.goBack(),
        }}
      />
      <ScrollView style={styles.scrollView} contentContainerStyle={styles.content}>
        {session ? (
          <Card>
            <Text style={styles.title}>Session Information</Text>
            <Text style={styles.label}>Skill</Text>
            <Text style={styles.value}>{session.skill.name}</Text>
            
            <Text style={styles.label}>Date & Time</Text>
            <Text style={styles.value}>
              {new Date(session.scheduledAt).toLocaleString()}
            </Text>
            
            <Text style={styles.label}>Duration</Text>
            <Text style={styles.value}>{session.duration} minutes</Text>
            
            {session.location && (
              <>
                <Text style={styles.label}>Location</Text>
                <Text style={styles.value}>{session.location}</Text>
              </>
            )}
            
            {session.notes && (
              <>
                <Text style={styles.label}>Notes</Text>
                <Text style={styles.value}>{session.notes}</Text>
              </>
            )}
            
            <View style={styles.buttonContainer}>
              <Button
                title="Cancel Session"
                onPress={() => {}}
                variant="outline"
                fullWidth
                style={styles.cancelButton}
              />
            </View>
          </Card>
        ) : (
          <Card style={styles.emptyCard}>
            <Text style={styles.emptyText}>Session not found</Text>
          </Card>
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
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    marginBottom: theme.spacing.lg,
  },
  label: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.medium,
    color: theme.colors.textSecondary,
    marginTop: theme.spacing.md,
    marginBottom: theme.spacing.xs,
  },
  value: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.text,
  },
  buttonContainer: {
    marginTop: theme.spacing.xl,
  },
  cancelButton: {
    borderColor: theme.colors.error,
  },
  emptyCard: {
    alignItems: 'center',
    paddingVertical: theme.spacing.xxl,
  },
  emptyText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
  },
})

