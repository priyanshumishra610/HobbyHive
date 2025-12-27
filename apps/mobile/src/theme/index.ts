/**
 * Theme configuration
 * Centralized colors, typography, and spacing for consistent UI design
 */

export const colors = {
  // Primary colors - Hive Yellow
  primary: '#FFB800', // Hive Yellow
  primaryDark: '#E6A600',
  primaryLight: '#FFC933',
  
  // Secondary colors - Dark Gray
  secondary: '#1F2937', // Dark Gray
  secondaryDark: '#111827',
  secondaryLight: '#374151',
  
  // Accent colors
  accent: '#10B981', // Green
  accentDark: '#059669',
  accentLight: '#34D399',
  
  // Neutral colors
  background: '#FFFFFF',
  backgroundDark: '#0F172A',
  surface: '#F8FAFC',
  surfaceDark: '#1E293B',
  
  // Text colors
  text: '#1E293B',
  textSecondary: '#64748B',
  textLight: '#94A3B8',
  textDark: '#0F172A',
  textOnPrimary: '#FFFFFF',
  
  // Status colors
  success: '#10B981',
  error: '#EF4444',
  warning: '#F59E0B',
  info: '#3B82F6',
  
  // Border colors
  border: '#E2E8F0',
  borderDark: '#334155',
  
  // Overlay
  overlay: 'rgba(0, 0, 0, 0.5)',
} as const

export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const

export const typography = {
  // Font sizes
  fontSize: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 18,
    xl: 20,
    xxl: 24,
    xxxl: 32,
  },
  
  // Font weights
  fontWeight: {
    regular: '400' as const,
    medium: '500' as const,
    semibold: '600' as const,
    bold: '700' as const,
  },
  
  // Line heights
  lineHeight: {
    tight: 1.2,
    normal: 1.5,
    relaxed: 1.8,
  },
} as const

export const borderRadius = {
  sm: 4,
  md: 8,
  lg: 12,
  xl: 16,
  full: 9999,
} as const

export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 5,
  },
} as const

/**
 * Theme type for TypeScript
 */
export type Theme = {
  colors: typeof colors
  spacing: typeof spacing
  typography: typeof typography
  borderRadius: typeof borderRadius
  shadows: typeof shadows
}

export const theme: Theme = {
  colors,
  spacing,
  typography,
  borderRadius,
  shadows,
}

