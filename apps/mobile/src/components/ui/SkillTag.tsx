/**
 * Skill Tag Component
 * Displays a skill as a tag/chip with category color
 */

import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { theme } from '../../theme'

interface SkillTagProps {
  skill: string
  level?: 'beginner' | 'intermediate' | 'advanced'
  variant?: 'teach' | 'learn'
}

export const SkillTag: React.FC<SkillTagProps> = ({ skill, level, variant = 'teach' }) => {
  const getLevelColor = () => {
    switch (level) {
      case 'beginner':
        return theme.colors.accent
      case 'intermediate':
        return theme.colors.primary
      case 'advanced':
        return theme.colors.secondary
      default:
        return theme.colors.textSecondary
    }
  }

  return (
    <View
      style={[
        styles.tag,
        variant === 'learn' && styles.tagLearn,
        { borderColor: getLevelColor() },
      ]}
    >
      <Text style={styles.tagText}>{skill}</Text>
      {level && (
        <View style={[styles.levelDot, { backgroundColor: getLevelColor() }]} />
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  tag: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: theme.spacing.sm,
    paddingVertical: theme.spacing.xs,
    borderRadius: theme.borderRadius.full,
    borderWidth: 1,
    marginRight: theme.spacing.xs,
    marginBottom: theme.spacing.xs,
    backgroundColor: theme.colors.surface,
  },
  tagLearn: {
    borderStyle: 'dashed',
  },
  tagText: {
    fontSize: theme.typography.fontSize.xs,
    color: theme.colors.text,
    fontWeight: theme.typography.fontWeight.medium,
    marginRight: theme.spacing.xs,
  },
  levelDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
  },
})

