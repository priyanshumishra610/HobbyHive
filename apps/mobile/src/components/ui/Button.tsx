/**
 * Button Component
 * Reusable button component with variants and sizes
 */

import React from 'react'
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ActivityIndicator,
  ViewStyle,
  TextStyle,
} from 'react-native'
import Animated, { useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated'
import { theme } from '../../theme'

const AnimatedTouchable = Animated.createAnimatedComponent(TouchableOpacity)

interface ButtonProps {
  title: string
  onPress: () => void
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
  loading?: boolean
  fullWidth?: boolean
  style?: ViewStyle
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = 'primary',
  size = 'md',
  disabled = false,
  loading = false,
  fullWidth = false,
  style,
}) => {
  const scale = useSharedValue(1)

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    }
  })

  const handlePressIn = () => {
    scale.value = withSpring(0.95)
  }

  const handlePressOut = () => {
    scale.value = withSpring(1)
  }

  const buttonStyle: ViewStyle[] = [
    styles.base,
    styles[variant],
    styles[`size_${size}`],
    disabled && styles.disabled,
    fullWidth && styles.fullWidth,
    style,
  ]

  const textStyle: TextStyle[] = [
    styles.text,
    styles[`text_${variant}`],
    styles[`textSize_${size}`],
    disabled && styles.textDisabled,
  ]

  return (
    <AnimatedTouchable
      style={[buttonStyle, animatedStyle]}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={variant === 'primary' ? theme.colors.textOnPrimary : theme.colors.primary}
          size="small"
        />
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </AnimatedTouchable>
  )
}

const styles = StyleSheet.create({
  base: {
    borderRadius: theme.borderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  primary: {
    backgroundColor: theme.colors.primary,
  },
  secondary: {
    backgroundColor: theme.colors.secondary,
  },
  outline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: theme.colors.primary,
  },
  ghost: {
    backgroundColor: 'transparent',
  },
  size_sm: {
    paddingVertical: theme.spacing.sm,
    paddingHorizontal: theme.spacing.md,
    minHeight: 36,
  },
  size_md: {
    paddingVertical: theme.spacing.md,
    paddingHorizontal: theme.spacing.lg,
    minHeight: 44,
  },
  size_lg: {
    paddingVertical: theme.spacing.lg,
    paddingHorizontal: theme.spacing.xl,
    minHeight: 52,
  },
  disabled: {
    opacity: 0.5,
  },
  fullWidth: {
    width: '100%',
  },
  text: {
    fontWeight: theme.typography.fontWeight.semibold,
  },
  text_primary: {
    color: theme.colors.textOnPrimary,
  },
  text_secondary: {
    color: theme.colors.textOnPrimary,
  },
  text_outline: {
    color: theme.colors.primary,
  },
  text_ghost: {
    color: theme.colors.primary,
  },
  textSize_sm: {
    fontSize: theme.typography.fontSize.sm,
  },
  textSize_md: {
    fontSize: theme.typography.fontSize.md,
  },
  textSize_lg: {
    fontSize: theme.typography.fontSize.lg,
  },
  textDisabled: {
    opacity: 0.7,
  },
})

