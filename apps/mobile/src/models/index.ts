/**
 * Data models and TypeScript interfaces
 * Shared types for the mobile app, aligned with backend and web app
 */

export interface User {
  id: string
  email: string
  name: string
  avatar?: string
  city?: string
  bio?: string
  createdAt: string
  updatedAt: string
}

export interface Skill {
  id: string
  name: string
  category: string
  level?: 'beginner' | 'intermediate' | 'advanced'
}

export interface UserProfile {
  id: string
  userId: string
  skillsToTeach: Skill[]
  skillsToLearn: Skill[]
  city: string
  availability: Availability
  trustScore: number
  createdAt: string
  updatedAt: string
}

export interface Availability {
  timezone: string
  availableDays: string[]
  availableHours: {
    start: string
    end: string
  }
}

export interface Match {
  id: string
  user1Id: string
  user2Id: string
  user1: User
  user2: User
  matchedSkills: {
    user1Teaches: Skill[]
    user2Teaches: Skill[]
  }
  matchScore: number
  status: 'pending' | 'active' | 'completed' | 'declined'
  createdAt: string
}

export interface ChatMessage {
  id: string
  chatId: string
  senderId: string
  content: string
  timestamp: string
  read: boolean
}

export interface Chat {
  id: string
  matchId: string
  participants: User[]
  lastMessage?: ChatMessage
  unreadCount: number
  createdAt: string
  updatedAt: string
}

export interface Session {
  id: string
  matchId: string
  scheduledAt: string
  duration: number // in minutes
  status: 'scheduled' | 'completed' | 'cancelled'
  skill: Skill
  location?: string
  notes?: string
  createdAt: string
}

export interface Review {
  id: string
  sessionId: string
  reviewerId: string
  revieweeId: string
  rating: number // 1-5
  comment: string
  createdAt: string
}

// API Request/Response types
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

