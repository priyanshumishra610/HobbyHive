/**
 * Authentication API service
 * Handles all authentication-related API calls
 */

import { apiClient } from './client'
import { ENDPOINTS } from '../../constants'
import type { User, LoginCredentials, RegisterData, AuthResponse } from '../../models'

export const authApi = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.instance.post<AuthResponse>(
      ENDPOINTS.AUTH.LOGIN,
      credentials
    )
    await apiClient.setAuthToken(response.data.token)
    return response.data
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.instance.post<AuthResponse>(
      ENDPOINTS.AUTH.REGISTER,
      data
    )
    await apiClient.setAuthToken(response.data.token)
    return response.data
  },

  /**
   * Login with Google OAuth
   */
  loginWithGoogle: async (token: string): Promise<AuthResponse> => {
    const response = await apiClient.instance.post<AuthResponse>(
      ENDPOINTS.AUTH.GOOGLE,
      { token }
    )
    await apiClient.setAuthToken(response.data.token)
    return response.data
  },

  /**
   * Logout current user
   */
  logout: async (): Promise<void> => {
    try {
      await apiClient.instance.post(ENDPOINTS.AUTH.LOGOUT)
    } catch (error) {
      // Continue with logout even if API call fails
      console.error('Logout API error:', error)
    } finally {
      await apiClient.clearAuthToken()
    }
  },

  /**
   * Get current authenticated user
   */
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.instance.get<User>(ENDPOINTS.AUTH.ME)
    return response.data
  },
}

