/**
 * Icon Component
 * Wrapper for react-native-vector-icons with consistent styling
 */

import React from 'react'
import Icon from 'react-native-vector-icons/Feather'
import MaterialIcon from 'react-native-vector-icons/MaterialIcons'
import { theme } from '../../theme'

export type IconName = string
export type IconFamily = 'feather' | 'material'

interface IconProps {
  name: IconName
  size?: number
  color?: string
  family?: IconFamily
  style?: any
}

export const AppIcon: React.FC<IconProps> = ({
  name,
  size = 24,
  color = theme.colors.text,
  family = 'feather',
  style,
}) => {
  const IconComponent = family === 'material' ? MaterialIcon : Icon

  return <IconComponent name={name} size={size} color={color} style={style} />
}

