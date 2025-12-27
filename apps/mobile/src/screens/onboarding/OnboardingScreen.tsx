/**
 * Onboarding Screen
 * First-time user onboarding flow with enhanced UI
 */

import React, { useState } from 'react'
import { View, Text, StyleSheet, Dimensions, Animated } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../components/ui/Button'
import { Card } from '../../components/ui/Card'
import { AppIcon } from '../../components/ui/Icon'
import { theme } from '../../theme'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEYS } from '../../constants'
import type { NativeStackScreenProps } from '@react-navigation/native-stack'
import type { RootStackParamList } from '../../app/navigation'

type Props = NativeStackScreenProps<RootStackParamList, 'Onboarding'>

const { width } = Dimensions.get('window')

export const OnboardingScreen: React.FC<Props> = ({ navigation }) => {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      title: 'Welcome to HobbyHive',
      description: 'Connect with people who share your passions and learn new skills together.',
      icon: 'users',
      highlight: 'Learn for Free',
    },
    {
      title: 'Find Your Match',
      description: 'Get matched with people who want to teach what you want to learn, and vice versa.',
      icon: 'heart',
      highlight: 'Skill Exchange',
    },
    {
      title: 'Schedule Sessions',
      description: 'Book sessions, chat with your matches, and start your learning journey.',
      icon: 'calendar',
      highlight: 'Start Learning',
    },
  ]

  const fadeAnim = React.useRef(new Animated.Value(1)).current

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start()
  }, [currentStep])

  const handleNext = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1)
    } else {
      handleComplete()
    }
  }

  const handleSkip = () => {
    handleComplete()
  }

  const handleComplete = async () => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.ONBOARDING_COMPLETE, 'true')
      // Navigation will be handled by navigation guard
    } catch (error) {
      console.error('Error saving onboarding status:', error)
    }
  }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'bottom']}>
      <View style={styles.content}>
        <View style={styles.skipContainer}>
          <Text style={styles.skipText} onPress={handleSkip}>
            Skip
          </Text>
        </View>

        <Animated.View style={[styles.animatedContent, { opacity: fadeAnim }]}>
          <Card style={styles.card}>
            <View style={styles.iconContainer}>
              <View style={styles.iconCircle}>
                <AppIcon
                  name={steps[currentStep].icon}
                  size={48}
                  color={theme.colors.primary}
                />
              </View>
            </View>
            <Text style={styles.highlight}>{steps[currentStep].highlight}</Text>
            <Text style={styles.title}>{steps[currentStep].title}</Text>
            <Text style={styles.description}>{steps[currentStep].description}</Text>
          </Card>
        </Animated.View>

        <View style={styles.indicatorContainer}>
          {steps.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                index === currentStep && styles.indicatorActive,
              ]}
            />
          ))}
        </View>

        <View style={styles.buttonContainer}>
          {currentStep > 0 && (
            <Button
              title="Back"
              onPress={() => {
                fadeAnim.setValue(0)
                setCurrentStep(currentStep - 1)
              }}
              variant="outline"
              style={styles.backButton}
            />
          )}
          <Button
            title={currentStep === steps.length - 1 ? 'Get Started' : 'Next'}
            onPress={handleNext}
            fullWidth={currentStep === 0}
            style={currentStep > 0 ? styles.nextButton : undefined}
          />
        </View>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.surface,
  },
  content: {
    flex: 1,
    padding: theme.spacing.lg,
  },
  skipContainer: {
    alignItems: 'flex-end',
    marginBottom: theme.spacing.xl,
  },
  skipText: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.primary,
    fontWeight: theme.typography.fontWeight.semibold,
  },
  animatedContent: {
    flex: 1,
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    marginVertical: theme.spacing.xl,
    paddingVertical: theme.spacing.xxl,
  },
  iconContainer: {
    marginBottom: theme.spacing.xl,
  },
  iconCircle: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: theme.colors.primary + '15',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    fontSize: theme.typography.fontSize.sm,
    fontWeight: theme.typography.fontWeight.semibold,
    color: theme.colors.primary,
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: theme.spacing.sm,
  },
  title: {
    fontSize: theme.typography.fontSize.xxxl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    textAlign: 'center',
    marginBottom: theme.spacing.md,
  },
  description: {
    fontSize: theme.typography.fontSize.md,
    color: theme.colors.textSecondary,
    textAlign: 'center',
    lineHeight: theme.typography.fontSize.md * theme.typography.lineHeight.relaxed,
    paddingHorizontal: theme.spacing.md,
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: theme.spacing.xl,
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: theme.colors.border,
    marginHorizontal: 4,
  },
  indicatorActive: {
    backgroundColor: theme.colors.primary,
    width: 24,
  },
  buttonContainer: {
    flexDirection: 'row',
    gap: theme.spacing.md,
  },
  backButton: {
    flex: 1,
  },
  nextButton: {
    flex: 1,
  },
})

