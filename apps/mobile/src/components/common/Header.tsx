/**
 * Header Component
 * Reusable header with title and optional actions
 */

import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import { theme } from '../../theme'

interface HeaderProps {
  title: string
  leftAction?: {
    icon?: React.ReactNode
    onPress: () => void
  }
  rightAction?: {
    icon?: React.ReactNode
    onPress: () => void
  }
  style?: ViewStyle
}

export const Header: React.FC<HeaderProps> = ({
  title,
  leftAction,
  rightAction,
  style,
}) => {
  return (
    <View style={[styles.header, style]}>
      {leftAction && (
        <TouchableOpacity onPress={leftAction.onPress} style={styles.actionButton}>
          {leftAction.icon}
        </TouchableOpacity>
      )}
      <Text style={styles.title}>{title}</Text>
      {rightAction ? (
        <TouchableOpacity onPress={rightAction.onPress} style={styles.actionButton}>
          {rightAction.icon}
        </TouchableOpacity>
      ) : (
        <View style={styles.actionButton} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: theme.spacing.md,
    paddingVertical: theme.spacing.md,
    backgroundColor: theme.colors.background,
    borderBottomWidth: 1,
    borderBottomColor: theme.colors.border,
  },
  title: {
    fontSize: theme.typography.fontSize.xl,
    fontWeight: theme.typography.fontWeight.bold,
    color: theme.colors.text,
    flex: 1,
    textAlign: 'center',
  },
  actionButton: {
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
})

