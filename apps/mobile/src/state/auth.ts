/**
 * Authentication store using Zustand
 * Manages user authentication state and persistence
 */

import { create } from 'zustand'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { STORAGE_KEYS } from '../constants'
import type { User } from '../models'

interface AuthState {
  user: User | null
  token: string | null
  isLoading: boolean
  isAuthenticated: boolean
  setAuth: (user: User, token: string) => Promise<void>
  clearAuth: () => Promise<void>
  checkAuth: () => Promise<void>
  setLoading: (loading: boolean) => void
}

/**
 * Authentication store
 * Handles user authentication state with AsyncStorage persistence
 */
export const useAuthStore = create<AuthState>((set, get) => ({
  user: null,
  token: null,
  isLoading: true,
  isAuthenticated: false,

  /**
   * Set authentication state and persist token
   */
  setAuth: async (user: User, token: string) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token)
      await AsyncStorage.setItem(STORAGE_KEYS.USER_DATA, JSON.stringify(user))
      set({ user, token, isAuthenticated: true })
    } catch (error) {
      console.error('Error saving auth data:', error)
    }
  },

  /**
   * Clear authentication state and remove persisted data
   */
  clearAuth: async () => {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
      await AsyncStorage.removeItem(STORAGE_KEYS.USER_DATA)
      set({ user: null, token: null, isAuthenticated: false })
    } catch (error) {
      console.error('Error clearing auth data:', error)
    }
  },

  /**
   * Check if user is authenticated by loading token from storage
   */
  checkAuth: async () => {
    try {
      const token = await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
      const userData = await AsyncStorage.getItem(STORAGE_KEYS.USER_DATA)
      
      if (token && userData) {
        const user = JSON.parse(userData) as User
        set({ user, token, isAuthenticated: true, isLoading: false })
      } else {
        set({ user: null, token: null, isAuthenticated: false, isLoading: false })
      }
    } catch (error) {
      console.error('Error checking auth:', error)
      set({ user: null, token: null, isAuthenticated: false, isLoading: false })
    }
  },

  /**
   * Set loading state
   */
  setLoading: (loading: boolean) => {
    set({ isLoading: loading })
  },
}))

