/**
 * Application constants
 */

export const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api'

export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000'

// Skill categories
export const SKILL_CATEGORIES = [
  'Music',
  'Cooking',
  'Art & Design',
  'Technology',
  'Languages',
  'Sports & Fitness',
  'Crafts',
  'Writing',
  'Photography',
  'Other',
] as const

// Routes
export const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/login',
  REGISTER: '/auth/register',
  DASHBOARD: '/dashboard',
  PROFILE: '/profile',
  PROFILE_CREATE: '/profile/create',
  MATCHES: '/matches',
  CHAT: '/chat',
  CHAT_DETAIL: (id: string) => `/chat/${id}`,
  BOOKING: '/booking',
  SESSION: (id: string) => `/session/${id}`,
} as const

