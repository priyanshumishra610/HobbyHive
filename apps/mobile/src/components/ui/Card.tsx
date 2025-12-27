/**
 * Card Component
 * Reusable card container with shadow and border radius
 * Enhanced with press animations
 */

import React from 'react'
import { View, StyleSheet, ViewStyle, TouchableOpacity } from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { theme } from '../../theme'

const AnimatedView = Animated.createAnimatedComponent(View)

interface CardProps {
  children: React.ReactNode
  style?: ViewStyle
  padding?: boolean
  shadow?: boolean
  onPress?: () => void
  pressable?: boolean
}

export const Card: React.FC<CardProps> = ({
  children,
  style,
  padding = true,
  shadow = true,
  onPress,
  pressable = false,
}) => {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    if (pressable || onPress) {
      return {
        transform: [{ scale: scale.value }],
      }
    }
    return {}
  })

  const handlePressIn = () => {
    if (pressable || onPress) {
      scale.value = withSpring(0.98)
    }
  }

  const handlePressOut = () => {
    if (pressable || onPress) {
      scale.value = withSpring(1)
    }
  }

  const cardContent = (
    <AnimatedView
      style={[
        styles.card,
        padding && styles.padding,
        shadow && theme.shadows.md,
        animatedStyle,
        style,
      ]}
    >
      {children}
    </AnimatedView>
  )

  if (onPress) {
    return (
      <TouchableOpacity
        onPress={onPress}
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        activeOpacity={0.9}
      >
        {cardContent}
      </TouchableOpacity>
    )
  }

  return cardContent
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: theme.colors.background,
    borderRadius: theme.borderRadius.xl,
    borderWidth: 1,
    borderColor: theme.colors.border,
  },
  padding: {
    padding: theme.spacing.md,
  },
})

