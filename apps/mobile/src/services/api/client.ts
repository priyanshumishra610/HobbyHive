/**
 * API Client
 * Handles HTTP requests, authentication, and error handling
 * Uses Axios with interceptors for token management
 */

import axios, { AxiosInstance, AxiosError, InternalAxiosRequestConfig } from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { API_URL, STORAGE_KEYS } from '../../constants'

class ApiClient {
  private client: AxiosInstance

  constructor() {
    this.client = axios.create({
      baseURL: API_URL,
      headers: {
        'Content-Type': 'application/json',
      },
      timeout: 10000, // 10 seconds
    })

    this.setupInterceptors()
  }

  /**
   * Setup request and response interceptors
   * - Request: Add auth token to headers
   * - Response: Handle errors and token refresh
   */
  private setupInterceptors(): void {
    // Request interceptor - add auth token
    this.client.interceptors.request.use(
      async (config: InternalAxiosRequestConfig) => {
        const token = await this.getToken()
        if (token && config.headers) {
          config.headers.Authorization = `Bearer ${token}`
        }
        return config
      },
      (error: AxiosError) => Promise.reject(error)
    )

    // Response interceptor - handle errors
    this.client.interceptors.response.use(
      (response) => response,
      async (error: AxiosError) => {
        if (error.response?.status === 401) {
          // Handle unauthorized - clear token
          await this.clearToken()
          // Navigation will be handled by auth store
        }
        return Promise.reject(error)
      }
    )
  }

  /**
   * Get auth token from AsyncStorage
   */
  private async getToken(): Promise<string | null> {
    try {
      return await AsyncStorage.getItem(STORAGE_KEYS.AUTH_TOKEN)
    } catch (error) {
      console.error('Error getting token:', error)
      return null
    }
  }

  /**
   * Save auth token to AsyncStorage
   */
  private async setToken(token: string): Promise<void> {
    try {
      await AsyncStorage.setItem(STORAGE_KEYS.AUTH_TOKEN, token)
    } catch (error) {
      console.error('Error saving token:', error)
    }
  }

  /**
   * Remove auth token from AsyncStorage
   */
  private async clearToken(): Promise<void> {
    try {
      await AsyncStorage.removeItem(STORAGE_KEYS.AUTH_TOKEN)
    } catch (error) {
      console.error('Error clearing token:', error)
    }
  }

  /**
   * Public method to set auth token
   */
  public async setAuthToken(token: string): Promise<void> {
    await this.setToken(token)
  }

  /**
   * Public method to clear auth token
   */
  public async clearAuthToken(): Promise<void> {
    await this.clearToken()
  }

  /**
   * Get the Axios instance
   */
  public get instance(): AxiosInstance {
    return this.client
  }
}

// Export singleton instance
export const apiClient = new ApiClient()

