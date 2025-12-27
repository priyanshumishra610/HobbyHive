/**
 * Application constants
 * Centralized constants for the HobbyHive mobile app
 */

// API Configuration
export const API_URL = __DEV__
  ? 'http://localhost:3001/api' // Development
  : 'https://api.hobbyhive.com/api' // Production

// Storage Keys
export const STORAGE_KEYS = {
  AUTH_TOKEN: 'auth_token',
  USER_DATA: 'user_data',
  ONBOARDING_COMPLETE: 'onboarding_complete',
} as const

// Skill Categories
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

// Navigation Route Names
export const ROUTES = {
  // Auth Stack
  LOGIN: 'Login',
  REGISTER: 'Register',
  
  // Onboarding
  ONBOARDING: 'Onboarding',
  
  // Main Tabs
  HOME: 'Home',
  MATCHES: 'Matches',
  CHAT: 'Chat',
  BOOKING: 'Booking',
  PROFILE: 'Profile',
  
  // Stack Screens
  PROFILE_CREATE: 'ProfileCreate',
  PROFILE_EDIT: 'ProfileEdit',
  CHAT_DETAIL: 'ChatDetail',
  BOOKING_DETAIL: 'BookingDetail',
  SETTINGS: 'Settings',
} as const

// API Endpoints
export const ENDPOINTS = {
  AUTH: {
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
    LOGOUT: '/auth/logout',
    ME: '/auth/me',
    GOOGLE: '/auth/google',
  },
  PROFILE: {
    BASE: '/profile',
    CREATE: '/profile',
    UPDATE: '/profile',
    GET: '/profile',
  },
  MATCHING: {
    BASE: '/matching',
    SUGGESTIONS: '/matching/suggestions',
    ACCEPT: '/matching/accept',
    DECLINE: '/matching/decline',
  },
  CHAT: {
    BASE: '/chat',
    MESSAGES: (chatId: string) => `/chat/${chatId}/messages`,
    SEND: (chatId: string) => `/chat/${chatId}/messages`,
  },
  BOOKING: {
    BASE: '/booking',
    CREATE: '/booking',
    UPDATE: (id: string) => `/booking/${id}`,
    CANCEL: (id: string) => `/booking/${id}/cancel`,
  },
} as const

