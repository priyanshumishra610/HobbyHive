import { apiClient } from './client'
import type { User } from '@/types'

export interface LoginCredentials {
  email: string
  password: string
}

export interface RegisterData {
  email: string
  password: string
  name: string
}

export interface AuthResponse {
  user: User
  token: string
}

/**
 * Authentication API service
 */
export const authApi = {
  /**
   * Login with email and password
   */
  login: async (credentials: LoginCredentials): Promise<AuthResponse> => {
    const response = await apiClient.instance.post<AuthResponse>(
      '/auth/login',
      credentials
    )
    apiClient.setAuthToken(response.data.token)
    return response.data
  },

  /**
   * Register a new user
   */
  register: async (data: RegisterData): Promise<AuthResponse> => {
    const response = await apiClient.instance.post<AuthResponse>(
      '/auth/register',
      data
    )
    apiClient.setAuthToken(response.data.token)
    return response.data
  },

  /**
   * Login with Google OAuth
   */
  loginWithGoogle: async (token: string): Promise<AuthResponse> => {
    const response = await apiClient.instance.post<AuthResponse>(
      '/auth/google',
      { token }
    )
    apiClient.setAuthToken(response.data.token)
    return response.data
  },

  /**
   * Logout current user
   */
  logout: async (): Promise<void> => {
    await apiClient.instance.post('/auth/logout')
    apiClient.clearAuthToken()
  },

  /**
   * Get current authenticated user
   */
  getCurrentUser: async (): Promise<User> => {
    const response = await apiClient.instance.get<User>('/auth/me')
    return response.data
  },
}

