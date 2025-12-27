import { apiClient } from './client'
import type { Match } from '@/types'

/**
 * Matching API service
 */
export const matchingApi = {
  /**
   * Get match recommendations for the current user
   */
  getRecommendations: async (): Promise<Match[]> => {
    const response = await apiClient.instance.get<Match[]>('/matching/recommendations')
    return response.data
  },

  /**
   * Get all matches for the current user
   */
  getMatches: async (): Promise<Match[]> => {
    const response = await apiClient.instance.get<Match[]>('/matching/matches')
    return response.data
  },

  /**
   * Accept a match
   */
  acceptMatch: async (matchId: string): Promise<Match> => {
    const response = await apiClient.instance.post<Match>(
      `/matching/${matchId}/accept`
    )
    return response.data
  },

  /**
   * Decline a match
   */
  declineMatch: async (matchId: string): Promise<void> => {
    await apiClient.instance.post(`/matching/${matchId}/decline`)
  },
}

