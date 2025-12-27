/**
 * Profile Create/Edit Screen
 * Create or edit user profile with skills and availability
 */

import React, { useState } from 'react'
import { View, Text, StyleSheet, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input } from '../../components/ui/Input'
import { Button } from '../../components/ui/Button'
import { Header } from '../../components/common/Header'
import { Card } from '../../components/ui/Card'
import { theme } from '../../theme'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'ProfileCreate'>

export const ProfileCreateScreen: React.FC<Props> = ({ navigation }) => {
  const [city, setCity] = useState('')
  const [bio, setBio] = useState('')
  const [loading, setLoading] = useState(false)

  const handleSave = async () => {
    setLoading(true)
    // TODO: Implement profile save API call
    setTimeout(() => {
      setLoading(false)
      navigation.goBack()
    }, 1000)
  }

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.keyboardView}
      >
        <Header
          title="Edit Profile"
          leftAction={{
            onPress: () => navigation.goBack(),
          }}
        />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.content}
          keyboardShouldPersistTaps="handled"
        >
          <Card>
            <Input
              label="City"
              placeholder="Enter your city"
              value={city}
              onChangeText={setCity}
            />

            <Input
              label="Bio"
              placeholder="Tell us about yourself"
              value={bio}
              onChangeText={setBio}
              multiline
              numberOfLines={4}
              style={styles.bioInput}
            />
          </Card>

          <Card style={styles.skillsCard}>
            <Text style={styles.sectionTitle}>Skills to Teach</Text>
            <Text style={styles.placeholderText}>Add skills you can teach</Text>
          </Card>

          <Card style={styles.skillsCard}>
            <Text style={styles.sectionTitle}>Skills to Learn</Text>
            <Text style={styles.placeholderText}>Add skills you want to learn</Text>
          </Card>

          <Button
            title="Save Profile"
            onPress={handleSave}
            loading={loading}
            fullWidth
            style={styles.saveButton}
          />
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  keyboardView: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  content: {
    padding: theme.spacing.md,
  },
  bioInput: {
    minHeight: 100,
    textAlignVertical: 'top',
  },
  skillsCard: {
    marginTop: theme.spacing.md,
  },
  sectionTitle: {
    fontSize: theme.typography.fontSize.lg,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.text,
    marginBottom: theme.spacing.sm,
  },
  placeholderText: {
    fontSize: theme.typography.fontSize.sm,
    color: theme.colors.textLight,
    fontStyle: 'italic',
  },
  saveButton: {
    marginTop: theme.spacing.lg,
  },
})

